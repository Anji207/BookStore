import React from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BookDetails() {
  const location = useLocation();
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

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6 mt-28">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Book Image */}
            <div className="md:w-1/2">
              <img
                src={book.image || "https://via.placeholder.com/400x400?text=No+Image"}
                alt={book.title}
                className="w-full h-[400px] object-contain bg-gray-100 dark:bg-slate-700 p-4"
              />
            </div>

            {/* Book Details */}
            <div className="md:w-1/2 p-6 flex flex-col justify-center space-y-4">
              <h1 className="text-4xl font-bold dark:text-white">{book.title || "No Title"}</h1>
              
              {book.author && (
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Author:</strong> {book.author}
                </p>
              )}

              {book.description && (
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Description:</strong> {book.description}
                </p>
              )}

              {book.category && (
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Category:</strong> {book.category}
                </p>
              )}

              {/* Read Book Button */}
              {book.pdfUrl ? (
                <a
                  href={book.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  Read Book
                </a>
              ) : (
                <p className="text-red-500 font-semibold">No PDF available</p>
              )}

              {/* Back Button */}
              <Link to="/course">
                <button className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl transition-all duration-300">
                  Back to Courses
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookDetails;
