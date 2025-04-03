import { useState } from "react";
import { useLocation } from "react-router-dom";

function SearchResultsPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const [results, setResults] = useState([
    { id: 1, title: "Breaking News", description: "Latest updates..." },
    { id: 2, title: "Technology Trends", description: "New innovations in tech..." },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Search Results for: <span className="text-blue-600">{query}</span></h1>
      {results.length > 0 ? (
        <div className="space-y-4">
          {results.map((article) => (
            <div key={article.id} className="border p-4">
              <h2 className="text-lg font-semibold">{article.title}</h2>
              <p>{article.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No results found.</p>
      )}
    </div>
  );
}

export default SearchResultsPage;
