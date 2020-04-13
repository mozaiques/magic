import React, { useState } from "react";
import styled from "styled-components";

import { border, hover } from "./colors";

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 1rem;

  border: 1px dotted ${border};

  font-size: 1rem;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: ${hover};
  }
`;

export const RightLayoutSection = styled.div`
  padding: 1rem;
  max-width: 640px;
`;

export const RightLayoutH2 = styled.h2`
  margin-bottom: 1rem;

  font-weight: 900;
  font-size: 2rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  display: block;
  margin-top: 0.5rem;
  padding: 0.5rem;
  width: 100%;
`;

const Textarea = styled.textarea`
  display: block;
  margin-top: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  height: 140px;

  font-family: monospace;
  word-break: break-all;
  resize: none;
`;

const InputSubmitOfferAnswerRoot = styled.div`
  display: block;
  width: 100%;
`;

export const InputSubmitOfferAnswer = ({
  label,
  placeholder,
  onSubmit,
  submitButtonLabel,
  readOnly,
}: {
  label: string;
  placeholder?: string;
  onSubmit?: (v: RTCSessionDescriptionInit) => void;
  submitButtonLabel?: string;
  readOnly?: boolean;
}) => {
  const [rawOfferAnswer, setRawOfferAnswer] = useState("");
  return (
    <InputSubmitOfferAnswerRoot>
      <Label>
        {label}
        <Textarea
          placeholder={placeholder}
          onChange={(e) => {
            setRawOfferAnswer(e.target.value);
          }}
          value={rawOfferAnswer}
          readOnly={readOnly}
        />
      </Label>
      {onSubmit ? (
        <Button
          onClick={() => {
            onSubmit(JSON.parse(rawOfferAnswer));
          }}
        >
          {submitButtonLabel ? submitButtonLabel : "Submit"}
        </Button>
      ) : null}
    </InputSubmitOfferAnswerRoot>
  );
};

export const FakeInputSubmitOfferAnswer = ({
  label,
  content,
}: {
  label: string;
  content: string;
}) => {
  return (
    <InputSubmitOfferAnswerRoot>
      <Label>
        {label}
        <Textarea value={content} readOnly={true} />
      </Label>
    </InputSubmitOfferAnswerRoot>
  );
};
