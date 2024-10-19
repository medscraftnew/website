// import SearchInput from "@/components/SearchInput";
import React from "react";
import { IoBody } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';



const PackageDetails = () => {
  return (
    <>
      <section className="pt-20">
      <div className="mt-10 h-[250px] bg-blue-400"></div>

      <section className="h-[100vh] py-20">
        <div className="container mx-auto px-[130px]">
          {/* Carousel */}
          <div>
            <h1 className="text-3xl font-semibold">Frequently Booked</h1>

            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              navigation
            >
              <SwiperSlide>
                <div className="shadow-lg flex items-center justify-center bg-white w-[250px] py-4 cursor-pointer rounded-2xl">
                  <div className="w-1/2 flex justify-center">
                    <p className="bg-blue-500 px-4 py-4 rounded-full text-white text-2xl">
                      <IoBody />
                    </p>
                  </div>
                  <div className="w-1/2 font-bold">Full Body</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </section>
    </>
  );
};

export default PackageDetails;
