import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">News Reader</Link>
        <div>
          <Link to="/home" className="mr-4">Home</Link>
          <Link to="/search" className="mr-4">Search</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
