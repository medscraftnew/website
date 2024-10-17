import React from "react";
import image1 from "../../../public/banner_img.png";
import WhyChooseImg from "../../assets/why_choose_us.jpeg";
import { FaAward } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa6";
import doctor1 from "../../assets/DoctorImages/1.jpg";
import doctor2 from "../../assets/DoctorImages/2.jpg";
import doctor3 from "../../assets/DoctorImages/3.jpg";
import doctor4 from "../../assets/DoctorImages/4.jpg";
import { PiHandHeartDuotone } from "react-icons/pi";
import { LuHeartHandshake } from "react-icons/lu";
import { MdLocalPharmacy } from "react-icons/md";

const About = () => {
  const services = [
    {
      title: "Experienced Medical Professionals",
      description:
        "Our team includes experienced doctors, nurses, and other healthcare professionals who are dedicated to providing the best possible care to our patients.",
      icon: <FaAward />,
    },
    {
      title: "Comprehensive Services",
      description:
        "We offer a wide range of healthcare services, from preventive care to specialized treatment for complex conditions.",
      icon: <RiServiceLine />,
    },
    {
      title: "Patient-centered Approach",
      description:
        "We believe in treating each patient as an individual, and we take the time to understand your unique health needs and concerns.",
      icon: <FaUserDoctor />,
    },
    {
      title: "State-of-the-art Facilities",
      description:
        "Our healthcare center is equipped with the latest technology and equipment to provide our patients with the most advanced care possible.",
      icon: <FaHandHoldingMedical />,
    },
  ];

  const doctors = [
    {
      name: "Glenn Arredondo",
      specialization: "Family Physician",
      image: doctor1,
    },
    {
      name: "Dorthy Winters",
      specialization: "Family Physician",
      image: doctor2,
    },
    {
      name: "Christopher Perreault",
      specialization: "Gastroenterologist",
      image: doctor3,
    },
    {
      name: "Linda Flores",
      specialization: "Gynecologist",
      image: doctor4,
    },
  ];

  return (
    <>
      <section>
        <main>
          <div className="relative h-auto isolate pt-20 bg-gradient-to-br from-blue-200 to-orange-50">
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
            <div className="overflow-hidden flex flex-row">
              {" "}
              {/* Changed flex direction here */}
              <div className="mx-auto w-[1/2] px-6 pt-10 sm:pt-10 lg:px-4 lg:pt-6">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="flex-none w-44 sm:order-1 sm:w-auto lg:mx-0 md:mx-0 mx-auto">
                    {" "}
                    {/* Moved image div here */}
                    <img src={image1} alt="" className="lg:aspect-[2/3] md:ml-0 lg:ml-0 ml-4" />
                  </div>
                  <div className="relative w-[1/2] max-w-xl lg:shrink-0 xl:max-w-xl sm:order-2">
                    {" "}
                    {/* Moved text content div here */}
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-blue-900 lg:text-left text-center">
                      Welcome to ProHealth Medical & Healthcare Center
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-gray-600 sm:max-w-md lg:max-w-none lg:text-left text-center">
                      Your Partner in Health and Wellness
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      <section className="h-auto">
        <div className="container mx-auto lg:px-[130px] md:px-[60px] px-6 py-20 lg:flex gap-10">
          <div className="w-full h-auto lg:w-1/2 flex items-center justify-center">
            <img
              src={doctor2}
              alt="Doctor"
              className="w-full h-auto sm:max-w-[350px] md:max-w-[600px] lg:max-w-[800px] object-cover"
            />
          </div>

          <div className="lg:w-1/2">
            <h2 className="uppercase tracking-wider text-blue-600 font-semibold  lg:text-left text-center lg:pt-0 py-6">
              Who We Are
            </h2>
            <h1 className="text-2xl tracking-wide font-semibold ">
              We have been providing services to patients for over 20 years
            </h1>
            <p className="pt-4 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              cupiditate odit. Hic quia praesentium et vero obcaecati enim natus
              error fugiat! Ipsum officia nihil amet necessitatibus dolore vitae
              tenetur quasi?
            </p>
            <div className="lg:grid md:grid grid-cols-2 gap-4 mt-6">
              <div>
                <PiHandHeartDuotone className="text-4xl my-2 text-blue-600" />
                <h1 className="text-2xl font-semibold">1K+Healing Hands</h1>
                <p className="py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque modi ex veniam, doloribus commodi consectetur
                  recusandae accusamus, corporis ut quia nisi pariatur,
                  necessitatibus nihil dolores atque ab ipsum. Atque,
                  consectetur.
                </p>
              </div>
              <div>
                <FaUserDoctor className="text-4xl my-2 text-blue-600" />

                <h1 className="text-2xl font-semibold">Experience Doctors</h1>
                <p className="py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus in perspiciatis et error autem molestiae officia
                  cumque veniam voluptatibus a illum totam eum aperiam, esse,
                  aut magnam perferendis consequuntur nemo?
                </p>
              </div>
              <div>
                <LuHeartHandshake className="text-4xl my-2 text-blue-600" />

                <h1 className="text-2xl font-semibold">Advanced Healthcare</h1>
                <p className="py-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores eius sapiente provident dolorum commodi accusamus
                  iure hic obcaecati veritatis nobis nihil reprehenderit quam
                  aspernatur a velit, earum ut odio aliquid.
                </p>
              </div>
              <div>
                <MdLocalPharmacy className="text-4xl my-2 text-blue-600" />

                <h1 className="text-2xl font-semibold">50+ Pharmacies</h1>
                <p className="py-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                  quis nemo neque voluptatum veritatis, rem impedit repellat
                  laborum optio voluptate accusantium magnam in quia quas,
                  aspernatur sapiente ipsa suscipit quae!
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="container mx-auto lg:px-[130px] md:[60px] px-6">
          <div className="lg:flex">
            <div className="w-[1/2] bg-blue-800">
              <h1 className="p-6 text-3xl text-white">Our Vision</h1>
              <p className="pl-6 pb-6 pr-6 text-white text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                ipsa culpa tempora cumque. Mollitia fuga, pariatur molestiae
                labore numquam accusantium culpa, expedita eos similique laborum
                obcaecati asperiores magni consectetur iste? Dolore magni modi
                fuga ut libero? Totam, sequi dignissimos voluptate quam dolore
                est explicabo iure sit autem cupiditate, pariatur reiciendis
                tempora maiores consequuntur facilis architecto reprehenderit
                veritatis rerum deleniti fuga.
              </p>
            </div>
            <div className="w-[1/2] bg-sky-950">
              <h1 className="p-6 text-3xl text-white">Our Mission</h1>
              <p className="pl-6 pb-6 pr-6 text-white text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                ipsa culpa tempora cumque. Mollitia fuga, pariatur molestiae
                labore numquam accusantium culpa, expedita eos similique laborum
                obcaecati asperiores magni consectetur iste? Dolore magni modi
                fuga ut libero? Totam, sequi dignissimos voluptate quam dolore
                est explicabo iure sit autem cupiditate, pariatur reiciendis
                tempora maiores consequuntur facilis architecto reprehenderit
                veritatis rerum deleniti fuga.
              </p>
            </div>
          </div>

          {/* Why Choose us Section */}
          <section className="h-auto flex flex-col my-20 lg:flex-row gap-8 p-0 lg:gap-4">
            {/* Left Content */}
            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold text-gray-800 pb-6">
                Why Choose Us
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                {services.map((service, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-700 text-white mb-4 transition-transform transform hover:scale-110">
                      {service.icon}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h2>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/3 flex items-center justify-center">
              <img
                src={WhyChooseImg}
                alt="Why Choose Us"
                className="w-auto h-auto  object-cover rounded-xl shadow-lg"
              />
            </div>
          </section>

          {/* Card */}

          {/* <div className="h-auto rounded-[30px] bg-gradient-to-r from-cyan-500 to-blue-500 lg:flex items-center lg:space-y-0 md:space-y-0 space-y-8 lg:py-28 md:py-26 py-10 justify-evenly lg:mt-0 md:mt-0 mt-10">  
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-6xl font-bold text-cyan-900">20+</h1>
              <p className="text-lg text-neutral-800">Years of experience</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-6xl font-bold text-cyan-900">95%</h1>
              <p className="text-lg text-neutral-800">
                Patient satisfaction rating
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-6xl font-bold text-cyan-900">5000+</h1>
              <p className="text-lg text-neutral-800">
                Patients served annually
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-6xl font-bold text-cyan-900">10+</h1>
              <p className="text-lg text-neutral-800">
                Healthcare providers on staff
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-6xl font-bold text-cyan-900">22+</h1>
              <p className="text-lg text-neutral-800">
                Convenient locations in the area
              </p>
            </div>
          </div> */}

          {/* OUR SPECIALISTS */}

          {/* <div className="container mx-auto lg:px-[130px] md:px-[60px] px-6 py-20">
            <h4 className="text-center text-blue-500 tracking-wider lg:text-xl text-md font-semibold pb-4">
              OUR SPECIALISTS
            </h4>
            <h1 className="text-center lg:text-4xl text-xl pb-6">
              We have all the professional specialists
              <br /> in our hospital
            </h1>
            <div className="cards lg:flex md:flex gap-6 items-center">
              {doctors.map((doctor, index) => (
                <div key={index} className="w-auto">
                  <img src={doctor.image} alt="" />
                  <p className="text-2xl py-2 tracking-wide">{doctor.name}</p>
                  <p className="text-lg">{doctor.specialization}</p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Awards */}
          {/* <div className="bg-gray-100 p-10 rounded-lg shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-blue-500 uppercase">
                AWARDS
              </h3>
              <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold pt-4 pb-6 text-gray-800">
                Winning Awards and <br />
                Recognition
              </h1>
              <p className="text-lg text-neutral-600 tracking-wider">
                We have been recognized for our commitment to
              </p>
              <p className="text-lg text-neutral-600 tracking-wider">
                excellence in healthcare.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-10">

              <div className="shadow-lg p-6 lg:flex md:flex gap-4 items-center rounded-lg hover:shadow-2xl transition-shadow duration-300 bg-white w-80">
                <div className="px-6 py-6 flex items-center justify-center rounded-lg bg-blue-700 text-white transition-transform duration-300 transform hover:scale-110">
                  <FaAward className="text-4xl" />
                </div>
                <div>
                  <p className="lg:text-xl md:text-xl text-md md:pt-0 lg:pt-0 pt-6 font-semibold text-gray-800 text-center md:text-left lg:text-left">
                    Malcolm Baldrige National Quality Award
                  </p>
                </div>
              </div>

              <div className="shadow-lg p-6 lg:flex md:flex gap-4 items-center rounded-lg hover:shadow-2xl transition-shadow duration-300 bg-white w-80">
                <div className="px-6 py-6 flex items-center justify-center rounded-lg bg-blue-700 text-white transition-transform duration-300 transform hover:scale-110">
                  <FaAward className="text-4xl" />
                </div>
                <div>
                <p className="lg:text-xl md:text-xl text-md md:pt-0 lg:pt-0 pt-6 font-semibold text-gray-800 text-center md:text-left lg:text-left">
                HIMSS Davies Award
                  </p>
                </div>
              </div>
              <div className="shadow-lg p-6 lg:flex md:flex gap-4 items-center rounded-lg hover:shadow-2xl transition-shadow duration-300 bg-white w-80">
                <div className="px-6 py-6 flex items-center justify-center rounded-lg bg-blue-700 text-white transition-transform duration-300 transform hover:scale-110">
                  <FaAward className="text-4xl" />
                </div>
                <div>
                <p className="lg:text-xl md:text-xl text-md md:pt-0 lg:pt-0 pt-6 font-semibold text-gray-800 text-center md:text-left lg:text-left">
                Healthgrades National’s Best Hospital
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </section>
    </>
  );
};

export default About;
