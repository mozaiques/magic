import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  RightLayoutSection,
  RightLayoutH2,
  FakeInputSubmitOfferAnswer,
  InputSubmitOfferAnswer,
} from "../components";
import { createLocalOffer } from "../webrtc";

type RemoteDescriptionSetterTyper = ((remoteDescription: RTCSessionDescription) => void) | null;

export const AddDevice = ({
  addOutgoingDataChannel,
}: {
  addOutgoingDataChannel: (dc: RTCDataChannel) => void;
}) => {
  const history = useHistory();
  const [offer, setOffer] = useState<string | null>(null);
  const [remoteDescriptionSetter, setRemoteDescriptionSetter] = useState<
    RemoteDescriptionSetterTyper
  >(null);

  useEffect(() => {
    const [
      localSessionDescriptionPromise,
      localRemoteDescriptionSetter,
      appStateChannelPromise,
    ] = createLocalOffer();

    setRemoteDescriptionSetter(() => localRemoteDescriptionSetter);

    localSessionDescriptionPromise.then((desc) => {
      setOffer(JSON.stringify(desc));
    });

    appStateChannelPromise.then((dc) => {
      addOutgoingDataChannel(dc);
      history.push("/i");
    });
  }, [addOutgoingDataChannel, history]);

  return (
    <RightLayoutSection>
      <RightLayoutH2>Add device</RightLayoutH2>
      <FakeInputSubmitOfferAnswer label={"Offer"} content={offer || "Computing..."} />

      {offer && remoteDescriptionSetter ? (
        <InputSubmitOfferAnswer
          label={"Remote answer"}
          onSubmit={(sessionDescriptionInit) => {
            remoteDescriptionSetter(new RTCSessionDescription(sessionDescriptionInit));
          }}
          submitButtonLabel={"Confirm remote answer"}
          placeholder={"Paste remote answer here"}
        />
      ) : null}
    </RightLayoutSection>
  );
};
