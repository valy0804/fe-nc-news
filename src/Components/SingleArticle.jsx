import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../Utils/api";
import { CommentsList } from "./CommentsList";
import { Votes } from "./Votes";

export const SingleArticle = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState(null);

  const [loadingArticle, setLoadingArticle] = useState(true);

  useEffect(() => {
    setLoadingArticle(true);

    getArticleById(article_id)
      .then(({ article }) => {
        setArticle(article);
        setLoadingArticle(false);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
        setLoadingArticle(false);
      });
  }, [article_id]);

  if (loadingArticle) {
    return <div>Loading...</div>;
  }

  const formattedDate = new Date(article.created_at).toLocaleString();

  return (
    <div>
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>Date: {formattedDate}</p>
      <Votes initialVotes={article.votes} article_id={article.article_id} />
      <img src={article.article_img_url} alt={article.title} />
      <p>Topic: {article.topic}</p>
      <p>{article.body}</p>

      <CommentsList article_id={article_id} />
    </div>
  );
};
