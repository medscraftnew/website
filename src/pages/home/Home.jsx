import { useState } from "react";
import "./Home.css";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import image1 from "../../assets/doct_1.png";
import image2 from "../../assets/doct_2.jpeg";
import image3 from "../../assets/doct_3.png";
import image4 from "../../assets/doct_4.jpeg";
import image5 from "../../assets/doct_5.png";
import image6 from "../../assets/doct_6.png";
import image7 from "../../assets/doct_7.jpeg";
import image10 from "../../assets/doctor_10.png";
import heroImage from "../../assets/hero_img.png";
import appointmentImage from "../../assets/appointment.jpeg";
import aboutusImage from "../../assets/about_us_image.png";
import tickImage from "../../assets/tick_image.svg";
import tickImageWrapper from "../../assets/tick_wrapper_image.svg";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import AppointmentForm from "@/components/AppointmentForm";
// import Carousel from "@/components/Carousel";
import CarouselComponent from "@/components/Carousel";
import Faq from "@/components/Faq";
import image from "../../assets/doct_5.png";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToFormSection = () => {
    const formSection = document.getElementById("form-section");
    window.scrollTo({ top: formSection.offsetTop, behavior: "smooth" });
  };

  const testimonials = [
    {
      quote:
        "We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease and every one.",
      name: "Charles Dickens",
      title: "Compassion",
    },
    {
      quote:
        "We are committed to providing excellent medical care and services to our patients. We believe in continuously improving our skills, knowledge, and resources to ensure that we deliver the highest quality care possible.",
      name: "William Shakespeare",
      title: "Excellence",
    },
    {
      quote:
        "We believe in practicing medicine with integrity and honesty. We are transparent in our communication and decision-making processes, and we always put our patient's interests first & provide best solution.",
      name: "Edgar Allan Poe",
      title: "Integrity",
    },
    {
      quote:
        "We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. We believe that every person deserves to be treated with compassion and kindness.",
      name: "Jane Austen",
      title: "Respect",
    },
    {
      quote:
        "We believe in working collaboratively with our team membersvand other healthcare professionals to provide comprehensive and effective care to our patients.",
      name: "Herman Melville",
      title: "Teamwork",
    },
  ];

  return (
    <div className="bg-orange-50 h-auto">
      <main>
        <div className="relative isolate pt-20">
          {/* <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg> */}
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-0 pt-10 sm:pt-10 lg:px-4 lg:pt-10">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex md:flex lg:max-w-none lg:items-center">
                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl md:pt-0 lg:pt-0 pt-0">
                  <h1 className="text-3xl font-bold tracking-tight sm:text-7xl text-blue-600 text-center md:text-left lg:text-left capitalize">
                    <span className="text-[#DD6F8C] font-extrabold text-3xl md:text-7xl lg:text-7xl">
                      Family Doctor
                    </span>{" "}
                    cum Health Manager
                  </h1>
                  <p className="mt-6 text-md md:text-xl lg:text-xl leading-6  text-gray-600 sm:max-w-md lg:max-w-none text-center md:text-left lg:text-left">
                    A family doctor is there for all your health needs, offering
                    continuous care for every stage of life. They focus on
                    keeping you healthy with regular check-ups, managing
                    illnesses, and providing personalized advice to support your
                    overall well-being.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      onClick={scrollToFormSection}
                      className="rounded-md bg-blue-600 px-10 py-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Enroll Now
                    </a>
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Contact Us<span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
                <div className="relative mt-16 lg:h-[40rem] md:h-[40rem] h-auto lg:mt-8">
                  <img
                    src={image}
                    alt=""
                    className="object-contain h-auto"
                  />
                </div>
                {/* <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src={image1}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src={image4}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={image3}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src={image10}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={image6}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Our Values */}
      <div className="h-auto pb-20 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div className="my-[2rem]">
          <h2 className="md:text-6xl text-2xl m-0 text-[#274760] font-semibold">
            Our Values
          </h2>
        </div>
        <div className="">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="speed"
        />
        </div>
      </div>

      <section className="bg-gradient-to-r from-orange-50 to-blue-200  py-10">
        <div className="container mx-auto lg:px-[130px] md:px-[60px] px-6">
          <div className="flex flex-col lg:flex-row items-center gap-y-10">
            <div className="lg:w-5/12">
              <div>
                <h2 className="md:text-5xl text-3xl text-center md:text-left font-bold mb-2">
                  About Us
                </h2>
                  {/* <h3 className="md:text-xl lg:text-xl text-lg text-center md:text-left uppercase text-blue-600 font-semibold mb-4">
                    PRO HEALTH
                  </h3> */}
              </div>
              <div className="h-14 lg:h-18"></div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="text-blue-600 mr-2">
                    {/* <svg
                      width="30"
                      height="38"
                      viewBox="0 0 35 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-5 hidden md:block lg:block"
                    >
                      <path
                        d="M34.5342 13.0789L23.3977 23.5789C23.0977 23.8522 22.6958 24.0034 22.2787 23.9999C21.8615 23.9965 21.4625 23.8388 21.1675 23.5607C20.8726 23.2825 20.7053 22.9063 20.7016 22.513C20.698 22.1197 20.8584 21.7408 21.1482 21.4579L29.5689 13.5184H1.59092C1.16899 13.5184 0.764327 13.3604 0.465971 13.0791C0.167615 12.7978 0 12.4163 0 12.0184C0 11.6206 0.167615 11.2391 0.465971 10.9578C0.764327 10.6765 1.16899 10.5184 1.59092 10.5184H29.5689L21.1482 2.57893C20.9962 2.44056 20.875 2.27505 20.7916 2.09204C20.7083 1.90903 20.6644 1.7122 20.6625 1.51303C20.6607 1.31386 20.7009 1.11635 20.7809 0.932003C20.8609 0.747658 20.9791 0.580179 21.1284 0.439341C21.2778 0.298502 21.4554 0.18712 21.651 0.111698C21.8465 0.0362778 22.056 -0.00167465 22.2672 5.53131e-05C22.4785 0.00178719 22.6872 0.0431671 22.8813 0.12178C23.0754 0.200394 23.251 0.314665 23.3977 0.457932L34.5342 10.9579C34.8325 11.2392 35 11.6207 35 12.0184C35 12.4162 34.8325 12.7976 34.5342 13.0789Z"
                        fill="#307BC4"
                      ></path>
                    </svg> */}
                  </i>
                  <div>
                    <h3 className="text-3xl font-normal text-gray-900">
                    A team of skilled medical professionals dedicated to exceptional healthcare.</h3>
                    <p className="m-0 pt-6 text-lg text-neutral-400">
                    Our team of experienced medical professionals is committed to delivering top-quality healthcare services. We focus on a holistic approach that prioritizes treating the whole person—mind, body, and spirit—rather than just addressing the illness or symptoms. With personalized care and attention, we aim to enhance your overall well-being and health outcomes.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:w-7/12">
              <div className="h-14 lg:h-14"></div>
              <div className="relative">
                <img
                  src={aboutusImage}
                  alt="About"
                  className="lg:w-[75%] md:w-[75%] mx-auto"
                />
                <div className="absolute top-[-15%] left-[45%] flex space-x-2">
                  <img src={tickImageWrapper} alt="Mini" className="spin" />
                  <img
                    src={tickImage}
                    alt="Right"
                    className="absolute right-[4.4rem] lg:top-[70px] md:top-[70px] top-12 left-10 md:left-[60px] lg:left-[60px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Carousel Section */}
      {/* <CarouselComponent /> */}

      {/* booking section */}
      <section id="form-section">
        <AppointmentForm />
      </section>

      {/* FAQ */}
      <section>
        <Faq />
      </section>
    </div>
  );
}
