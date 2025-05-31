import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import OurTeam from "./components/OurTeam";
import About from "./components/About";
import SearchResults from "./components/SearchResults";
import BookDetails from "./components/BookDetails";
import PaymentPage from "./components/PaymentPage";
import Checkout from "./components/Checkout";
import PaymentSuccess from "./components/PaymentSuccess"; // ✅ Added PaymentSuccess import

function App() {
  const [authUser] = useAuth();
  console.log(authUser);

  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen">
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Courses (Protected) */}
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />

        {/* Signup */}
        <Route path="/signup" element={<Signup />} />

        {/* Our Team */}
        <Route path="/our-team" element={<OurTeam />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Search Result */}
        <Route path="/search" element={<SearchResults />} />

        {/* Book Details for Free Books */}
        <Route
          path="/book-details"
          element={authUser ? <BookDetails /> : <Navigate to="/signup" />}
        />

        {/* Payment Page for Paid Books */}
        <Route
          path="/payment"
          element={authUser ? <PaymentPage /> : <Navigate to="/signup" />}
        />

        {/* Checkout Page for Dummy Payment */}
        <Route
          path="/checkout"
          element={authUser ? <Checkout /> : <Navigate to="/signup" />}
        />

        {/* Payment Success Page */}
        <Route
          path="/payment-success"
          element={authUser ? <PaymentSuccess /> : <Navigate to="/signup" />}
        />
      </Routes>

      {/* Toaster for Notifications */}
      <Toaster />
    </div>
  );
}

export default App;
