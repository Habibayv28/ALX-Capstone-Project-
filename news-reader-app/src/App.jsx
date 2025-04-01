import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
