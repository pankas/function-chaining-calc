import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInitialInput } from "../../home-screen.slice";
import { RootState } from "../../../../types";
import {
  BullsEyeWrapper,
  Circle,
  CircleContainer,
  Container,
  Input,
  InputContainer,
  Label,
} from "../../home-screen.styled";

const InitialInput = () => {
  const dispatch = useDispatch();
  const initialInput = useSelector((state: RootState) => {
    return state.functionChain.initialInput;
  });
  const handleChange = (e) => {
    dispatch(setInitialInput(Number(e.target.value)));
  };
  return (
    <Container>
      <Label bgColor="#E29A2D">Initial Value of x:</Label>
      <InputContainer>
        <Input
          type="number"
          value={initialInput}
          onChange={handleChange}
          isLeftAligned={true}
          borderColor={"#E29A2D"}
          borderColorLight={"#FFEED5"}
        />
        <CircleContainer isLeftAligned={true} borderColor={"#E29A2D"}>
          <BullsEyeWrapper id={`output-${0}`}>
            <Circle size={"8"} color="#4a90e2" />
          </BullsEyeWrapper>
        </CircleContainer>
      </InputContainer>
    </Container>
  );
};

export default InitialInput;
