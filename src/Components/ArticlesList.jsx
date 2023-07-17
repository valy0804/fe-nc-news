import { useState, useEffect } from "react";
import { getArticles } from "../Utils/api";
import { ArticleCard } from "./ArticleCard";

export const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then(({ articles }) => {
        setArticles(articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>All Articles</h2>
      {articles.map((article) => (
        <div key={article.article_id}>
          <ArticleCard article={article} />
        </div>
      ))}
    </div>
  );
};
