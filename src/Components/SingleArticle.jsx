import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "../Utils/api";
import { CommentsList } from "./CommentsList";

export const SingleArticle = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getArticleById(article_id)
      .then(({ article }) => {
        setArticle(article);
        return getCommentsByArticleId(article_id);
      })
      .then((comments) => {
        setComments(comments);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
        setLoading(false);
      });
  }, [article_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const formattedDate = new Date(article.created_at).toLocaleString();

  return (
    <div>
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>Date: {formattedDate}</p>
      <img src={article.article_img_url} alt={article.title} />
      <p>Topic: {article.topic}</p>
      <p>{article.body}</p>
      <CommentsList comments={comments} />
    </div>
  );
};
