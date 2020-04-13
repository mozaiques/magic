import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Player } from "../types";
import { Button, RightLayoutSection, RightLayoutH2, Label, Input } from "../components";

const Buttons = styled.div`
  display: flex;
`;

const LocalButton = styled(Button)`
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

function InputText<T extends string>({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: T;
  onChange: (t: T) => void;
}) {
  return (
    <Label>
      {label}
      <Input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value as T);
        }}
      />
    </Label>
  );
}

function InputNumber<T extends string>({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: T;
  onChange: (t: T) => void;
}) {
  return (
    <Label>
      {label}
      <Input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          console.log(e.target.value);
          onChange(e.target.value as T);
        }}
      />
    </Label>
  );
}

export const AddPlayer = ({ addPlayer }: { addPlayer: (newPlayer: Player) => void }) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [lifePoints, setLifePoints] = useState<number | null>(40);

  const improvedSetLifePoint = (candidate: string) => {
    const candidateLifePoints = parseInt(candidate);
    if (Number.isNaN(candidateLifePoints) || candidateLifePoints <= 0) {
      return setLifePoints(null);
    }
    return setLifePoints(candidateLifePoints);
  };

  return (
    <RightLayoutSection>
      <RightLayoutH2>Add player</RightLayoutH2>
      <InputText
        label="Player name"
        placeholder="Insert the player name"
        value={name}
        onChange={(newValue) => {
          setName(newValue);
        }}
      />
      <InputNumber
        label="Player initial life points"
        placeholder="Insert the player initial life points"
        value={lifePoints === null ? "" : lifePoints.toString()}
        onChange={(newValue) => {
          improvedSetLifePoint(newValue);
        }}
      />
      <Buttons>
        <LocalButton
          onClick={() => {
            history.push("/i");
          }}
        >
          Cancel
        </LocalButton>
        <LocalButton
          onClick={() => {
            if (name !== "" && lifePoints !== null) {
              addPlayer({
                uuid: uuidv4(),
                name,
                initialLifePoints: lifePoints,
              });
              history.push("/i");
            }
          }}
        >
          Add player
        </LocalButton>
      </Buttons>
    </RightLayoutSection>
  );
};
