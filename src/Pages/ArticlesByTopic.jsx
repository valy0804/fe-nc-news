import { useState, useEffect } from "react";
import { getArticlesByTopic } from "../Utils/api";
import { ArticleCard } from "../Components/ArticleCard";
import { Link, useParams } from "react-router-dom";

export const ArticlesByTopic = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const { topicSlug } = useParams();

  console.log(topicSlug);

  useEffect(() => {
    setLoading(true);
    getArticlesByTopic(topicSlug).then((articles) => {
      const articlesByTopic = articles.filter(
        (article) => article.topic === topicSlug
      );

      setArticles(articlesByTopic);
      setLoading(false);
    });
  }, [topicSlug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h3 className="topic-header">
          This are all articles related to {topicSlug}
        </h3>
      </div>
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
