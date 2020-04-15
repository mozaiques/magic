import React, { useState } from "react";
import { MemoryRouter, Switch, Route, Redirect } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import { AddPlayer } from "./subapps/add-player";

import { Sidebar } from "./Sidebar";
import { MagicAppOutside } from "./subapps/outside";
import { AppObservable, useAppObservable, MasterAppObservable } from "./observable";
import { AddDevice } from "./subapps/add-device";

const InsideDOMRoot = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 280px auto;
`;

const ResetCSS = createGlobalStyle`
  body {
    font-family: Lato, sans-serif;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-style: italic;
`;

const ErrorNode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  font-style: italic;
`;

const MasterRoutes = ({ masterAppObservable }: { masterAppObservable: MasterAppObservable }) => (
  <>
    <Route path="/i/add-player">
      <AddPlayer addPlayer={masterAppObservable.addPlayer} />
    </Route>
    <Route path="/i/add-device">
      <AddDevice addOutgoingDataChannel={masterAppObservable.addOutgoingDataChannel} />
    </Route>
  </>
);

const MagicAppInside = ({ appObservable }: { appObservable: AppObservable | null }) => {
  const [appState, masterAppObservable] = useAppObservable(appObservable);

  if (appState === null) {
    return null;
  }

  return (
    <InsideDOMRoot>
      <Sidebar players={appState.players} />
      <Switch>
        <Route exact path="/i">
          <Home>No video stream yet</Home>
        </Route>
        {masterAppObservable ? <MasterRoutes masterAppObservable={masterAppObservable} /> : null}
      </Switch>
    </InsideDOMRoot>
  );
};

class ErrorBoundary extends React.Component<{}, { hasError: boolean; errorString: null | string }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, errorString: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, errorString: error.toString() };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorNode>{`Oopsie, something went wrong: ${this.state.errorString}.`}</ErrorNode>;
    }

    return this.props.children;
  }
}

export const App = () => {
  const [appObservable, setAppObservable] = useState<AppObservable | null>(null);

  return (
    <>
      <ResetCSS />
      <ErrorBoundary>
        <MemoryRouter>
          <Switch>
            <Route path="/o">
              <MagicAppOutside setAppObservable={setAppObservable} />
            </Route>
            <Route path="/i">
              <MagicAppInside appObservable={appObservable} />
            </Route>
            <Redirect to="/o" />
          </Switch>
        </MemoryRouter>
      </ErrorBoundary>
    </>
  );
};
