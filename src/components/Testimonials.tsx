import React from "react";
import { motion } from "framer-motion";

// Reusable Card Component with animation
const TestimonialCard = ({ img, text, name, role, delay }) => (
  <motion.article
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="bg-white shadow-md rounded-2xl p-6 max-w-sm w-full text-center mx-auto cursor-pointer"
  >
    {/* Profile Image */}
    <motion.div
      className="flex justify-center -mt-12"
      whileHover={{ rotate: 5, scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img
        src={img}
        alt={`${name} photo`}
        loading="lazy"
        className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
      />
    </motion.div>

    {/* Testimonial Text */}
    <p className="text-gray-600 text-sm mt-4 italic">“{text}”</p>

    {/* Name & Role */}
    <h3 className="font-semibold text-lg mt-4">{name}</h3>
    <p className="text-gray-500 text-sm">{role}</p>
  </motion.article>
);

export default function Testimonials() {
  const testimonials = [
    {
      img: "/user1.jpg",
      text: "A complete search of the internet has found these results satisfactory results...",
      name: "John Allendane",
      role: "Creative Manager",
    },
    {
      img: "/user2.jpg",
      text: "This service helped me find my dream job with ease and great support...",
      name: "Anamika Sandula",
      role: "Product Manager",
    },
    {
      img: "/user3.jpg",
      text: "I am very satisfied with the experience, highly recommend to others...",
      name: "Souther Hakezan",
      role: "Marketing Manager",
    },
  ];

  return (
    <section
      className="py-20 px-6 bg-[#f8f9fa] relative"
      aria-labelledby="testimonials-heading"
    >
      {/* Heading */}
      <motion.div
        className="text-center max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2
          id="testimonials-heading"
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          People talk about us
        </h2>
        <p className="text-gray-600 mt-3 text-sm md:text-base">
          I got a job that was in accordance with the salary and field of work.
          The process of submitting an application was quite easy.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} delay={i * 0.2} />
        ))}
      </div>
    </section>
  );
}
