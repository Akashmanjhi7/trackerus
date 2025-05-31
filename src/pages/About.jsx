// src/pages/About.jsx
import React from "react";
import {
  Eye,
  Shield,
  Camera,
  Smartphone,
  Users,
  Target,
  Phone,
} from "lucide-react";
import { founders, offerings } from "../utils/aboutData";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-100 border-2 border-gray-300 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <Camera className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500 text-lg">Company Image</p>
                <p className="text-gray-400 text-sm">
                  Add your company photo here
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#90C444] to-green-600 text-transparent bg-clip-text">
              About Us
            </h1>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                <strong className="bg-gradient-to-r from-[#90C444] to-green-600 text-transparent bg-clip-text">
                  Tracker US Technology
                </strong>{" "}
                is a leading provider of smart GPS tracking, CCTV surveillance,
                and vehicle security solutions. We help individuals, businesses,
                and fleet owners ensure safety, control, and peace of mind
                through cutting-edge technology.
              </p>
              <p className="text-lg leading-relaxed">
                Founded with a mission to make security smarter and more
                accessible, Tracker US Technology offers reliable, real-time
                tracking systems and customized security setups for vehicles and
                properties.
              </p>
            </div>

            {/* Mission */}
            <div className="mt-8">
              <div className="flex items-center mb-4 text-text">
                <Target className="w-6 h-6 mr-3" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg leading-relaxed">
                To provide smart, reliable, and affordable security solutions
                using the latest in GPS, CCTV, and IoT technology—keeping
                people, vehicles, and assets safe.
              </p>
            </div>

            {/* Vision */}
            <div className="mt-8">
              <div className="flex items-center mb-4 text-text">
                <Eye className="w-6 h-6 mr-3" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg leading-relaxed">
                To be India's most trusted name in vehicle and property
                security, offering tech-first solutions that redefine safety
                standards.
              </p>
            </div>
          </div>
        </div>

        {/* Founders */}
        <div className="mb-16">
          <div className="flex items-center mb-8 text-text">
            <Users className="w-8 h-8 mr-4" />
            <h2 className="text-3xl font-bold">Meet Our Founders</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
  {founders.map((founder, idx) => (
    <div
      key={idx}
      className="border-2 border-gray-200 rounded-lg p-6 group 
                 bg-white hover:bg-gradient-to-r hover:from-[#7CBF3B] hover:to-green-700 
                 transition-colors duration-300"
    >
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="bg-gray-100 border border-gray-300 rounded-lg w-32 h-32 flex items-center justify-center flex-shrink-0">
          <Users className="w-12 h-12 text-gray-400 group-hover:text-white transition-colors duration-300" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">
            {founder.name} – {founder.title}
          </h3>
          <p className="text-gray-700 leading-relaxed group-hover:text-white transition-colors duration-300">
            {founder.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>



        </div>

        {/* Offerings */}
        <div className="mb-16">
          <div className="flex items-center mb-8 text-text">
            <Shield className="w-8 h-8 mr-4" />
            <h2 className="text-3xl font-bold">What We Offer</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {offerings.map((offer, idx) => {
              const Icon = offer.icon;
              return (
                <div
                  key={idx}
                  className="border-2 border-gray-200 rounded-lg p-6 text-center group 
             bg-white hover:bg-gradient-to-r hover:from-[#7CBF3B] hover:to-green-700 
             transition-colors duration-300"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-gray-800 group-hover:text-white transition-colors duration-300" />
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">
                    {offer.title}   
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition-colors duration-300">
                    {offer.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Phone className="w-8 h-8 mr-4" />
            <h2 className="text-3xl font-bold">Get in Touch</h2>
          </div>

          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Want to secure your vehicle or business? Contact us today and
            experience the power of smart tracking and surveillance.
          </p>

          <button className="bg-gradient-to-r from-[#90C444] to-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-[#7CBF3B] hover:to-green-700 transition-colors duration-200">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
