import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { getTopics } from "../Utils/api";
import { Link } from "react-router-dom";

export const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics()
      .then((res) => {
        setTopics(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {topics.map((topic) => (
        <Link key={topic.slug} to={`/topics/${topic.slug}`}>
          <Button variant="secondary" className="topics-button">
            {topic.slug}
          </Button>
        </Link>
      ))}
    </div>
  );
};
