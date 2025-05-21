import React from "react";
import "../styles/home.css";

const home = () => {
  return (
    <>
      <div className="sm:h-screen h-auto bg-gradient-to-t from-sky-500 to-indigo-500 text-white scrollbar-hide flex flex-wrap relative p-4">
        <div className="sm:mt-20 sm:ml-14 m-5 sm:mb-10 max-w-2xl ">
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-10">
            Welcome to My Portfolio
          </h1>
          <img
            src="https://cdn.pixabay.com/photo/2024/06/22/16/55/ai-generated-8846672_1280.jpg"
            alt="Batman"
            className="lg:w-80 lg:h-80 sm:w-52 sm:h-52 w-28 h-28 object-cover rounded-full border-4 border-white sm:absolute lg:right-24 lg:top-24 md:right-28 top-40 right-10 shadow-xl  "
          />
          <p className="text-white text-sm mt-4 leading-relaxed lg:w-full md:w-[550px] sm:w-[400px] w-full sm:text-xl">
            Hi, I’m Ayush Maurya — a self-taught web developer on a journey to
            become a MERN stack developer. I haven't pursued any college degree,
            but I’ve dedicated myself to learning technologies like HTML, CSS,
            JavaScript, React, Bootstrap, and Tailwind CSS.
            <br />
            <br />
            At 20 years old, I took a bold step by dropping out of a BSc
            Agriculture course to follow my true passion: web development. Due
            to financial challenges and distance from educational institutes, I
            chose to learn on my own while managing responsibilities at home as
            the eldest in the family. This portfolio reflects my determination,
            learning, and vision for a better future through code.
          </p>
        </div>
      </div>
    </>
  );
};

export default home;
