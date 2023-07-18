import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../Utils/api";
import { CommentCard } from "./CommentCard";

export const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Error fetching comments. Please try again.");
        setLoading(false);
      });
  }, [article_id]);

  if (loading) {
    return <div>Loading comments...</div>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (comments.length === 0) {
    return <p>No comments yet.</p>;
  }

  return (
    <div className="comments-list">
      <h2 className="list-header">Comments</h2>
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </div>
  );
};
