// import SearchInput from "@/components/SearchInput";
import React from "react";

const PackageDetails = () => {
  return (
    <>
      <section className="pt-20">
        <div className="mt-10 h-[250px] bg-blue-400"></div>
      </section>

      <section className="h-[100vh] py-20">
        <div className="container mx-auto px-[130px]">
          {/* Carousel */}
          <div>
            <h1 className="text-3xl font-semibold">Frequently Booked</h1>

            <div className="mt-8">
              <div className="shadow-lg flex items-center justify-center bg-white w-[200px] py-6 cursor-pointer">
                <div className="w-1/2 flex justify-center">
                    
                </div>
                <div className="w-1/2">Full Body</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackageDetails;
