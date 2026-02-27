import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg"; 
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
  <section id="home" className="min-h-screen flex  flex-col-reverse md:flex-row px-6 sm:px-25 py-30 sm:py-30 pb-10  text-[#F3F4F6] bg-[#362072]">
      {/* Left Text Content */}
      <div className="md:w-3/4">
      
        <h1 className="text-3xl sm:text-5xl  leading-tighter mt-15">
          <span className="font-one">clean, mobile-first websites</span>
          <br />
          <span className="italic font-medium font-two">& scalable APIs</span>
          <br />
          <span className="font-one">with React & Node.js</span>
        </h1>

 
          <p className="max-w-md font-two text-base sm:text-lg md:text-2xl font-medium text-[#d8cfc4] py-5">
          Helping small businesses and individuals go online with fast, responsive, and secure digital solutions powered by React & Node.js
        </p>

        <button className="h-[10vh] border-2 border-[rgba(40, 19, 90, 1)] pl-4 pr-2 py-1 rounded-full text-[#d8cfc4] hover:text-[#d8cfc4] shadow-md transition font-one text-md sm:text-lg inline-flex gap-2 sm:gap-3 items-center hover:scale-105 focus:scale-105 duration-300 ease-in-out mt-4 z-10">
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
        className="sm:w-[30vw] h-[60vh] transform hover:rotate-1 hover:scale-105 transition focus:scale-102 duration-300 ease-in-out relative"
      >
        <div className="absolute w-80 h-80 bg-purple-500 blur-3xl rounded-full"></div>
        <img
          src={profileImage}
          alt="Profile"
          className="h-full w-full object-cover rounded-md shadow-lg relative  rounded-3xl shadow-2xl"
        />
      </motion.div>
       
    </section>
  );
};

export default Hero;
