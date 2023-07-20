import { useState, useEffect } from "react";
import { getArticlesByTopic } from "../Utils/api";
import { ArticleCard } from "../Components/ArticleCard";
import { Link, useParams } from "react-router-dom";

export const ArticleByTopic = () => {
  const [articles, setArticles] = useState([]);
  // const [articleTopic, setArticleTopic] = useState("");
  const { topicSlug } = useParams();

  useEffect(() => {
    getArticlesByTopic(topicSlug).then((articles) => {
      setArticles(articles);
    });
  }, [topicSlug]);

  return (
    <div>
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
