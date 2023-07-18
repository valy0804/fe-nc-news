import { CommentCard } from "./CommentCard";

export const CommentsList = ({ comments }) => {
  return (
    <div className="comments-list">
      <h2 className="list-header"> Comments</h2>
      {comments.map((comment) => (
        <div className="comment-card" key={comment.comment_id}>
          <CommentCard key={comment.comment_id} comment={comment} />
        </div>
      ))}
    </div>
  );
};
