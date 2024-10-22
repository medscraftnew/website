import React, { useState } from "react";
import { CalendarIcon } from "lucide-react";
import appointmentImage from "../assets/appointment.jpeg";
import { GoArrowRight } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";

export default function AppointmentForm() {

  const [submittedData, setSubmittedData] = useState(null); // Store submitted data

  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    age: "",
    gender: "",
    location: "",
    area: "",
    familyMembers: [], // Store family members as an array
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFamilyMemberChange = (index, field, value) => {
    const updatedFamilyMembers = [...formData.familyMembers];
    updatedFamilyMembers[index] = {
      ...updatedFamilyMembers[index],
      [field]: value,
    };
    setFormData({ ...formData, familyMembers: updatedFamilyMembers });
  };

  const handleAddFamilyMember = () => {
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
  };

  const handleRemoveFamilyMember = (index) => {
    const updatedFamilyMembers = formData.familyMembers.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, familyMembers: updatedFamilyMembers });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmittedData(formData);


    toast.success("Thank you, your form has been submitted successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

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
      <div className="absolute inset-0 opacity-50"></div>
      <div className="container mx-auto lg:px-[100px] md:px-[60px] px-2 relative z-10">
        <div className="flex flex-wrap items-center -mx-4 px-[2rem]">
          <div className="w-full lg:w-1/2 md:w-full sm-w-full mb-12 lg:mb-0">
            {/* <h3 className="text-blue-600 font-semibold text-xl mb-2">
              BOOK AN
            </h3> */}
            <h2 className="md:text-4xl lg:text-4xl text-xl text-center tracking-wide font-bold mb-8">
              Membership Form
            </h2>
            <div className="bg-gradient-to-r 0 lg:p-8 md:p-8 p-2 rounded-lg  max-w-5xl mx-auto">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 max-w-5xl mx-auto"
              >
                {/* Personal Information Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex flex-col">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-700"
                      >
                        Enter Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full py-4 px-5 rounded-xl border border-black shadow-md focus:border-blue-500 focus:ring-blue-500 outline-none transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="mobileNumber"
                        className="text-sm font-medium text-gray-700"
                      >
                        Enter Your Mobile Number
                      </label>
                      <input
                        id="mobileNumber"
                        name="mobileNumber"
                        type="tel"
                        placeholder="Mobile Number"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full py-4 px-5 rounded-xl border border-black shadow-md focus:border-blue-500 focus:ring-blue-500 outline-none transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Enter Your Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full py-4 px-5 rounded-xl border border-black shadow-md focus:border-blue-500 focus:ring-blue-500 outline-none transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col">
                      <label
                        htmlFor="age"
                        className="text-sm font-medium text-gray-700"
                      >
                        Enter Your Age
                      </label>
                      <input
                        id="age"
                        name="age"
                        type="text"
                        placeholder="Your Age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full py-4 px-5 rounded-xl border border-black shadow-md focus:border-blue-500 focus:ring-blue-500 outline-none transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="gender"
                        className="text-sm font-medium text-gray-700"
                      >
                        Select your Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full py-4 px-5 rounded-xl border border-black shadow-md focus:border-blue-500 focus:ring-blue-500 outline-none transition-all duration-200"
                      >
                        <option value="">Select your Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="location"
                        className="text-sm font-medium text-gray-700"
                      >
                        Select Your Location
                      </label>
                      <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full py-4 px-5 rounded-xl border border-black shadow-md focus:border-blue-500 focus:ring-blue-500 outline-none transition-all duration-200"
                      >
                        <option value="">Select Location</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Hyderabad">Gurugram</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="area"
                      className="text-sm font-medium text-gray-700"
                    >
                      Enter Your Area
                    </label>
                    <input
                      id="area"
                      name="area"
                      type="text"
                      placeholder="Your Area"
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
                <div className="relative max-h-96 overflow-y-auto">
                  {formData.familyMembers.map((member, index) => (
                    <div
                      key={index}
                      className="relative grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 p-4 sm:p-6 bg-white rounded-lg shadow-lg transition-all duration-300 border border-gray-300"
                    >
                      {/* Family Member Number */}
                      <p className="py-6 text-center font-semibold text-lg md:col-span-2">
                        Family Member: {index + 1}
                      </p>

                      {/* Family Member Name */}
                      <div className="space-y-2">
                        <label
                          htmlFor={`familyMemberName-${index}`}
                          className="block text-sm font-medium text-gray-700"
                        >
                          Family Member Name
                        </label>
                        <input
                          id={`familyMemberName-${index}`}
                          name="familyMemberName"
                          type="text"
                          placeholder="Family Member Name"
                          value={member.familyMemberName}
                          onChange={(e) =>
                            handleFamilyMemberChange(
                              index,
                              "familyMemberName",
                              e.target.value
                            )
                          }
                          required
                          className="mt-1 block w-full py-3 px-4 rounded-xl border border-black shadow-md focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      {/* Family Member Age */}
                      <div className="space-y-2">
                        <label
                          htmlFor={`familyMemberAge-${index}`}
                          className="block text-sm font-medium text-gray-700"
                        >
                          Family Member Age
                        </label>
                        <input
                          id={`familyMemberAge-${index}`}
                          name="familyMemberAge"
                          type="number"
                          placeholder="Family Member Age"
                          value={member.familyMemberAge}
                          onChange={(e) =>
                            handleFamilyMemberChange(
                              index,
                              "familyMemberAge",
                              e.target.value
                            )
                          }
                          required
                          className="mt-1 block w-full py-3 px-4 rounded-xl border border-black shadow-md focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      {/* Family Member Health Condition */}
                      <div className="space-y-2 md:col-span-2">
                        <label
                          htmlFor={`familyMemberHealthCondition-${index}`}
                          className="block text-sm font-medium text-gray-700"
                        >
                          Health Condition
                        </label>
                        <input
                          id={`familyMemberHealthCondition-${index}`}
                          name="familyMemberHealthCondition"
                          type="text"
                          placeholder="Health Condition"
                          value={member.familyMemberHealthCondition}
                          onChange={(e) =>
                            handleFamilyMemberChange(
                              index,
                              "familyMemberHealthCondition",
                              e.target.value
                            )
                          }
                          required
                          className="mt-1 block w-full py-3 px-4 rounded-xl border border-black shadow-md focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      {/* Remove Family Member Button */}
                      <button
                        type="button"
                        onClick={() => handleRemoveFamilyMember(index)}
                        className="absolute top-3 right-3 text-gray-400 hover:text-red-500 focus:outline-none"
                      >
                        <AiOutlineClose className="text-xl" />
                      </button>
                    </div>
                  ))}
                </div>

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
              {submittedData && (
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-4">Submitted Data:</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p><strong>Name:</strong> {submittedData.name}</p>
              <p><strong>Mobile Number:</strong> {submittedData.mobileNumber}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
              <p><strong>Age:</strong> {submittedData.age}</p>
              <p><strong>Gender:</strong> {submittedData.gender}</p>
              <p><strong>Address:</strong> {submittedData.address}</p>
              <p><strong>Area:</strong> {submittedData.area}</p>
              <p><strong>Family Members:</strong></p>
              <ul>
                {submittedData.familyMembers.map((member, index) => (
                  <li key={index}>
                    <p><strong>Family Member Name:</strong> {member.familyMemberName}</p>
                    <p><strong>Family Member Age:</strong> {member.familyMemberAge}</p>
                    <p><strong>Health Condition:</strong> {member.familyMemberHealthCondition}</p>
                  </li>
                ))}
              </ul>
              </div>
          </div>
          )}
            </div>
          </div>
          <div className="w-full lg:w-1/2 md:w-full px-4 flex justify-center ">
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
