import React from "react";
import GuessSubmit from "./GuessSubmit";

const GuessForm = (props) => (
  <form onSubmit={event => {
    event.preventDefault();
    props.onSubmit();
  }}> 
    <input type="number" placeholder="1" min="1" max="100" onChange={event => props.onChange(parseInt(event.target.value), 10)}/>
    <GuessSubmit onSubmit={props.onSubmit} />
  </form>
);

export default GuessForm;