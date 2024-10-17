import React from "react";
import faqImg from "../assets/Faq.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Faq = () => {
  const Navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gray-100 py-8 md:py-16" id="faq">
      <div className="container mx-auto lg:px-[130px] md:px-[60px] px-6">
        <div className="lg:flex lg:flex-row lg:items-center flex-col-reverse">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mt-10 md:mt-0 lg:mt-0 mb-12 md:mb-0 lg:mb-0">
            <img
              className="img-fluid rounded-lg md:w-[84%] lg:w-[84%]"
              loading="lazy"
              src={faqImg}
              alt="How can we help you?"
            />
          </div>

          {/* FAQ Text & Accordion Section */}
          <div className="w-full lg:w-1/2 md:mt-8 lg:mt-8 mt-0 lg:pl-16">
            <h2 className="lg:text-4xl md:text-3xl text-xl font-bold text-gray-900 mb-6">
              How can we help you?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We hope you have found an answer to your question. If you need any
              help, please{" "}
              <span
                className="cursor-pointer text-blue-600 font-semibold hover:underline"
                onClick={() => Navigate("/ContactUs")}
              >
                contact us
              </span>
              .
            </p>

            {/* Accordion */}
            <div className="w-full lg:w-full mt-8 lg:mt-0 ">
              {/* Accordion */}
              <div className="space-y-4">
                {/* Accordion Item 1 */}
                <div className="border border-gray-300 rounded-lg shadow-lg transition-all duration-300">
                  <h2 className="mb-0">
                    <button
                      className="flex items-center justify-between w-full text-left text-lg font-semibold p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none"
                      onClick={() => toggleAccordion(1)}
                    >
                      <span>What is ABDM?</span>
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-300 ${
                          activeIndex === 1 ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </h2>
                  {activeIndex === 1 && (
                    <div className="p-4 text-gray-700 text-base bg-white">
                      The Ayushman Bharat Digital Mission (ABDM) is an Indian
                      government initiative to digitize healthcare records and
                      create a digital infrastructure for better healthcare
                      delivery under the Ayushman Bharat scheme.
                    </div>
                  )}
                </div>

                {/* Accordion Item 2 */}
                <div className="border border-gray-300 rounded-lg shadow-lg transition-all duration-300">
                  <h2 className="mb-0">
                    <button
                      className="flex items-center justify-between w-full text-left text-lg font-semibold p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none"
                      onClick={() => toggleAccordion(2)}
                    >
                      <span>What is Medscraft Healthcare?</span>
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-300 ${
                          activeIndex === 2 ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </h2>
                  {activeIndex === 2 && (
                    <div className="p-4 text-gray-700 text-base bg-white">
                      ABDM-certified micro HMIS with patient engagement, powered
                      by AConnect plugin, streamlining healthcare operations.
                    </div>
                  )}
                </div>

                {/* Accordion Item 3 */}
                <div className="border border-gray-300 rounded-lg shadow-lg transition-all duration-300">
                  <h2 className="mb-0">
                    <button
                      className="flex items-center justify-between w-full text-left text-lg font-semibold p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none"
                      onClick={() => toggleAccordion(3)}
                    >
                      <span>What is ABHA Number?</span>
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-300 ${
                          activeIndex === 3 ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </h2>
                  {activeIndex === 3 && (
                    <div className="p-4 text-gray-700 text-base bg-white">
                      The ABHA (Ayushman Bharat Health Account) Number is a
                      unique identifier used to authenticate individuals and
                      connect their health records across different systems and
                      stakeholders. It ensures accurate issuance and access to
                      medical records, enhancing healthcare coordination and
                      delivery.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
