import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg"; 
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
  <section id="home" className="min-h-screen flex  flex-col-reverse md:flex-row px-6 sm:px-25 py-20 lg:py-25 pb-10  text-[#F3F4F6] bg-[#362072] items-center">
      {/* Left Text Content */}
      <div className="md:w-3/4"> 
      
        <h1 className="text-4xl lg:text-6xl leading-tighter mt-10 lg:mt-12 lg:mb-6 font-bold">
          <span className="font-two">Your business, </span>
          <br />
          <span className="italic font-two pl-10">finally</span>
          
          <span className="font-two"> online<br /> — and built right.</span>
        </h1>
         <p className="max-w-md font-one text-base lg:text-lg sm:text-lg md:text-2xl font-normal text-[#d8cfc4] py-5 leading-relaxed">
          I build fast, secure websites and digital tools for small businesses and individuals who are done looking unprofessional online. No templates. No fluff. Just work that actually performs.
        </p>
<div className="flex items-center lg:flex-row flex-col gap-4 justify-between lg:px-2 pb-10 lg:pb-5 lg:py-5">
  
        <a
              href="https://wa.me/923259582812?text=Hi%2C%20I%E2%80%99m%20interested%20in%20building%20a%20website.%20Could%20you%20let%20me%20know%20when%20you%E2%80%99re%20available%20to%20discuss%3F"
              target="_blank"
              rel="noopener noreferrer" className="h-[8vh] sm:h-[9vh] border-2 border-[rgba(40, 19, 90, 1)] lg:pl-5 pr-2 lg:py-3 py-1 lg:px-2 px-7 rounded-full text-[#d8cfc4] hover:text-[#d8cfc4] shadow-md transition font-one text-base lg:text-lg inline-flex gap-2 sm:gap-3 items-center hover:scale-105 focus:scale-105 duration-300 ease-in-out mt-4 z-10">
          Let’s Build Your Website
          <span className="bg-[#d8cfc4] rounded-full px-1 py-1 text-black">
            <ArrowRight className="w-4 h-4" />
          </span>
        </a>
       <div className="stack-note lg:text-base text-sm text-[#d8cfc4] lg:px-8">
        React & Node.js<br/>
        Vercel · REST APIs
      </div>
</div>
      </div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[82vw] lg:w-[40vw] h-full transform hover:rotate-1 hover:scale-105 transition focus:scale-102 duration-300 ease-in-out relative"
      >
        <div className="absolute lg:w-70 lg:h-90 w-55 h-65 bg-purple-800 blur-3xl rounded-full"></div>
        <img
          src={profileImage}
          alt="Profile"
          className="h-full w-full object-cover rounded-md shadow-lg relative  rounded-3xl shadow-2xl"
        />
      </motion.div>
       <div className="absolute lg:bottom-0 bottom-56 right-[0.5px] bg-purple-800 text-white text-[0.68rem] tracking-[0.2em] uppercase lg:px-5 lg:py-3 px-3 py-2 lg:font-medium font-light lg:mr-12 mr-2 rounded-full">Web Developer · Faisalabad</div>
    </section>
  );
};

export default Hero;
