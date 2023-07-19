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

// export const updateVotesOnServer = (article_id, votes) => {
//   return api.patch(`/api/articles/${article_id}`, { votes: votes });
// };

// export const updateVotesOnServer = (article_id, votes) => {
//   return new Promise((resolve, reject) => {
//     api
//       .put(`/api/articles/${article_id}`, { votes: votes })
//       .then((response) => {
//         // Assuming the response contains the updated article data or a success message
//         resolve(response.data);
//       })
//       .catch((error) => {
//         // Handle the error here
//         console.error("Error updating votes on server:", error);
//         reject(error);
//       });
//   });
// };

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
