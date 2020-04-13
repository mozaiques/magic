import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { AppObservable } from "../observable";
import { InputSubmitOfferAnswer, FakeInputSubmitOfferAnswer } from "../components";
import { acceptRemoteOffer } from "../webrtc";

const JoinRemoteMasterRoot = styled.div`
  display: block;
  width: 100%;
`;

export const JoinRemoteMaster = ({
  setAppObservable,
}: {
  setAppObservable: (ao: AppObservable) => void;
}) => {
  const history = useHistory();
  const [answer, setAnswer] = useState<string | null>(null);

  return (
    <JoinRemoteMasterRoot>
      <InputSubmitOfferAnswer
        label={"Remote offer"}
        onSubmit={
          answer === null
            ? (remoteOffer) => {
                setAnswer("Computing...");

                const [
                  localSessionDescriptionPromise,
                  appStateObservablePromise,
                ] = acceptRemoteOffer(remoteOffer);

                localSessionDescriptionPromise.then((desc) => {
                  setAnswer(JSON.stringify(desc));
                });

                appStateObservablePromise.then((appStateObservable) => {
                  setAppObservable(appStateObservable);
                  history.push("/i");
                });
              }
            : undefined
        }
        submitButtonLabel={"Confirm remote offer"}
        placeholder={"Paste remote offer here"}
        readOnly={answer !== null}
      />
      {answer !== null ? <FakeInputSubmitOfferAnswer label={"Answer"} content={answer} /> : null}
    </JoinRemoteMasterRoot>
  );
};
