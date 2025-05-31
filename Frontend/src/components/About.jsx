import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-32 pb-16 text-white bg-[#0e1a2b]">
        <h1 className="text-4xl font-bold text-center text-pink-500 mb-8">
          About Our Platform 📚
        </h1>

        <section className="mb-12">
          <p className="text-lg leading-relaxed">
            Welcome to{" "}
            <span className="text-pink-400 font-semibold">BookVerse</span> – your one-stop
            destination for accessing a wide variety of books and learning
            resources. We offer{" "}
            <span className="font-bold text-green-400 animate-glowGreen">Free</span>,{" "}
            <span className="font-bold text-yellow-300 animate-glowYellow">Paid</span>, and{" "}
            <span className="font-bold text-purple-400 animate-glowPurple">Premium</span> books so
            that everyone can learn, no matter their budget.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-pink-400 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>🌍 Access books from legendary authors around the world.</li>
            <li>🎓 Perfect for students, professionals, and avid readers.</li>
            <li>💡 Clean, user-friendly UI with powerful filtering options.</li>
            <li>📱 Available 24/7 – anytime, anywhere.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-pink-400 mb-4">Librarian Assistance 👩‍🏫</h2>
          <p className="text-lg leading-relaxed">
            We provide dedicated librarian support to help you find the right books for your
            needs. Have doubts? Want recommendations? Need help using the platform? Our expert
            librarians are just a click away!
          </p>
        </section>

        <section className="bg-white text-black p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-center text-pink-500 mb-4 animate-glowPink">
            📞 Contact Our Librarians
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="font-semibold">Anjali Gupta</h3>
              <p>Email: anjali.librarian@example.com</p>
              <p>Expertise: Literature, History</p>
            </div>
            <div>
              <h3 className="font-semibold">Shubh Shukla</h3>
              <p>Email: shubh.library@example.com</p>
              <p>Expertise: Programming, Technology</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
