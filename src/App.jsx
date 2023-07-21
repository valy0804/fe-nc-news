import "./App.css";
import { Header } from "./Components/Header";
import { ArticlesList } from "./Components/ArticlesList";
import { SingleArticle } from "./Components/SingleArticle";
import { ArticlesByTopic } from "./Pages/ArticlesByTopic";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/topics/:topicSlug" element={<ArticlesByTopic />} />
      </Routes>
    </div>
  );
}

export default App;
