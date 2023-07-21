import { useState, useEffect } from "react";
import { getArticles } from "../Utils/api";
import { ArticleCard } from "./ArticleCard";
import { Link } from "react-router-dom";
import { Topics } from "./Topics";
import { useSearchParams } from "react-router-dom";

export const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const sortByQuery = searchParams.get("sort_by");
  const sortOrder = searchParams.get("order");

  useEffect(() => {
    setLoading(true);

    getArticles({ sort_by: sortByQuery, order: sortOrder })
      .then((articles) => {
        console.log(articles);
        setArticles(articles);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [sortByQuery, sortOrder]);

  const updateSorting = (sortOption) => {
    const currentSortBy = searchParams.get("sort_by") || "created_at";
    const currentOrder = searchParams.get("order") || "desc";
    const newOrder =
      currentSortBy === sortOption && currentOrder === "desc" ? "asc" : "desc";

    searchParams.set("sort_by", sortOption);
    searchParams.set("order", newOrder);
    setSearchParams(searchParams);

    setArticles([]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>All Articles</h2>
      <Topics />
      <button
        onClick={() => updateSorting("created_at")}
        className="sort-button"
      >
        Sort by Date
        {sortByQuery === "created_at" && sortOrder === "desc" ? "▼" : "▲"}
      </button>

      {/* <button
        onClick={() => updateSorting("comment_count")}
        className="sort-button"
      >
        Sort by Comments
        {sortByQuery === "comment_count" && sortOrder === "desc" ? "▼" : "▲"}
      </button> */}
      <button onClick={() => updateSorting("votes")} className="sort-button">
        Sort by Votes{" "}
        {sortByQuery === "votes" && sortOrder === "desc" ? "▼" : "▲"}
      </button>
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
