type PlayerUuid = string;

export interface Player {
  uuid: PlayerUuid;
  name: string;
  initialLifePoints: number;
}

export interface AppState {
  players: Player[];
}
