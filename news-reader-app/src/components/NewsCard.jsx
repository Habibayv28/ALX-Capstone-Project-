import { Link } from "react-router-dom";

function NewsCard({ article, index }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <img src={article.urlToImage} alt="news" className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-2">{article.title}</h2>
      <p className="text-sm text-gray-600">{article.description}</p>
      <Link to={`/article/${index}`} className="text-blue-600 mt-2 block">Read More</Link>
    </div>
  );
}

export default NewsCard;
