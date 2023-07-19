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

export const getCommentsByArticleId = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-ddgf.onrender.com/api",
});

export const patchArticleById = (article_id, inc_votes) => {
  const articlePatchBody = {
    article_id,
    inc_votes,
  };
  return ncNewsApi
    .patch(`/articles/${article_id}`, articlePatchBody)
    .then((res) => {
      return res;
    });
};
