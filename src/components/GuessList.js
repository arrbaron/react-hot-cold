import React from "react";

const GuessList = props => {
  
  const guesses = props.guesses.map((guess, index) => {
    // console.log(guess.guess);
    return (
      <div key={index}>
        {/* Ask Ray about this */}
        {guess.guess}
      </div>
    ); 
  });

  return (
    <div>
      {guesses}
    </div>
  );
}

export default GuessList;