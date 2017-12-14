import React from "react";

const GuessSubmit = (props) => (
  <button onSubmit={() => props.onSubmit()}>Guess</button>
);

export default GuessSubmit;