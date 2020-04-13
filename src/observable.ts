import { useState, useEffect } from "react";
import { BehaviorSubject, Observable } from "rxjs";

import { AppState, Player } from "./types";

export type AppObservable = Observable<AppState>;

export class MasterAppObservable extends BehaviorSubject<AppState> {
  outgoingDataChannels: RTCDataChannel[] = [];

  next = (newValue: AppState) => {
    super.next(newValue);
    this.outgoingDataChannels.map((dc) => dc.send(JSON.stringify(newValue)));
  };

  addPlayer = (player: Player) => {
    const current = this.getValue();
    this.next({
      ...current,
      players: [...current.players, player],
    });
  };

  addOutgoingDataChannel = (newOutgoingDataChannel: RTCDataChannel) => {
    this.outgoingDataChannels.push(newOutgoingDataChannel);
    newOutgoingDataChannel.send(JSON.stringify(this.getValue()));
  };
}

export const initNewMasterObservable = () => new MasterAppObservable({ players: [] });

export const useAppObservable = (
  maybeAppObservable: AppObservable | null
): [AppState | null, MasterAppObservable | null] => {
  if (maybeAppObservable === null) {
    throw new Error("`useAppObservable` called with a nullish AppObservable.");
  }

  const initialValue =
    maybeAppObservable instanceof MasterAppObservable ? maybeAppObservable.getValue() : null;

  const [appState, setAppState] = useState<AppState | null>(initialValue);

  useEffect(() => {
    const subscription = maybeAppObservable.subscribe((as) => {
      setAppState(as);
    });
    return () => subscription.unsubscribe();
  }, [maybeAppObservable]);

  return [appState, maybeAppObservable instanceof MasterAppObservable ? maybeAppObservable : null];
};
