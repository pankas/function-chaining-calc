import React, { useRef } from "react";
import InitialInput from "../initial-input";
import FunctionCard from "../function-card";
import { ChainContainer, FunctionCardContainer } from "./function-chain.styled";
import { functionOrder } from "../../home-screen.constant";
import ConnectorLine from "../line-connector";

const FunctionChain = () => {
  const containerRef = useRef(null);
  return (
    <ChainContainer ref={containerRef}>
      <FunctionCardContainer>
        <InitialInput />
        <ConnectorLine
          fromId={`output-${0}`}
          toId={`input-${1}`}
          containerRef={containerRef}
        />
        {functionOrder.map((element, idx) => (
          <React.Fragment key={element.id}>
            <FunctionCard
              id={element.id}
              style={{
                gridRow: idx % 2 === 0 ? "1" : "2",
                gridColumn: (idx % 3) + 1,
              }}
              disabledNext={
                element.isTerminal
                  ? "End"
                  : `Function ${element.nextId || "End"}`
              }
              containerRef={containerRef}
              isTerminal={element.isTerminal}
            />
            {functionOrder[idx]?.nextId && (
              <ConnectorLine
                fromId={`output-${functionOrder[idx]?.id}`}
                toId={`input-${functionOrder[idx]?.nextId}`}
                containerRef={containerRef}
              />
            )}
          </React.Fragment>
        ))}
      </FunctionCardContainer>
    </ChainContainer>
  );
};

export default FunctionChain;
