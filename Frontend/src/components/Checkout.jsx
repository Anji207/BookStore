import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast from "react-hot-toast";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state || {};

  if (!book) {
    return (
      <>
        <Navbar />
        <div className="text-center mt-32 text-2xl font-semibold dark:text-white">
          No book details found.
        </div>
        <Footer />
      </>
    );
  }

  const handlePayment = (e) => {
    e.preventDefault();
    toast.success("Payment Successful! 🎉");

    // 1 second ke baad navigate with book data
    setTimeout(() => {
      navigate("/payment-success", { state: { book } }); // ✅ book ke saath jao
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 mt-28">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6">
          <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">Checkout</h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Book Summary */}
            <div className="md:w-1/2">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-contain bg-gray-100 dark:bg-slate-700 p-4 rounded-xl"
              />
              <h2 className="text-2xl font-semibold mt-4 dark:text-white">{book.title}</h2>
              <p className="mt-2 text-pink-500 font-semibold text-xl">
                Price: {book.price === 0 || book.price === "0" ? "Free" : `$${book.price}`}
              </p>
            </div>

            {/* Payment Form */}
            <div className="md:w-1/2">
              <form onSubmit={handlePayment} className="space-y-6">
                <div>
                  <label className="block mb-2 font-semibold dark:text-white">Payment Method</label>
                  <select className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:text-white">
                    <option>Credit/Debit Card</option>
                    <option>UPI</option>
                    <option>Net Banking</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-semibold dark:text-white">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block mb-2 font-semibold dark:text-white">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:text-white"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block mb-2 font-semibold dark:text-white">CVV</label>
                    <input
                      type="password"
                      placeholder="123"
                      className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:text-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  Pay Now
                </button>

                <Link to="/course">
                  <button
                    type="button"
                    className="w-full mt-4 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white font-semibold py-3 rounded-xl transition-all duration-300"
                  >
                    Cancel
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
