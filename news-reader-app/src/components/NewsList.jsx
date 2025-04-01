import NewsCard from "./NewsCard";

function NewsList({ articles }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} index={index} />
      ))}
    </div>
  );
}

export default NewsList;
