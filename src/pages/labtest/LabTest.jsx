import LabTestCarousel from "@/components/LabTestCarousel";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import LabTestData from "../../pages/labtest/LabTestData";

const LabTest = () => {
  const [showmore, setShowMore] = useState(6);
  const [filteredPackages, setFilteredPackages] = useState(LabTestData.topHealthPackages);

  const handleShowMore = () => setShowMore((prev) => prev + 9);

  const handleFilter = (category) => {
   
      const filtered = LabTestData.topHealthPackages.filter(
        (packageItem) => packageItem.category === category
      );
      setFilteredPackages(filtered);
    
  };

  return (
    <section className="pt-20">
      <div className="flex items-center">
        <div className="mt-0 w-full">
          <LabTestCarousel onFilter={handleFilter} />
        </div>
      </div>

      <section className="container mx-auto px-[30px] md:px-[60px] lg:px-[130px]">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Top Health Packages
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.slice(0, showmore).map((data) => (
              <div
                key={data.id}
                className="border rounded-lg shadow-md p-6 flex flex-col gap-4 bg-white transition-transform transform hover:scale-105"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-blue-600 cursor-pointer">
                      {data.title}
                    </h2>
                    <p className="pt-2 text-gray-600">
                      Reports in{" "}
                      <span className="bg-blue-200 px-2 py-1 rounded">
                        {data.reportsIn}
                      </span>{" "}
                      | Parameters{" "}
                      <span className="bg-gray-200 px-2 py-1 rounded">
                        {data.parameters}
                      </span>
                    </p>
                  </div>
                  <IoIosArrowDown className="text-2xl text-gray-600 hover:text-blue-500 cursor-pointer transition-colors" />
                </div>
                <p className="text-gray-700">{data.description}</p>
                <div className="flex items-end justify-between mt-auto">
                  <div>
                    <h2 className="text-2xl font-semibold text-blue-600">
                      ₹{data.discountedPrice}
                    </h2>
                    <p className="line-through text-red-500">
                      ₹{data.originalPrice}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-green-600 font-semibold">
                      {data.discountPercentage}% off
                    </p>
                    <p className="text-gray-500">for a limited period</p>
                  </div>
                  <div className="text-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 transition-colors">
                      {data.cta}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto">
            {showmore < filteredPackages.length && (
              <button
                className="bg-black text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 transition-colors"
                onClick={handleShowMore}
              >
                Show More
              </button>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default LabTest;
