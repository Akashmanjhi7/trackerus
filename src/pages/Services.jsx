import React from 'react';
import FloatingCard from '../components/FloatingCard';
import servicesData from '../utils/service.json';

const Services = () => {
  return (
    <div className='min-h-screen w-full pt-20 bg-zinc-100'>
      <div className="heading flex items-center justify-center text-center text-wrap max-w-7xl mx-auto text-head py-12">
        <h1 className="sm:text-[4vw] text-[5vh] leading-[1.2] font-bold">
          Our Core <span className="text-text">Services</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto min-h-screen px-4 flex flex-wrap gap-4 justify-center">
        {servicesData.map(service => (
          <FloatingCard
            key={service.id}
            className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.33%-10.66px)] min-h-[400px] flex flex-col group"
          >
            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-md mb-4">{service.description}</p>
              <div className="rounded-lg w-full h-[200px] object-cover mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

            </div>
            <div className="flex justify-end mt-auto">
              <button className="px-4 py-2 bg-text rounded-md hover:bg-text/80 transition-colors">
                Learn More
              </button>
            </div>
          </FloatingCard>
        ))}
      </div>
    </div>
  );
};

export default Services;