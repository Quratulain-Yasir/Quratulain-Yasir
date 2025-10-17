import React, { memo } from "react";
import { motion } from "framer-motion";
import { Monitor, Smartphone, Palette } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    count: "10 Projects",
    icon: <Monitor className="w-6 h-6 text-white" aria-hidden="true" />,
  },
  {
    id: 2,
    title: "Backend & API Development",
    count: "6 Projects",
    icon: <Smartphone className="w-6 h-6 text-white" aria-hidden="true" />,
  },
  {
    id: 3,
    title: "Deployment & Maintenance",
    count: "10 Projects",
    icon: <Palette className="w-6 h-6 text-white" aria-hidden="true" />,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const HelpSection = () => {
  return (
    <section 
      id="services"
      className="py-16 px-6 sm:px-12 lg:px-20 h-full w-full custom-gradient"
      aria-labelledby="help-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Services */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="space-y-6"
        >
          {services.map((service) => (
            <motion.li
              key={service.id}
              variants={fadeUp}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-[#974acf] focus:shadow-[#974acf] transition-all duration-300 ease-in-out hover:scale-x-105"
            >
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full bg-[#6A0DAD]`}
              >
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#6A0DAD]">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm">{service.count}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Right Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="help-heading"
            className="text-3xl sm:text-4xl font-bold text-[#2E035F]"
          >
            What do I help?
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            A website helps small businesses reach more customers and build trust online. My service makes sure your website does exactly that—professional, easy to use, and built to grow your business.
          </p>
          <p className="mt-2 text-gray-600 leading-relaxed">
            From understanding your idea to launching it online, I handle the entire process smoothly and clearly.
          </p>

          {/* Stats */}
          <div className="mt-8 flex gap-12">
            <div>
              <span className="block text-3xl font-bold text-[#2E035F]">
                30+
              </span>
              <span className="text-gray-500 text-sm">Projects Completed</span>
            </div> 
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ✅ Memoized for performance
export default memo(HelpSection);
