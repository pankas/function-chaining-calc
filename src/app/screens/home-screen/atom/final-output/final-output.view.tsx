import React from "react";
import { useSelector } from "react-redux";
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

export const FinalOutput = () => {
  const output = useSelector((state: RootState) => state.functionChain.output);
  return (
    <Container>
      <Label bgColor="#4CAF79">Final Output y</Label>
      <InputContainer>
        <CircleContainer isLeftAligned={false} borderColor={"#2DD179"}>
          <BullsEyeWrapper id={"input-6"}>
            <Circle size={"8"} color="#4a90e2" />
          </BullsEyeWrapper>
        </CircleContainer>
        <Input
          type="number"
          isLeftAligned={false}
          borderColor={"#2DD179"}
          borderColorLight={"#C5F2DA"}
          value={output}
          readOnly
        />
      </InputContainer>
    </Container>
  );
};

export default FinalOutput;
