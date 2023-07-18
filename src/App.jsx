import "./App.css";
import { Header } from "./Components/Header";
import { ArticlesList } from "./Components/ArticlesList";
import { SingleArticle } from "./Components/SingleArticle";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
