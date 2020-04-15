import { Observer, Observable, ConnectableObservable } from "rxjs";
import { publishReplay } from "rxjs/operators";
import { AppState } from "./types";
import { AppObservable } from "./observable";

const APP_STATE_CHANNEL_LABEL = "app-state-channel";

const makeRTCPeerConnection = () => {
  const peerConnection = new RTCPeerConnection({
    iceServers: [{ urls: ["stun:stun.l.google.com:19302"] }],
  });

  peerConnection.addEventListener("signalingstatechange", (evt) => {
    console.info("onsignalingstatechange", evt);
  });
  peerConnection.addEventListener("iceconnectionstatechange", (evt) => {
    console.info("oniceconnectionstatechange", evt);
  });
  peerConnection.addEventListener("icegatheringstatechange", (evt) => {
    console.info("onicegatheringstatechange", evt);
  });

  peerConnection.addEventListener("datachannel", (evt) => {
    console.info("ondatachannel", evt);
    const dataChannel = evt.channel;
    dataChannel.addEventListener("open", (evt) => console.info("dataChannel.onopen", evt));
    dataChannel.addEventListener("message", (evt) => console.info("dataChannel.onmessage", evt));
    dataChannel.addEventListener("error", (err) => console.info("dataChannel.onerror", err));
  });

  return peerConnection;
};

export const createLocalOffer = (): [
  Promise<RTCSessionDescription>,
  (remoteDescription: RTCSessionDescription) => void,
  Promise<RTCDataChannel>
] => {
  const peerConnection = makeRTCPeerConnection();
  const appStateChannel = peerConnection.createDataChannel(APP_STATE_CHANNEL_LABEL);

  const locallySet = peerConnection.createOffer().then((desc) => {
    peerConnection.setLocalDescription(desc);
  });

  const localSessionDescriptionPromise: Promise<RTCSessionDescription> = new Promise((resolve) => {
    peerConnection.onicecandidate = (candidate) => {
      if (candidate.candidate == null) {
        locallySet.then(() => {
          if (peerConnection.localDescription === null) {
            throw new Error("`peerConnection.localDescription` is nullish.");
          }
          resolve(peerConnection.localDescription);
        });
      }
    };
  });

  const remoteDescriptionSetter = (remoteDescription: RTCSessionDescription) => {
    peerConnection.setRemoteDescription(remoteDescription);
  };

  const appStateChannelPromise: Promise<RTCDataChannel> = new Promise((resolve) => {
    appStateChannel.addEventListener("open", (evt) => {
      resolve(appStateChannel);
    });
  });

  return [localSessionDescriptionPromise, remoteDescriptionSetter, appStateChannelPromise];
};

export const acceptRemoteOffer = (
  remoteOffer: RTCSessionDescriptionInit
): [Promise<RTCSessionDescription>, Promise<AppObservable>] => {
  const remoteSessionDescription = new RTCSessionDescription(remoteOffer);
  const peerConnection = makeRTCPeerConnection();

  const locallySet = peerConnection
    .setRemoteDescription(remoteSessionDescription)
    .then(() =>
      peerConnection.createAnswer().then((desc) => peerConnection.setLocalDescription(desc))
    );

  const localSessionDescriptionPromise: Promise<RTCSessionDescription> = new Promise((resolve) => {
    peerConnection.addEventListener("icecandidate", (candidate) => {
      if (candidate.candidate == null) {
        locallySet.then(() => {
          if (peerConnection.localDescription === null) {
            throw new Error("`peerConnection.localDescription` is nullish.");
          }
          resolve(peerConnection.localDescription);
        });
      }
    });
  });

  const appStateObservablePromise: Promise<AppObservable> = new Promise((resolve) => {
    peerConnection.addEventListener("datachannel", (evt) => {
      const dataChannel = evt.channel;

      const appStateChannelObservable: Observable<AppState> = new Observable(
        (observer: Observer<AppState>) => {
          dataChannel.addEventListener("message", (evt) => {
            observer.next(JSON.parse(evt.data));
          });
        }
      ).pipe(publishReplay(1));
      (appStateChannelObservable as ConnectableObservable<AppState>).connect();

      dataChannel.addEventListener("open", () => {
        if (dataChannel.label === APP_STATE_CHANNEL_LABEL) {
          resolve(appStateChannelObservable);
        }
      });
    });
  });

  return [localSessionDescriptionPromise, appStateObservablePromise];
};
