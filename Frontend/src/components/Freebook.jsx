// 📁 src/components/Freebook.jsx
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";
import { motion } from "framer-motion";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4002/book");
        const data = res.data.filter((data) => data.category === "Free");
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#0e1a2b] py-10 relative overflow-hidden">
      <div className="absolute bottom-0 w-full bg-black text-white py-2">
        <marquee behavior="scroll" direction="left" scrollamount="5" className="text-sm md:text-base">
        🌍 Discover legendary books from world-renowned authors — absolutely FREE! Grab your copies now! 🔥
        </marquee>
      </div>

      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="text-center mb-10">
          <h1 className="animate-glowFadeIn text-3xl md:text-4xl font-bold text-white">
            <span className="animate-blink inline-block">🔥📘</span> Free Offered Courses <span className="animate-blink inline-block">✨</span>
          </h1>
          <p className="animate-fadeIn text-md md:text-lg text-gray-300 mt-2 max-w-2xl mx-auto">
            Discover our range of free courses designed to spark your curiosity and fuel your learning journey. From beginner-friendly guides to
            career-focused resources, there’s something for everyone.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}

export default Freebook;