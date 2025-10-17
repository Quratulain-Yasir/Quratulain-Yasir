import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg"; 
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
  <section id="home" className="min-h-screen flex px-6 sm:px-10 md:px-20 py-3 pb-10 sm:py-10 bg-[#2E035F] text-[#F3F4F6]">
      {/* Left Text Content */}
      <div className="md:w-1/2 w-[50vw] space-y-2 sm:space-y-2 relative z-10 sm:-mr-20">
      
        <h1 className="text-3xl sm:text-7xl font-medium leading-tighter mt-18 mb-8">
          <span className="font-one">clean, mobile-first websites</span>
          <br />
          <span className="italic font-medium font-two">& scalable APIs</span>
          <br />
          <span className="font-one">with React & Node.js</span>
        </h1>

        <p className="max-w-md font-two text-base sm:text-lg md:text-2xl font-medium text-[#d8cfc4] -mr-30 py-6">
          Helping small businesses and individuals go online with fast, responsive, and secure digital solutions powered by React & Node.js
        </p>

        <button className="border-2 border-[#6A0DAD] pl-4 pr-2 py-1 rounded-full hover:bg-[#6A0DAD] focus:bg-[#6A0DAD] text-[#d8cfc4] hover:text-[#d8cfc4] shadow-md shadow-[#d8cfc4] transition font-one text-md sm:text-lg inline-flex gap-2 sm:gap-3 items-center hover:scale-105 focus:scale-105 duration-300 ease-in-out mt-4 z-10 -mr-20">
          Let’s Build Your Website
          <span className="bg-[#d8cfc4] rounded-full px-2 py-2 text-black">
            <ArrowRight className="w-4 h-4" />
          </span>
        </button>
      </div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-8 md:mt-0"
      >
        <img
          src={profileImage}
          alt="Profile"
          className="w-[70vw] sm:w-[30vw] h-[60vh] sm:h-[100vh] object-cover rounded-b-[150px] sm:rounded-b-[200px] md:rounded-b-[250px] border-4 border-[#d8cfc4]"
        />
      </motion.div>

 
      {/* Stats */}
      {/* <div className="sm:w-3/5 md:w-2/5 mt-10 md:mt-0 pb-10 sm:pb-20">
        <ul className="flex flex-col items-end gap-3 sm:gap-4">
          <motion.li
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.1,
            }}
            className="inline-flex flex-col font-one text-xl sm:text-2xl md:text-3xl items-end"
          >
            15+
            <span className="font-two text-gray-400 text-sm sm:text-lg md:text-xl">
              Years Experience
            </span>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.3,
            }}
            className="inline-flex flex-col font-one text-xl sm:text-2xl md:text-3xl items-end"
          >
            20+
            <span className="font-two text-gray-400 text-sm sm:text-lg md:text-xl">
              Projects Delivered
            </span>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.5,
            }}
            className="inline-flex flex-col font-one text-xl sm:text-2xl md:text-3xl items-end"
          >
            50+
            <span className="font-two text-gray-400 text-sm sm:text-lg md:text-xl">
              Happy Clients
            </span>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.7,
            }}
            className="inline-flex flex-col font-one text-xl sm:text-2xl md:text-3xl items-end"
          >
            100+
            <span className="font-two text-gray-400 text-sm sm:text-lg md:text-xl">
              Cups of Coffee
            </span>
          </motion.li>
        </ul>
      </div>   */}
    </section>
  );
};

export default Hero;
