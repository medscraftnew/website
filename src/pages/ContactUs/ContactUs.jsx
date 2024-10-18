import React from "react";
import BannerImg from "../../assets/contact_us.png";
import ContactUsDoctorImg from "../../assets/DoctorImages/ContactUsDoctorImg.jpg";
import ContactUsForm from "@/components/ContactUsForm";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Map from "@/components/Map";

const ContactUs = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-200 to-orange-100">
        <div className="container mx-auto px-8 md:px-32 pt-36">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="lg:text-5xl md:text-3xl text-2xl lg:text-left md:text-left text-center lg: font-bold tracking-wide text-cyan-900 mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-gray-700 text-center lg:text-left md:text-left">
                We are here to answer any questions you may have about our
                website. Reach out to us and we will get back to you as soon as
                possible.
              </p>
            </div>
            <div className="w-full lg:w-1/2 md:w-1/2">
              <img
                src={BannerImg}
                alt="Contact Us"  
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-8 md:px-32 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src={ContactUsDoctorImg}
              alt="Doctor"
              className="object-cover rounded-lg shadow-md h-[500px] w-full"
            />
          </div>
          <div className="w-full md:w-1/2 md:px-6">
            <h4 className="text-lg font-semibold text-blue-500">
              ONLINE APPOINTMENT
            </h4>
            <h1 className="text-3xl font-semibold text-cyan-700 my-4">
              Make an Online Appointment Booking For Treatment Patients
            </h1>
            <ContactUsForm />
          </div>
        </div>

        <div className="container mx-auto lg:px-[130px] md:px-[60px] px-6 pt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
          {/* Address Card */}
          <div className="card bg-blue-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 text-white">
            <h5 className="font-bold text-xl mb-2 flex items-center justify-center gap-4">
              <span>
                <FaLocationDot />
              </span>
              Address
            </h5>
            <p className="text-sm text-center">
            Plot No.38, NTI Layout, AMCO Colony, Kodigehalli,<br/>
            Banglore - 560092
            </p>
          </div>

          {/* Phone Card */}
          <div className="card bg-blue-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 text-white">
            <h5 className="font-bold text-xl mb-2 flex items-center justify-center gap-4">
              <span>
                <FaPhone />
              </span>
              Phone
            </h5>
            <p className="text-sm text-center">+91 80884 35500</p>  
          </div>

          {/* Email Card */}
          <div className="card bg-blue-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 text-white">
            <h5 className="font-bold text-xl mb-2 flex items-center justify-center gap-4">
              <span>
                <IoMdMail />
              </span>
              Email
            </h5>
            <p className="text-sm text-center">info@medscraft.com</p>
          </div>
        </div>

        {/* Map */}
        <div className="container mx-auto lg:px-[130px] md:px-[60px] px-6">
          <Map />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
