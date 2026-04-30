import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import profileImage from "../assets/profile.webp";

export default function Aboutme() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="aboutme" className="w-full px-6 sm:px-16 lg:px-28 py-24 ">
      
      {/* HEADING — clean, no script font */}
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-3">
          Who I am
        </p>
        <h2 className="text-4xl lg:text-6xl font-bold tracking-wide text-white font-two">
          About Me
        </h2>
      </motion.div>

      {/* BODY — stacked on mobile, row on desktop */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* IMAGE */}
        <motion.div
          className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden flex-shrink-0 shadow-2xl ring-4 ring-purple-500/30"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <img
            src={profileImage}
            alt="Quratulain — Full Stack Developer"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* TEXT BLOCK */}
        <motion.div
          className="flex flex-col gap-6 text-center lg:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {/* LEAD — bigger, draws eye first */}
          <p className="text-xl lg:text-2xl font-semibold text-white leading-snug">
             I'm Quratulain — a full stack developer who turns business ideas into real, working websites. No templates, no fluff 
          </p>

          {/* SUPPORTING — smaller, secondary */}
          <p className="text-base text-purple-200/70 leading-relaxed">
            My belief is simple — good web development shouldn't only be for big companies with big budgets. Small businesses deserve the same quality, with clear communication, honest timelines, and clean code.
          </p>

          {/* STACK — smallest, tertiary */}
          <p className="text-sm text-purple-400 tracking-wide uppercase">
            React · Node.js · Tailwind CSS
          </p>
        </motion.div>

      </div>
    </section>
  );
}