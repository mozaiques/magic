import React from "react";
import styled from "styled-components";

import { border } from "./colors";
import { Player } from "./types";
import { useHistory } from "react-router-dom";
import { Button } from "./components";

const SidebarDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  border-right: 1px dotted ${border};
`;

const Magic = styled.h1`
  margin-bottom: 1rem;

  text-align: center;
  font-weight: 900;
  font-size: 2rem;
`;

const Players = styled.div`
  flex: 1;
`;

const LocalButton = styled(Button)`
  margin-bottom: 1rem;
`;

const Actions = styled.div`
  height: auto;

  ${LocalButton}:last-child {
    margin-bottom: 0;
  }
`;

const NoPlayerP = styled.p`
  font-style: italic;
  text-align: center;
`;

const PlayerDiv = styled.div`
  display: flex;
  padding: 1rem;
`;

const PlayerName = styled.span`
  flex: 1;
`;
const PlayerLifePointsDiv = styled.div``;
const PlayerLifePointsSpan = styled.span`
  padding: 0.25rem;
  border-radius: 4px;
  border: 1px solid ${border};
`;

const PlayerView = ({ player }: { player: Player }) => (
  <PlayerDiv>
    <PlayerName>{player.name}</PlayerName>
    <PlayerLifePointsDiv>
      <PlayerLifePointsSpan>{player.initialLifePoints}</PlayerLifePointsSpan>
    </PlayerLifePointsDiv>
  </PlayerDiv>
);

const NoPlayer = () => <NoPlayerP>Start by adding some players</NoPlayerP>;

export const Sidebar = ({ players }: { players: Player[] }) => {
  const history = useHistory();
  return (
    <SidebarDiv>
      <Magic>magic</Magic>
      <Players>
        {players.length ? (
          <Players>
            {players.map((p) => (
              <PlayerView key={p.uuid} player={p} />
            ))}
            <LocalButton>Manage life points</LocalButton>
          </Players>
        ) : (
          <NoPlayer />
        )}
      </Players>
      <Actions>
        <LocalButton
          onClick={() => {
            history.push("/i/add-player");
          }}
        >
          Add player
        </LocalButton>
        <LocalButton
          onClick={() => {
            history.push("/i/add-device");
          }}
        >
          Add device
        </LocalButton>
      </Actions>
    </SidebarDiv>
  );
};
