import React from "react";

const PlayAgain = props => (
  <button onClick={() => props.onClick(false)}>Play again</button>
);

export default PlayAgain;