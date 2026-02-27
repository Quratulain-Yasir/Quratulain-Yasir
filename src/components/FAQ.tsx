import { useState } from "react";
import { CircleArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoGithub } from "react-icons/io";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  

  const faqs = [
    {
      q: "What technologies do you work with?",
      a: "MERN, React, Node.js, Express, MongoDB, Tailwind, Git, etc."
    },
    {
      q: "What kind of projects have you built?",
      a: "SAAS(Online Tuition Booking System),auth systems, APIs, real-world clones, landing pages, e-commerce,CRUD apps"
    },
    {
      q: "Do you have experience with APIs & databases?",
      a: "REST APIs, MongoDB schemas, Mongoose, JWT, etc. I can build secure, scalable backends to power applications"
    },
    {
      q: "Are your applications responsive and performance-optimized?",
      a: "Yes. All of my applications are fully responsive and designed to work seamlessly across mobile, tablet, and desktop devices. I follow modern frontend best practices such as reusable component architecture, optimized rendering, clean state management, and efficient API handling to ensure fast load times and smooth user experiences."
    },
    {
      q: "Can I see your GitHub and live projects?",
      a: (
      <div className="flex items-center gap-2 flex-wrap">
        <span>
          Yes. You can explore my real-world MERN stack projects through my
          GitHub and live demos available in the Projects section.
        </span>

        <a
          href="https://github.com/Quratulain-Yasir"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6A0DAD] hover:text-[#5A0BA0]"
        >
          <IoLogoGithub className="w-6 h-6 transition-transform duration-300 hover:scale-110" />
        </a>
      </div>
    ),
    }
  ];

  return (
    <section
      id="faq"
      className="max-w-7xl mx-auto sm:px-12 px-4 py-12 bg-[#bbb2db]"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="text-4xl sm:text-5xl font-bold text-[#362072] mb-13 text-center font-four"
      >
        Frequently Asked <br /> Questions
      </h2>

      <dl className="space-y-6 sm:px-10 px-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b pb-4">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full cursor-pointer sm:text-2xl text-xl font-medium text-[#362072] flex justify-between items-start focus:outline-none"
            >
              {faq.q}
              <motion.span
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-2"
              >
                <CircleArrowDown />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.dd
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="mt-2 text-gray-600 leading-relaxed overflow-hidden"
                >
                  {faq.a}
                </motion.dd>
              )}
            </AnimatePresence>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default FAQ;
