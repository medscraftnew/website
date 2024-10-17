import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="h-[100vh] px-6 w-full flex flex-col items-center justify-center">
      <h1 className="lg:text-7xl md:text-6xl text-xl font-bold text-gray-700 mb-4 uppercase">
        404 - Page Not Found
      </h1>
      <p className="lg:text-xl md:text-xl text-sm text-gray-600">
        The page you are looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-10 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default PageNotFound;