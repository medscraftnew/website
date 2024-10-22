import React, { useRef } from "react";
import { IoBody } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";

SwiperCore.use([Navigation]);

const LabTestCarousel = ({ onFilter }) => {
  const items = [
    { name: "Full Body", category: "Full Body" },
    { name: "Fever", category: "Fever" },
    { name: "Heart", category: "Heart" },
    { name: "Diabetes", category: "Diabetes" },
    { name: "Vitamin", category: "Vitamin" },
    { name: "Thyroid", category: "Thyroid" },
    { name: "Arthritis", category: "Arthritis" },
    { name: "Cancer", category: "Cancer" },
    { name: "Hormone Tests", category: "Hormone Tests" },
    { name: "Allergy", category: "Allergy" },
    { name: "Pregnancy", category: "Pregnancy" },
    { name: "STD", category: "STD" },
    { name: "Combo", category: "combo" },
    { name: "Antenatal", category: "Antenatal" },
    { name: "Fertility", category: "Fertility" },
    { name: "Anemia", category: "Anemia" },
    { name: "Lifestyle", category: "LifeStyle" },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="pt-10">
      <section className="h-auto pb-20">
        <div className="container mx-auto px-[50px] md:px-[100px] lg:px-[130px]">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-semibold">Frequently Booked</h1>
              <div className="flex items-center">
                <div ref={prevRef} className="cursor-pointer text-4xl text-blue-500 hover:text-blue-700 transition-colors">
                  <IoMdArrowDropleftCircle />
                </div>
                <div ref={nextRef} className="cursor-pointer text-4xl text-blue-500 hover:text-blue-700 transition-colors">
                  <IoMdArrowDroprightCircle />
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Swiper
                slidesPerView={6}
                spaceBetween={10}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                loop={false}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 6 },
                }}
                onSwiper={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
              >
                {items.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="shadow-lg flex items-center justify-center bg-blue-800 w-[200px] py-2 cursor-pointer rounded-2xl"
                      onClick={() => onFilter(item.category)}
                    >
                      <div className="flex justify-center items-center w-[30%]">
                        <p className="bg-white px-4 py-4 rounded-full text-blue-800 text-2xl">
                          <IoBody />
                        </p>
                      </div>
                      <div className="font-bold w-1/2 text-center text-white">
                        {item.name}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LabTestCarousel;
