import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-700 text-white px-4 py-5 flex justify-between items-center">
      <div className="text-xl font-bold">Portfolio</div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div className="hidden md:flex space-x-6">
        <Link
          to="/portfolio/"
          className="px-3 py-1 rounded-md border-2 border-transparent hover:border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="px-3 py-1 rounded-md border-2 border-transparent hover:border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="px-3 py-1 rounded-md border-2 border-transparent hover:border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
        >
          Contact
        </Link>
        <Link
          to="/projects"
          className="px-3 py-1 rounded-md border-2 border-transparent hover:border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
        >
          Projects
        </Link>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-slate-500 flex flex-col items-center space-y-4 py-4 md:hidden z-50">
          <Link
            to="/portfolio/"
            onClick={() => setIsOpen(false)}
            className="px-3 py-1 rounded-md border-8 border-transparent hover:border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="px-3 py-1 rounded-md border-8 border-transparent hover:border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="px-3 py-1 rounded-md border-8 border-transparent hover:border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Contact
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="px-3 py-1 rounded-md border-8 border-transparent hover:border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Projects
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
