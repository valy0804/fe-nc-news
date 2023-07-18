import Card from "react-bootstrap/Card";

export const CommentCard = ({ comment }) => {
  const commentFormattedDate = new Date(comment.created_at).toLocaleString();

  return (
    <div className="comment-card">
      <Card className="comment-card-body" style={{ width: "18rem" }}>
        <Card.Text>{comment.body}</Card.Text>
      </Card>
      <div className="comment-card-footer">
        <p className="comment-card-author">Author: {comment.author}</p>
        <p className="comment-card-date">Date: {commentFormattedDate}</p>
      </div>
    </div>
  );
};
