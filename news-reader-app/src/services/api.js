const API_KEY = "369f1a63864246db9442c4f2770b16e7";
const BASE_URL = "https://newsapi.org/v2/everything?q=";

async function fetchNews(query) {
  const response = await fetch(`${BASE_URL}${query || "latest"}&apiKey=${API_KEY}`);
  const data = await response.json();
  return data.articles;
}

export default fetchNews;
