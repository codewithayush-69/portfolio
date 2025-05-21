import React from "react";

const projects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-t from-indigo-900 to-sky-600 text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white text-black rounded-xl shadow-lg p-6 hover:scale-105 transform transition">
          <h3 className="text-2xl font-semibold mb-3">Stone Paper Scissor</h3>
          <p className="text-sm text-gray-700 mb-4">
            this is a simple stone paper scissor game made with HTML, CSS and
            JavaScript. The game allows you to play against the computer.
          </p>
          <div className="flex gap-4">
            <a
              href="https://codewithayush-69.github.io/stone-paper-scissor-game/"
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/codewithayush-69/stone-paper-scissor-game"
              target="_blank"
              className="text-gray-800 underline hover:text-black"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="bg-white text-black rounded-xl shadow-lg p-6 hover:scale-105 transform transition">
          <h3 className="text-2xl font-semibold mb-3">Currency Converter</h3>
          <p className="text-sm text-gray-700 mb-4">
            this is a simple currency converter made with HTML, CSS and
            JavaScript using API. The app allows you to convert one currency to
            another
          </p>
          <div className="flex gap-4">
            <a
              href="https://codewithayush-69.github.io/Currency-converter/"
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/codewithayush-69/Currency-converter"
              target="_blank"
              className="text-gray-800 underline hover:text-black"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="bg-white text-black rounded-xl shadow-lg p-6 hover:scale-105 transform transition">
          <h3 className="text-2xl font-semibold mb-3">To do list</h3>
          <p className="text-sm text-gray-700 mb-4">
            this is a to do list web app made with HTML, CSS and JavaScript. The
            app allows you to add, delete and edit your tasks. with great UI
          </p>
          <div className="flex gap-4">
            <a
              href="https://codewithayush-69.github.io/To-do-list/"
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/codewithayush-69/To-do-list"
              target="_blank"
              className="text-gray-800 underline hover:text-black"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="bg-white text-black rounded-xl shadow-lg p-6 hover:scale-105 transform transition">
          <h3 className="text-2xl font-semibold mb-3">Weather App</h3>
          <p className="text-sm text-gray-700 mb-4">
            this is a simple weather app made with HTML, CSS and JavaScript
            using API. The app allows you to check the weather of any city in
            the world.
          </p>
          <div className="flex gap-4">
            <a
              href="https://codewithayush-69.github.io/weather-app/"
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/codewithayush-69/weather-app"
              target="_blank"
              className="text-gray-800 underline hover:text-black"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="bg-white text-black rounded-xl shadow-lg p-6 hover:scale-105 transform transition">
          <h3 className="text-2xl font-semibold mb-3">To do list</h3>
          <p className="text-sm text-gray-700 mb-4">
            this is a to do list web app made with using React.js, HTML, Bootstrap and
            JavaScript. The app allows you to add, delete and edit your tasks. it has an local storage.
          </p>
          <div className="flex gap-4">
            <a
              href="https://codewithayush-69.github.io/react-to-do-list/"
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/codewithayush-69/react-to-do-list"
              target="_blank"
              className="text-gray-800 underline hover:text-black"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default projects;
