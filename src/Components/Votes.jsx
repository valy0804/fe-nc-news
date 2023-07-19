import { useState } from "react";
import { patchArticleById } from "../Utils/api";

export const Votes = ({ article_id, initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [isClicked, setIsClicked] = useState(false);

  const handleIncrementClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      setVotes((prevVotes) => prevVotes + 1);
      patchArticleById(article_id, 1)
        .then((res) => {
          return res;
        })
        .catch((error) => {
          console.error(error);

          setVotes((prevVotes) => prevVotes - 1);
        });
      setIsClicked(false);
    }
  };

  const handleDecrementClick = () => {
    if (!isClicked && votes > 0) {
      setIsClicked(true);
      setVotes((prevVotes) => prevVotes - 1);
      patchArticleById(article_id, -1)
        .then((res) => {
          return res;
        })
        .catch((error) => {
          console.error(error);
          setVotes((prevVotes) => prevVotes + 1);
        })
        .finally(() => {
          setIsClicked(false);
        });
    }
  };

  return (
    <div className="votes-container">
      <button
        className="vote-button"
        onClick={handleDecrementClick}
        disabled={isClicked || votes === 0}
      >
        -
      </button>
      <button
        className="vote-button"
        onClick={handleIncrementClick}
        disabled={isClicked}
      >
        +
      </button>
      <p className="vote-count">Votes: {votes}</p>
    </div>
  );
};
