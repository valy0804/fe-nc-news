import { useState, useEffect } from "react";
import { getArticles } from "../Utils/api";
import { ArticleCard } from "./ArticleCard";
import { Link } from "react-router-dom";

export const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getArticles()
      .then(({ articles }) => {
        setArticles(articles);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>All Articles</h2>
      {articles.map((article) => (
        <div key={article.article_id}>
          <Link to={`/articles/${article.article_id}`}>
            <ArticleCard article={article} />
          </Link>
        </div>
      ))}
    </div>
  );
};
