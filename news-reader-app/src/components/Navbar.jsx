import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">News Reader</Link>
      </div>
    </nav>
  );
}

export default Navbar;
