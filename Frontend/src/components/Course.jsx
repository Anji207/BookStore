import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const navigate = useNavigate();  // navigate ka use karenge click pe

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4002/book");
        setBook(res.data);
        setFilteredBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  useEffect(() => {
    let updatedBooks = [...book];

    if (selectedCategory !== "All") {
      updatedBooks = updatedBooks.filter(
        (item) => item.category === selectedCategory
      );
    }

    if (searchTerm) {
      updatedBooks = updatedBooks.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === "price") {
      updatedBooks.sort((a, b) => a.price - b.price);
    } else if (sortOption === "popularity") {
      updatedBooks.sort((a, b) => b.popularity - a.popularity);
    }

    setFilteredBooks(updatedBooks);
  }, [searchTerm, selectedCategory, sortOption, book]);

  // Jab user kisi card pe click kare
  const handleCardClick = (item) => {
    if (item.category === "Free") {
      navigate("/book-details", { state: { book: item } });
    } else {
      navigate("/payment", { state: { book: item } });
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl font-bold dark:text-gray-200 dark:text-white animate-fadeIn">
          🎓 Explore Courses Tailored Just for You!
        </h1>
        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-md md:text-lg animate-fadeIn">
          Welcome to a world of knowledge! Whether you're diving into free
          resources or investing in premium learning, we've got something for
          every learner. Select a category and start your journey today.
        </p>

        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 animate-glowFadeIn">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-md bg-white dark:bg-slate-800 dark:text-white border border-gray-300 dark:border-gray-600 shadow-sm focus:ring-2 focus:ring-pink-500 transition-all duration-300"
          >
            <option value="All">All</option>
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
            <option value="Premium">Premium</option>
          </select>

          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-md bg-white dark:bg-slate-800 dark:text-white border border-gray-300 dark:border-gray-600 shadow-sm focus:ring-2 focus:ring-pink-500 transition-all duration-300"
          />

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-4 py-2 rounded-md bg-white dark:bg-slate-800 dark:text-white border border-gray-300 dark:border-gray-600 shadow-sm focus:ring-2 focus:ring-pink-500 transition-all duration-300"
          >
            <option value="">Sort By</option>
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>

        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((item) => (
            <div key={item.id} onClick={() => handleCardClick(item)}>
              <Cards item={item} />
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 dark:text-gray-300">
            No books found in this category.
          </p>
        )}
      </div>
    </div>
  );
}

export default Course;
