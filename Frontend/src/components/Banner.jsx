import React from "react";
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        {/* Left Section */}
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcome! Learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>

            <p className="text-sm md:text-xl text-gray-200 leading-relaxed">
              Unlock your potential with our curated collection of books and
              courses designed to help you grow —
              whether you're a student, a professional, or simply curious to
              explore more.
              <br /><br />

              {/* Blinking content with styled font */}
              <span className="animate-blink font-mono text-lg text-pink-400">
                📚 Dive into topics ranging from classic literature to modern tech.<br />
                🔥 Join thousands of learners already leveling up with us!
              </span>
            </p>

            {/* Email Input */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>

            <button className="btn mt-6 btn-secondary">Get Started</button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt="banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
