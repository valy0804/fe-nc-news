import "./App.css";
import { Header } from "./Components/Header";
import { ArticlesList } from "./Components/ArticlesList";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<ArticlesList />} />
      </Routes>
    </div>
  );
}

export default App;
