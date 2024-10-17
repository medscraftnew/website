import React, { useState, useEffect } from "react";
import { LuSiren } from "react-icons/lu";

export default function Carousel() {
  const cards = [
    { name: "Psychiatry Department" },
    { name: "Emergency Department" },
    { name: "Pediatrics Department" },
    { name: "Gynecology Department" },
    { name: "Oncology Department" },
    { name: "Cardiology Department" },
    { name: "Neurology Department" },
    { name: "Orthopedics Department" },
    { name: "Dermatology Department" },
    { name: "Urology Department" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleCards, setVisibleCards] = useState(4); // Dynamic visible cards

  useEffect(() => {
    // Update visible cards based on screen width
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(4); // Desktop (4 cards)
      } else if (window.innerWidth >= 768) {
        setVisibleCards(3); // Tablet (3 cards)
      } else {
        setVisibleCards(1); // Mobile (1 card)
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - visibleCards : prevIndex - 1
    );
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setStartIndex((prevIndex) =>
      prevIndex + visibleCards >= cards.length ? 0 : prevIndex + 1
    );
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="h-auto bg-white flex items-center justify-center lg:py-20 md:py-20 pb-20 relative">
      <div className="lg:px-[130px] md:px-[40px] px-6 container mx-auto my-6 relative">
        {/* Departments Section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-800 flex items-start justify-center h-[400px] rounded-3xl shadow-2xl mb-10 relative">
          <h1 className="text-4xl md:text-5xl pt-10 md:pt-20 text-white font-bold">
            Departments
          </h1>

          {/* Place carousel in the half-below */}
          <div className="absolute bottom-[-150px] left-0 w-full px-10">
            {/* Carousel Wrapper */}
            <div id="controls-carousel" className="w-full group">
              {/* Card Container */}
              <div className="overflow-hidden relative">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${
                      startIndex * (100 / visibleCards)
                    }%)`,
                  }}
                >
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className="flex-none w-full px-4"
                      style={{ flexBasis: `${100 / visibleCards}%` }}
                    >
                      <div
                        className={`bg-white 
                      h-[280px] w-full 
                      shadow-lg 
                      transition-all duration-500 ease-in-out transform 
                      hover:scale-105 hover:cursor-pointer hover:bg-blue-800 hover:shadow-2xl 
                      rounded-2xl 
                      flex items-center justify-center text-center 
                      hover:text-white`}
                      >
                        <div className="flex flex-col gap-y-4 items-center justify-center">
                          <LuSiren className="text-5xl text-blue-600 hover:text-white transition-all duration-500 ease-in-out" />
                          <h2 className="text-2xl font-semibold text-gray-700 hover:text-white transition-colors duration-500 ease-in-out">
                            {card.name}
                          </h2>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex justify-between items-center mt-6">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-3 bg-white/60 hover:bg-white/80 rounded-full shadow-lg transition-all duration-300 ease-in-out focus:outline-none absolute top-20 left-0"
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="p-3 bg-white/60 hover:bg-white/80 rounded-full shadow-lg transition-all duration-300 ease-in-out focus:outline-none absolute top-20 right-0"
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
