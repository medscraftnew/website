import React from "react";
import { useNavigate } from "react-router-dom";

const BookATestButton = () => {

    const navigate = useNavigate();

    function handleNavigate() {
      navigate("/PackageDetails")
    }

      return (
        <button className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out" 
        onClick={handleNavigate}
        >
          Book a Test
        </button>
      );
    };
        

export default BookATestButton;
