import React from "react";
import solutionsData from "../utils/solutionData.json";

const Solutions = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Heading */}
      <div className="heading flex items-center justify-center text-center text-wrap max-w-7xl mx-auto text-head py-12">
        <h1 className="sm:text-[4vw] text-[5vh] leading-[1.2] font-bold">
          Our Comprehensive <span className="text-text">Solutions</span>
        </h1>
      </div>

      {/* Solutions Section */}
      <div className="max-w-7xl mx-auto min-h-screen px-4">
        {solutionsData.map((solution) => (
          <div
            key={solution.id}
            className={`w-full flex flex-col md:flex-row justify-center items-center gap-6 mb-12 
              ${solution.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
          >
            {/* Image */}
            <div className="img w-full md:w-1/2 h-[40vh] md:h-[70vh] rounded-3xl overflow-hidden 
              shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                className="h-full w-full object-cover rounded-3xl hover:scale-105 transform transition-all duration-500 ease-in-out"
                src={solution.image}
                alt={solution.title}
              />
            </div>

            {/* Content */}
            <div className="content w-full md:w-1/2 h-full rounded-3xl px-6 md:px-10 flex flex-col justify-center">
              <h3
                className="text-2xl md:text-4xl font-bold mb-4 "
                
              >
                {solution.title}
              </h3>
              <p className="text-base md:text-lg mb-6">{solution.description}</p>
              <ul className="space-y-3 text-sm md:text-lg">
                {solution.features.map((feature, index) => (
                  <li key={index}>
                    <strong className="text-[#90C444]">{feature.label}: </strong>
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
