import { useState, useEffect } from "react";

export const Votes = () => {
  const [votes, setVotes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleIncrementClick = () => {
    if (!isClicked) {
      setVotes(votes + 1);
      setIsClicked(true);
    }
  };

  const handleDecrementClick = () => {
    if (!isClicked && votes > 0) {
      setVotes(votes - 1);
      setIsClicked(true);
    }
  };

  useEffect(() => {
    setIsClicked(false);
  }, [votes]);

  return (
    <div className="votes-container">
      <button
        className="vote-button"
        onClick={handleIncrementClick}
        disabled={isClicked}
      >
        +
      </button>
      <button
        className="vote-button"
        onClick={handleDecrementClick}
        disabled={isClicked || votes === 0}
      >
        -
      </button>
      <p className="vote-count">Votes: {votes}</p>
    </div>
  );
};
