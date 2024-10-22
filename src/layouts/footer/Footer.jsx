import React from "react";
import Logo from "@/assets/Logo/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  // const navigate = useNavigate();


    const date = new Date();
    const year = date.getFullYear();

  return (
    <>
      <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
  <div className="mb-6 md:mb-0">
    <Link to="/" className="flex items-center">
      <div className="flex flex-col items-center">
        <img src={Logo} className="h-8 me-3" alt="MedsCraft Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#13A7E7] dark:text-white">
          Meds<span className="text-[#DD6F8C]">Craft</span>
        </span>
      </div>
    </Link>
  </div>
  
  <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
    {/* Resources Section */}
    <div>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        Resources
      </h2>
      <ul className="text-gray-500 dark:text-gray-400 font-medium">
        <li className="mb-4">
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/OurServices" className="hover:underline">
            Our Services
          </Link>
        </li>
      </ul>
    </div>
    
    {/* Follow Us Section */}
    {/* <div>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        Follow Us
      </h2>
      <ul className="text-gray-500 dark:text-gray-400 font-medium">
        <li className="mb-4">
          <a href="https://github.com/themesberg/flowbite" className="hover:underline">
            Github
          </a>
        </li>
        <li className="mb-4">
          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
            Discord
          </a>
        </li>
        <li className="mb-4">
          <a href="https://twitter.com/medscraft" className="hover:underline">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/medscraft/" className="hover:underline">
            Instagram
          </a>
        </li>
      </ul>
    </div> */}
    
    {/* Legal Section */}
    <div>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        Legal
      </h2>
      <ul className="text-gray-500 dark:text-gray-400 font-medium">
        <li className="mb-4">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="/terms-and-conditions" className="hover:underline">
            Terms & Conditions
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © {year}{" "}
              <a href="/" class="hover:underline">
                MedsCraft™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              {[
                {
                  href: "https://www.facebook.com/medscraft/",
                  icon: <BiLogoFacebook />,
                },
                {
                  href: "https://twitter.com/medscraft",
                  icon: <FaXTwitter />,
                },
                {
                  href: "https://www.instagram.com/medscraft/",
                  icon: <IoLogoInstagram />,
                },
                {
                  href: "https://wa.me/yourphonenumber",
                  icon: <FaWhatsapp />,
                },
                {
                  href: "https://www.linkedin.com/company/medscraft",
                  icon: <FaLinkedinIn />,
                },
                {
                  href: "https://www.youtube.com/channel/UCdKm4qZL9V4xWj9eQVQVzEA",
                  icon: <TfiYoutube />,
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
