import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PaymentPage() {
  const location = useLocation();
  const { book } = location.state || {};
  const navigate = useNavigate();

  if (!book) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-2xl font-bold dark:text-white">No Book Selected</h1>
        </div>
        <Footer />
      </>
    );
  }

  const handlePayNow = () => {
    navigate("/checkout", { state: { book } });
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-[80vh] p-4 mt-24">
        <div className="w-full max-w-3xl bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">Confirm Your Purchase</h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Book Info */}
            <div className="flex-1 flex flex-col items-center">
              <img
                src={book.image}
                alt={book.title}
                className="w-48 h-64 object-contain rounded-xl bg-gray-100 dark:bg-slate-700 p-2"
              />
              <h2 className="text-xl font-semibold mt-4 dark:text-white">{book.title}</h2>
              <p className="text-pink-500 font-bold text-lg mt-2">
                {book.price === 0 || book.price === "0" ? "Free" : `$${book.price}`}
              </p>
            </div>

            {/* Action Section */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="space-y-4">
                <p className="dark:text-white text-center md:text-left">
                  You are about to purchase <span className="font-bold">{book.title}</span>. 
                </p>
                <button
                  onClick={handlePayNow}
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl transition duration-300"
                >
                  Pay and Buy Now
                </button>
                <button
                  onClick={() => navigate("/course")}
                  className="w-full bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white font-semibold py-3 rounded-xl transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaymentPage;
