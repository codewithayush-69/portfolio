import React from "react";

const footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 overflow-hidden ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          © 2025 Batman. All rights reserved.
        </p>
        <span className="text-2xl font-extrabold text-gradient bg-gradient-to-r from-blue-700 to-red-800 bg-clip-text text-transparent">
          Batman
        </span>

        <div className="flex space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
