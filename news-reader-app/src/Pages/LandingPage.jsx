import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to News Reader</h1>
      <p className="text-lg text-gray-600 mb-6">Stay updated with the latest news from around the world.</p>
      <Link to="/home" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
        Get Started
      </Link>
    </div>
  );
}

export default LandingPage;
