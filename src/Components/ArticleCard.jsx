export const ArticleCard = (article) => {
  const { title, article_img_url, created_at } = article.article;

  return (
    <div>
      <h3>{title}</h3>
      <img src={article_img_url} />
      <p>Date: {created_at}</p>
    </div>
  );
};
