import React from "react";
import { motion } from "framer-motion";
import work1 from "../assets/work-1.png";
import work2 from "../assets/work-2.png";
import work3 from "../assets/work-3.png";
import work4 from "../assets/work-4.png";

const LatestWork = () => {
  return (
    <section id="portfolio">
      <div className="py-10 px-12 sm:px-20 font-medium w-full min-h-[80vh] text-gray-700 bg-[#2E035F]">
        {/* Heading Animation */}
        <motion.h2
          className="mt-10 text-3xl sm:text-6xl font-light font-one text-white tracking-wider"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My Latest Works
        </motion.h2>

        <motion.p
          className="font-four text-[#d8cfc4] font-light text-sm mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Perfect solution for digital experience
        </motion.p>

        {/* Image Section */}
        <div className="flex gap-x-5 sm:h-[60vh] h-[60vh] items-center w-full hide-scrollbar overflow-x-scroll mt-4">
          <motion.a
            href="https://your-link.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View full project details"
          >
            <motion.img
              src={work1}
              alt="OnlineTuition"
              className="max-w-sm w-60 sm:w-70 h-auto object-contain rounded-xl shadow-md shadow-[#6A0DAD] transition hover:scale-105 duration-300 ease-in-out m-5 mt-5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </motion.a>

          <motion.a
            href="https://autumn-whispers.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View full project details"
          >
            <motion.img
              src={work2}
              alt="Autumn Whispers"
              className="max-w-sm w-60 sm:w-70 h-auto object-contain rounded-xl shadow-md shadow-[#6A0DAD] transition hover:scale-105 duration-300 ease-in-out m-5 mt-5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </motion.a>

          <motion.a
            href="https://barelie.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View full project details"
          >
            <motion.img
              src={work3}
              alt="Barelie"
              className="max-w-sm w-60 sm:w-70 h-auto object-contain rounded-xl shadow-md shadow-[#6A0DAD] transition hover:scale-105 duration-300 ease-in-out m-5 mt-5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </motion.a>

          <motion.a
            href="https://bootstrap-showcase-foodwebsite.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View full project details"
          >
            <motion.img
              src={work4}
              alt="Fuoco e Farina"
              className="max-w-sm w-60 sm:w-70 h-auto object-contain rounded-xl shadow-md shadow-[#6A0DAD] transition hover:scale-105 duration-300 ease-in-out m-5 mt-5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
