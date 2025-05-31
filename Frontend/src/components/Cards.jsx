import React from "react";
import { Link } from "react-router-dom";

function Cards({ item }) {
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/150x220?text=No+Image";
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="group w-80 transform transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_#ec4899] rounded-xl">
        <div className="card bg-base-100 dark:bg-slate-900 dark:text-white dark:border border-gray-200">

          {/* Link according to free or paid */}
          <Link
            to={
              item.price === 0 || item.price === "0"
                ? "/book-details"
                : "/checkout"
            }
            state={{ book: item }}
            className="block"
          >
            <figure className="h-64 bg-white flex items-center justify-center overflow-hidden rounded-t-xl">
              <img
                src={item.image}
                alt={item.name}
                onError={handleImageError}
                className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
              />
            </figure>
          </Link>

          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p className="line-clamp-2">{item.title}</p>

            <div className="card-actions justify-between mt-2">
              <div className="badge badge-outline">
                {item.price === 0 || item.price === "0" ? "Free" : `$${item.price}`}
              </div>

              {/* Correct button with correct link */}
              <Link
                to={
                  item.price === 0 || item.price === "0"
                    ? "/book-details"
                    : "/checkout"
                }
                state={{ book: item }}
              >
                <button className="cursor-pointer px-3 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                  {item.price === 0 || item.price === "0" ? "View Details" : "Buy Now"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
