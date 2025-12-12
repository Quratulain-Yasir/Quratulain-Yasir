import { motion } from "framer-motion";
import asani from "../assets/asani-logo.webp";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
const ContactInfo = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    }),
  };

  return (
    <section className="w-full lg:w-1/2 flex">
      <motion.div
        className="rounded-lg p-8 shadow-lg w-full bg-[#2E035F] transition-all duration-300 ease-in-out hover:scale-105 active:scale-105 hover:shadow-purple-800 active:shadow-purple-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.15}
        variants={{ hidden: fadeUp.hidden, visible: fadeUp.visible(0.15) }}
      >
        <h3 className="text-2xl font-bold text-white mb-8 font-two">
          Contact Information
        </h3>

        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-start">
            <div className="bg-[#6A0DAD] bg-opacity-10 p-3 rounded-full mr-4 flex-shrink-0">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-[#6A0DAD]">Email</h4>
              <a
                href="mailto:hello@autumnwhispers.com"
                className="text-gray-600 hover:underline"
              >
                quratulainyasir7@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start">
            <div className="bg-[#6A0DAD] bg-opacity-10 p-3 rounded-full mr-4 flex-shrink-0">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-[#6A0DAD]">Phone</h4>
              <a href="tel:+92 03259582812" className="text-gray-600 hover:underline">
                +92 03259582812
              </a>
            </div>
          </div>

        </div>

        {/* Social Links */}
        <div className="mt-9">
          <h4 className="font-medium text-white mb-4">Follow Me</h4>
          <div className="flex space-x-6">
            <a className="text-[#6A0DAD] hover:text-[#5A0BA0]" href="https://www.linkedin.com/in/quratulain-yasir/">
              {/* <Linkedin className="w-6 h-6 transition-all duration-300 ease-in-out hover:scale-110" /> */}
              <FaLinkedin className="w-6 h-6 transition-all duration-300 ease-in-out hover:scale-110" />
            </a>
            <a className="text-[#6A0DAD] hover:text-[#5A0BA0]" href="https://www.instagram.com/quratulainyasir97/">
              <BsInstagram className="w-6 h-6 transition-all duration-300 ease-in-out hover:scale-110" />
            </a>
            <a className="text-[#6A0DAD] hover:text-[#5A0BA0]" href="#">
              <FaFacebook className="w-6 h-6 transition-all duration-300 ease-in-out hover:scale-110" />
            </a>
            <a className="text-[#6A0DAD] hover:text-[#5A0BA0]" href="https://asani.pk/profile/quratulainyasir97">
            <img src={asani} alt="asani-logo" className="w-6 h-6 transition-all duration-300 ease-in-out hover:scale-110" /> 
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactInfo;
