import React from "react";
import {
  CardContainer,
  CircleContainer,
  CircleContentContainer,
  CircleLabel,
  ContentContainer,
  GroupDots,
  Input,
  InputContainer,
  InputLabel,
  Select,
  Title,
  TitleContainer,
} from "./function-card.styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../types";
import { setEquation } from "../../home-screen.slice";
import { BullsEyeWrapper, Circle } from "../../home-screen.styled";
import MyImg from "../../../../../group-dots.png";
import ConnectorLine from "../line-connector";
import FinalOutput from "../final-output";

const FunctionCard = ({
  id,
  disabledNext,
  style,
  containerRef,
  isTerminal,
}) => {
  const dispatch = useDispatch();
  const equations = useSelector((state: RootState) => {
    return state.functionChain.equations[id];
  });
  const handleEquationChange = (e) => {
    const value = e.target.value;
    dispatch(setEquation({ id, equation: value }));
  };
  return (
    <>
      <CardContainer id={id} style={style}>
        <ContentContainer>
          <TitleContainer>
            <GroupDots src={MyImg} />
            <Title>Function {id}</Title>
          </TitleContainer>
          <InputContainer>
            <InputLabel>Equation</InputLabel>
            <Input
              type="text"
              value={equations}
              onChange={handleEquationChange}
              placeholder="Equation"
            />
          </InputContainer>
          <InputContainer>
            <InputLabel>Next function</InputLabel>
            <Select disabled>
              <option>{disabledNext}</option>
            </Select>
          </InputContainer>
        </ContentContainer>
        <CircleContainer>
          <CircleContentContainer>
            <BullsEyeWrapper id={`input-${id}`}>
              <Circle size={"8"} color="#4a90e2" />
            </BullsEyeWrapper>
            <CircleLabel>Input</CircleLabel>
          </CircleContentContainer>
          <CircleContentContainer>
            <CircleLabel>Output</CircleLabel>
            <BullsEyeWrapper id={`output-${id}`}>
              <Circle size={"8"} color="#4a90e2" />
            </BullsEyeWrapper>
          </CircleContentContainer>
        </CircleContainer>
      </CardContainer>
      {isTerminal ? (
        <>
          <ConnectorLine
            fromId={`output-${3}`}
            toId={`input-${6}`}
            containerRef={containerRef}
          />
          <FinalOutput />
        </>
      ) : null}
    </>
  );
};
export default FunctionCard;
