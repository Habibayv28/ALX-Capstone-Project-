import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NewsList from "../components/NewsList";
import SearchBar from "../components/SearchBar";
import fetchNews from "../api";

function Home() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const sampleArticles = [
    { id: 1, title: "Breaking News", description: "Latest updates on..." },
    { id: 2, title: "Tech Trends", description: "New innovations in tech..." },
  ];

  useEffect(() => {
    fetchNews(query).then(setArticles);
  }, [query]);

  return (
    <div className="container mx-auto p-4">
      <SearchBar query={query} setQuery={setQuery} />
      <NewsList articles={articles} />
      <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Latest News</h1>
      <div className="space-y-4">
        {sampleArticles.map((article) => (
          <div key={article.id} className="border p-4">
            <h2 className="text-lg font-semibold">{article.title}</h2>
            <p>{article.description}</p>
            <Link to={`/article/${article.id}`} className="text-blue-600">Read More</Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Home;
