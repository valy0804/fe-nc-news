import axios from "axios";

const api = axios.create({ baseURL: "https://nc-news-ddgf.onrender.com/api" });

export const getArticles = (params) => {
  return api
    .get("/articles", { params })
    .then((res) => {
      return res.data.articles;
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

export const patchArticleById = (article_id, inc_votes) => {
  const articlePatchBody = {
    article_id,
    inc_votes,
  };
  return api.patch(`/articles/${article_id}`, articlePatchBody).then((res) => {
    return res;
  });
};

export const postComment = (article_id, newComment) => {
  const postReqBody = {
    username: "tickle122",
    body: newComment,
  };

  return api
    .post(`/articles/${article_id}/comments`, postReqBody)
    .then(({ data }) => {
      return data.comment;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getTopics = () => {
  return api
    .get("/topics")
    .then((res) => {
      return res.data.topics;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getArticlesByTopic = (topicSlug) => {
  return api
    .get(`/articles?${topicSlug}`)
    .then((res) => {
      return res.data.articles;
    })
    .catch((err) => {
      return err;
    });
};
