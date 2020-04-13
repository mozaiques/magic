import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Route, Switch, useHistory } from "react-router-dom";

import { Button } from "../components";
import { tryRegisterFirstTab } from "../db";
import { AppObservable, initNewMasterObservable } from "../observable";

import { JoinRemoteMaster } from "./join-remote-master";

const OutsideDOMRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 640px;
  height: 100vh;
  margin: auto;
`;

const LocalButton = styled(Button)`
  max-width: 200px;
  margin: 0 3rem;
`;

export const MagicAppOutside = ({
  setAppObservable,
}: {
  setAppObservable: (ao: AppObservable) => void;
}) => {
  const history = useHistory();
  const [isFirstTab, setIsFirstTab] = useState<boolean | null>(null);

  useEffect(() => {
    tryRegisterFirstTab().then(setIsFirstTab);
  }, []);

  if (isFirstTab === null) {
    return null;
  }

  if (!isFirstTab) {
    return (
      <OutsideDOMRoot>
        <i>magic.mozaiqu.es already opened in an other tab.</i>
      </OutsideDOMRoot>
    );
  }

  return (
    <OutsideDOMRoot>
      <Switch>
        <Route exact path="/o">
          <LocalButton
            onClick={() => {
              setAppObservable(initNewMasterObservable());
              history.push("/i");
            }}
          >
            New master
          </LocalButton>
          <LocalButton
            onClick={() => {
              history.push("/o/join");
            }}
          >
            Join remote master
          </LocalButton>
        </Route>
        <Route path="/o/join">
          <JoinRemoteMaster setAppObservable={setAppObservable} />
        </Route>
      </Switch>
    </OutsideDOMRoot>
  );
};
