import React, { useEffect, useState } from "react";
import { SvgLine } from "./line-connector.styled";

const ConnectorLine = ({ fromId, toId, containerRef }) => {
  const [linePath, setLinePath] = useState("");
  useEffect(() => {
    const fromElement = document.getElementById(fromId);
    const toElement = document.getElementById(toId);
    const containerElement = containerRef.current;
    if (fromElement && toElement && containerElement) {
      const fromRect = fromElement.getBoundingClientRect();
      const toRect = toElement.getBoundingClientRect();
      const containerRect = containerElement.getBoundingClientRect();
      const startX = fromRect.left + fromRect.width / 2 - containerRect.left;
      const startY =
        fromRect.top + fromRect.height / 2 - containerRect.top - 20;
      const endX = toRect.left + toRect.width / 2 - containerRect.left;
      const endY = toRect.top + toRect.height / 2 - containerRect.top - 20;
      setLinePath(
        `M${startX},${startY} C${startX},${endY} ${endX},${startY} ${endX},${endY}`
      );
    }
  }, [fromId, toId, containerRef]);
  return (
    <SvgLine width="100%" height="100%">
      <path
        d={linePath}
        stroke="#0066FF"
        strokeWidth="7"
        strokeOpacity="0.31"
        fill="none"
      />
    </SvgLine>
  );
};

export default ConnectorLine;
