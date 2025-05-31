import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function PaymentSuccess() {
  const location = useLocation();
  const { book } = location.state || {};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 dark:bg-slate-900 dark:text-white p-8">
      <FaCheckCircle className="text-green-500 text-7xl mb-6 animate-bounce" />
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
        🎉 Payment Successful!
      </h1>
      <p className="text-lg md:text-xl mb-8 text-center max-w-xl">
        Thank you for your purchase. Your book is now ready to download!
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        {book?.fileUrl ? (
          <a
            href={book.fileUrl}
            download
            className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl font-semibold text-lg shadow-md transition-all duration-300 text-center"
          >
            📥 Download Your Book
          </a>
        ) : (
          <div className="text-red-500 font-semibold">
            Book file not available for download.
          </div>
        )}

        <Link to="/course">
          <button className="px-8 py-3 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white rounded-2xl font-semibold text-lg shadow-md transition-all duration-300">
            🚀 Go to Courses
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PaymentSuccess;
