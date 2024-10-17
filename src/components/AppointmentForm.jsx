import React, { useState } from "react";
import { CalendarIcon } from "lucide-react";
import appointmentImage from "../assets/appointment.jpeg";
import { GoArrowRight } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    familyMemberName: "",
    mobileNumber: "",
    email: "",
    age: "",
    gender: "",
    location: "",
    area: "",
    familyMembers: [],
  });

  const [showFamilyForm, setShowFamilyForm] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddFamilyMember = () => {
    setShowFamilyForm(true);
  };

  const handleAddMemberDetails = () => {
    setFormData({
      ...formData,
      familyMembers: [
        ...formData.familyMembers,
        {
          familyMemberName: "",
          familyMemberAge: "",
          familyMemberHealthCondition: "",
        },
      ],
    });
    setShowFamilyForm(false);
  };

  const handleCloseFamilyForm = () => {
    setShowFamilyForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios
    //   .post("", formData)
    //   .then((response) => {
    //     console.log(response);
    //     // Reset form data after a successful submission
    //     setFormData({
    //       name: "",
    //       mobileNumber: "",
    //       email: "",
    //       age: "",
    //       location: "",
    //       familyMembers: [],
    //     });
    //     // Show success toast
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     });
    //   });
    toast.success("Thank you your form has been submitted Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <section
      id="appointment"
      className="py-16 lg:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-orange-50 opacity-50"></div>
      <div className="container mx-auto lg:px-[100px] md:px-[60px] px-2 relative z-10">
        <div className="flex flex-wrap items-center -mx-4 px-[2rem]">
          <div className="w-full lg:w-1/2 md:w-1/2 mb-12 lg:mb-0">
            {/* <h3 className="text-blue-600 font-semibold text-xl mb-2">
              BOOK AN
            </h3> */}
            <h2 className="md:text-4xl lg:text-5xl text-xl text-center font-bold mb-8">
              Membership Form
            </h2>
            <div className="bg-gradient-to-r 0 lg:p-8 md:p-8 p-2 rounded-lg shadow-lg max-w-5xl mx-auto">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 max-w-5xl mx-auto"
              >
                {/* Personal Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Enter Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="David John"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full py-4 px-5 rounded-xl border border-black shadow-md focus:border-blue-500 focus:ring-blue-500 outline-none transition-all duration-200"
                    />
                  </div>

                  {/* Mobile Number Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="mobileNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Enter Your Mobile Number
                    </label>
                    <input
                      id="mobileNumber"
                      name="mobileNumber"
                      type="tel"
                      placeholder="(123) 456 - 789"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full py-4 px-5 rounded-xl border border-black shadow-md focus:border-blue-500 focus:ring-blue-500 outline-none transition-all duration-200"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Enter Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@mail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full py-4 px-5 rounded-xl border border-black shadow-md focus:border-blue-500 focus:ring-blue-500 outline-none transition-all duration-200"
                    />
                  </div>

                  {/* Age Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="age"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Enter Your Age
                    </label>
                    <input
                      id="age"
                      name="age"
                      type="number"
                      placeholder="24"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full py-4 px-5 rounded-xl border border-black shadow-md focus:border-blue-500 focus:ring-blue-500 outline-none transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Select your gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full py-3 px-4 sm:py-4 sm:px-5 rounded-xl border border-black shadow-md focus:border-blue-500 focus:ring-blue-500 outline-none transition-all duration-200"
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Location Dropdown */}
                  <div className="relative">
                    {/* Area Field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="area"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Select Your Location
                      </label>
                    </div>
                    <select
                      value={formData.location}
                      name="location"
                      onChange={handleInputChange}
                      required
                      className="appearance-none block w-full py-4 px-5 rounded-xl border border-black shadow-md focus:border-blue-500 focus:ring-blue-500 outline-none transition-all duration-200 pr-10 mt-2"
                    >
                      <option value="">Select Location</option>
                      <option value="Coimbatore">Coimbatore</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Hyderabad">Hyderabad</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="area"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Enter Your Area
                    </label>
                    <input
                      id="area"
                      name="area"
                      type="text"
                      placeholder="Enter Your Area"
                      value={formData.area}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full py-4 px-5 rounded-xl border border-black shadow-md focus:border-blue-500 focus:ring-blue-500 outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Add Family Member Button */}
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={handleAddFamilyMember}
                    className="bg-green-500 text-white py-3 px-6 lg:rounded-full md:rounded-full rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 flex items-center gap-x-2 md:text-xl text-md w-full md:w-auto"
                  >
                    Add Family Member
                    <span>
                      <FaPlus />
                    </span>
                  </button>
                </div>

                {/* Conditionally Render Family Health Manager Fields */}
                {showFamilyForm && (
                  // Family Member : 1
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 p-4 sm:p-6 bg-gray-50 rounded-lg shadow-lg transition-all duration-300">
                    {/* Close Button */}
                    <button
                      type="button"
                      onClick={handleCloseFamilyForm}
                      className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 focus:outline-none"
                    >
                      <AiOutlineClose className="text-xl" />
                    </button>

                    {/* Family Member Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="familyMemberName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Family Member Name
                      </label>
                      <input
                        id="familyMemberName"
                        name="familyMemberName"
                        type="text"
                        placeholder="John Doe"
                        value={formData.familyMemberName}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full py-3 px-4 sm:py-4 sm:px-5 rounded-xl border border-black shadow-md focus:border-blue-500 focus:ring-blue-500 outline-none transition-all duration-200"
                      />
                    </div>

                    {/* Family Member Age */}
                    <div className="space-y-2">
                      <label
                        htmlFor="familyMemberAge"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Family Member Age
                      </label>
                      <input
                        id="familyMemberAge"
                        name="familyMemberAge"
                        type="number"
                        placeholder="45"
                        value={formData.familyMemberAge}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full py-3 px-4 sm:py-4 sm:px-5 rounded-xl border border-black shadow-md focus:border-blue-500 focus:ring-blue-500 outline-none transition-all duration-200"
                      />
                    </div>

                    {/* Family Member Health Condition */}
                    <div className="space-y-2 md:col-span-2">
                      <label
                        htmlFor="familyMemberHealthCondition"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Select your gender
                      </label>
                      <select
                        id="familyMemberHealthCondition"
                        name="familyMemberHealthCondition"
                        value={formData.familyMemberHealthCondition}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full py-3 px-4 sm:py-4 sm:px-5 rounded-xl border border-black shadow-md focus:border-blue-500 focus:ring-blue-500 outline-none transition-all duration-200"
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Add Member Details Button */}
                    <div className="flex justify-end col-span-1 md:col-span-2 mt-4">
                      <button
                        type="button"
                        onClick={handleAddMemberDetails}
                        className="bg-blue-600 text-white py-2 px-6 sm:py-3 sm:px-10 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2 md:text-2xl text-sm transition-all duration-200"
                      >
                        Add Member Details
                        <GoArrowRight className="text-xl transition-transform duration-300 ease-in-out transform group-hover:translate-x-2" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="group mt-6">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-3 px-10 lg:rounded-full md:rounded-full rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2 transition-all duration-200 w-full md:w-auto lg:w-auto"
                  >
                    Submit
                    <GoArrowRight className="text-xl transition-transform duration-300 ease-in-out transform group-hover:translate-x-2" />
                  </button>
                </div>
              </form>

              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                progress={undefined}
                theme="light"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 flex justify-center ">
            <img
              //   src="/placeholder.svg?height=600&width=600"AppointmentForm
              src={appointmentImage}
              alt="Doctor smiling and gesturing towards the appointment form"
              className="lg:rounded-2xl md:rounded-[100px] rounded shadow-xl h-auto lg:w-[80%] md:w-[80%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
