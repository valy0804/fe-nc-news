import { useState } from "react";
import { postComment } from "../Utils/api";
import { useParams } from "react-router-dom";

export function CommentAdder({ setComments }) {
  const { article_id } = useParams();
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedBackMessage, setFeedBackMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    postComment(article_id, newComment)
      .then((postedComment) => {
        setComments((currComments) => {
          return [postedComment, ...currComments];
        });
        setLoading(false);
        setFeedBackMessage("Comment successfully posted");
        setNewComment("");
      })
      .catch((error) => {
        console.log(error);
        setFeedBackMessage(error);
      });
  }

  return (
    <div className="comment-adder-wrapper">
      {feedBackMessage && <p>{feedBackMessage}</p>}
      <form onSubmit={handleSubmit} className="comment-adder-form">
        <input
          type="text"
          id="new-comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="comment-adder-input"
          placeholder="Write your comment..."
        />
        <button
          type="submit"
          className="comment-adder-button"
          disabled={loading}
        >
          {loading ? "Posting..." : "Post comment"}
        </button>
      </form>
    </div>
  );
}
