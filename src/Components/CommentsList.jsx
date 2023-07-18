import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../Utils/api";
import { CommentCard } from "./CommentCard";

export const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
        setLoading(false);
      });
  }, [article_id]);

  if (loading) {
    return <div>Loading comments...</div>;
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
