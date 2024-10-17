import React from "react";
import { useNavigate } from "react-router-dom";
import "./ourservice.css";
import DoctorOnCallImg from "../../assets/DoctorImages/DoctorOnCall.jpg";
import DoctorImg2 from "../../assets/DoctorImages/DoctorImg2.jpg";
import DoctorImg3 from "../../assets/DoctorImages/DoctorImg3.jpg";
import DoctorImg4 from "../../assets/DoctorImages/DoctorImg4.jpg";
import DoctorImg5 from "../../assets/DoctorImages/DoctorImg5.jpg";
import DoctorImg6 from "../../assets/DoctorImages/DoctorImg6.jpg";
import DoctorImg7 from "../../assets/DoctorImages/DoctorImg7.jpg";
import DoctorImg8 from "../../assets/DoctorImages/DoctorImg8.jpg";
import DoctorImg9 from "../../assets/DoctorImages/DoctorImg9.jpg";
import DoctorImg10 from "../../assets/DoctorImages/DoctorImg11.jpg";
import DoctorImg11 from "../../assets/DoctorImages/DoctorImg10.jpg";
import LazyLoad from "react-lazyload";

const benefits = [
  {
    title: "Free On Call Doctor Support",
    content:
      "Get access to free on-call doctor support for any health queries and immediate assistance.",
    img: DoctorOnCallImg,
  },
  {
    title: "Free Health Record Management",
    content:
      "Doctors will manage and maintain your health records for better consultation and follow-up.",
    img: DoctorImg2,
  },
  {
    title: "Affordable Specialist Consultations",
    content:
      "Specialist doctors are available for consultations at affordable rates as per your needs.",
    img: DoctorImg3,
  },
  {
    title: "Free Call On Doctor Support",
    content:
      "You can contact doctors directly for support without any charges.",
    img: DoctorImg4,
  },
  {
    title: "Manage Your Health Insurance Claims",
    content:
      "We help you manage and file your health insurance claims hassle-free.",
    img: DoctorImg5,
  },
  {
    title: "Lab Test Packages",
    content:
      "Get exclusive discounts on lab tests with up to 80% off for our members.",
    img: DoctorImg6,
  },
  {
    title: "Surgeries Support",
    content:
      "We provide full support for surgeries, ensuring proper care before and after.",
    img: DoctorImg7,
  },
  {
    title: "Ambulance Assist",
    content:
      "Quick ambulance assistance services for emergencies, accessible anytime.",
    img: DoctorImg8,
  },
  {
    title: "Home Consult (50% Off)",
    content:
      "Avail home consultation services at half the cost, exclusively for our members.",
    img: DoctorImg9,
  },
  {
    title: "24/7 Hospitalization Management",
    content:
      "Our team manages your hospitalization needs round the clock, ensuring seamless care.",
    img: DoctorImg10,
  },
  {
    title: "Home Care Services",
    content:
      "Experience compassionate care tailored to your needs, all from the comfort of home.",
    img: DoctorImg11,
  },
];

const OurServices = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
    setTimeout(() => {
      window.location.hash = "form-section";
    }, 0);
  };

  return (
    <>
      <section className="container mx-auto lg:px-[100px] md:px-[60px] py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <LazyLoad height={200} offset={300} once>
              <div className="h-auto overflow-hidden">
                {" "}
                {/* Set a fixed height */}
                <img
                  className="w-full h-auto object-contain hover:scale-105 duration-300"
                  src={benefit.img}
                  alt={benefit.title}
                />
              </div>
              </LazyLoad> 
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {benefit.title}
                </h2>
                <p className="text-gray-600">{benefit.content}</p>
                <button
                  onClick={handleNavigate}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurServices;
