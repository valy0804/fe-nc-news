export const ArticleCard = (article) => {
  const { title, article_img_url, created_at } = article.article;
  const formattedDate = new Date(created_at).toLocaleString();

  return (
    <div>
      <h3>{title}</h3>
      <img src={article_img_url} />
      <p>Date: {formattedDate}</p>
    </div>
  );
};
