import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchNews from "../api";

function ArticlePage() {
  const { id } = useParams(); // Get the article ID from the URL
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetchNews("").then((articles) => setArticle(articles[id]));
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{article.title}</h1>
      <img src={article.urlToImage} alt="news" className="w-full h-60 object-cover rounded-md my-4" />
      <p>{article.content}</p>
      <a href={article.url} target="_blank" className="text-blue-600 mt-2 block">Read Full Article</a>
    </div>
  );
}

export default ArticlePage;
