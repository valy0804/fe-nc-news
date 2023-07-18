import axios from "axios";

const api = axios.create({ baseURL: "https://nc-news-ddgf.onrender.com/api" });

export const getArticles = () => {
  return api
    .get("/articles")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export const getArticleById = (article_id) => {
  return api
    .get(`/articles/${article_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};
