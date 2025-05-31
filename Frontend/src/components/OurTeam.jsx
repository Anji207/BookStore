import React from "react";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const librarians = [
  {
    name: "Shubh Shukla",
    role: "Chief Knowledge Architect",
    imgSrc: "/images/Shubh.png",
    phone: "+1234567890",
    email: "shubh@example.com",
    whatsapp: "https://wa.me/1234567890",
  },
  {
    name: "Anjali Gupta",
    role: "Senior Literary Curator",
    imgSrc: "/images/Anjali.png",
    phone: "+1234567891",
    email: "anjali@example.com",
    whatsapp: "https://wa.me/1234567891",
  },
];

const Librarians = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0e1a2b] text-white pt-16">
      <Navbar />

      <div className="container mx-auto py-10">
        <h1 className="text-center text-4xl font-bold mb-10 text-pink-500">
          📚 Meet Our Librarians
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
          {librarians.map((member, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-xl transition-all duration-300 transform hover:scale-[1.02] border border-transparent hover:border-white hover:shadow-[0_0_20px_#ec489980]"
            >
              <div className="w-full h-80 overflow-hidden relative">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold animate-glowBlue">
                  {member.name}
                </h2>
                <p className="text-gray-400 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="text-green-400 text-2xl" />
                  </a>
                  <a href={`mailto:${member.email}`}>
                    <FaEnvelope className="text-blue-400 text-2xl" />
                  </a>
                  <a href={`tel:${member.phone}`}>
                    <FaPhone className="text-gray-400 text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate(-1)}
            className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 duration-300"
          >
            ⬅ Go Back
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Librarians;
