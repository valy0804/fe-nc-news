import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { getTopics } from "../Utils/api";
import { Link } from "react-router-dom";
import { ArticleByTopic } from "../Pages/ArticlesByTopic";

export const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // Fetch the topics when the component mounts using the getTopics function
    getTopics()
      .then((topicsData) => {
        // Update the component state with the fetched topics data
        setTopics(topicsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [topics]);

  return (
    <div>
      {topics.map((topic) => (
        <Link
          key={topic.slug}
          to={`articles/${topic.slug}`}
          element={<ArticleByTopic />}
        >
          <Button
            variant="secondary"
            key={topic.slug}
            className="topics-button"
          >
            {topic.slug}
          </Button>
        </Link>
      ))}
    </div>
  );
};
