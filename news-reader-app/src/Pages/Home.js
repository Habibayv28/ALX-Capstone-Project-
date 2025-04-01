import { useState, useEffect } from "react";
import NewsList from "../components/NewsList";
import SearchBar from "../components/SearchBar";
import fetchNews from "../api";

function Home() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchNews(query).then(setArticles);
  }, [query]);

  return (
    <div className="container mx-auto p-4">
      <SearchBar query={query} setQuery={setQuery} />
      <NewsList articles={articles} />
    </div>
  );
}

export default Home;
