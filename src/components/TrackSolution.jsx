import React from 'react'

const cardData = [
  {
    image: "/images/gps-tracking.jpg",
    alt: "GPS Tracking",
    title: "GPS Tracking",
    description: "Real-time location monitoring for your vehicles with advanced GPS technology.",
  },
  {
    image: "/images/cctv.jpg",
    alt: "CCTV Solutions",
    title: "CCTV Solutions",
    description: "High-quality surveillance cameras for comprehensive vehicle security coverage.",
  },
  {
    image: "/images/cartrack.jpg",
    alt: "Vehicle Security Solutions",
    title: "Vehicle Security Solutions",
    description: "Efficient fleet tracking and management tools to optimize your operations.",
  }
];

const TrackSolution = () => {
  return (
    <div className='flex flex-col items-center bg-zinc-800 w-full mt-20 justify-center min-h-screen'>
      <h1 className='text-[4vw] font-bold'> <span className='text-text'>Tracking</span> Solution Simplified</h1>
      <p className='text-white text-[1.5vw] w-1/2 text-center'>Discover advanced CPS tracking and CCTV camera solutions tailored for
      your vehicle security needs.</p>

      <div className="cards">
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {cardData.map((card, index) => (
            <div key={index} className="bg-back p-6 rounded-lg shadow-lg max-w-sm">
              <img src={card.image} alt={card.alt} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h2 className="text-text text-2xl font-bold mb-4">{card.title}</h2>
              <p className="text-white mb-4">{card.description}</p>
              <button className="bg-text text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition duration-300">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrackSolution