import React from 'react'
import { motion } from "framer-motion";

const Contact = () => {
    const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

  return (
    <section
      id="contact"
      className="py-16 bg-[#FFF8E1]"
      aria-labelledby="contact-heading"
    >
          <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: fadeUp.hidden, visible : fadeUp.visible(0) }}
        >
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold text-[#6D4C41] mb-4"
          >
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or suggestions? I'd love to hear from you!
          </p>
        </motion.div>
</div>
    </section>
  )
}

export default Contact