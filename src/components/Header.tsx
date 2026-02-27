import { useState } from "react";
import { Menu , X  } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-4/5 rounded-full flex justify-between items-center px-6 sm:px-15 py-4 sm:py relative z-50 font-one sticky top-5 header-scroll text-[#F3F4F6] mx-auto"
    >
      {/* Logo */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl sm:text-2xl  tracking-wider text-shadow-lg"
      >
        QURATULAIN
      </motion.h1>

      {/* Menu Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.09 }}
        transition={{ type: "spring", stiffness: 400 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border-none px-4 py-2 rounded-full bg-[#362072] hover:bg-[#362072] transition text-white text-sm sm:text-base  shadow-md shadow-[#362072] tracking-wider"
      >
        <span className="hidden sm:inline">{isOpen ? "CLOSE" : "MENU"}</span>
        {isOpen ? (
          <X  className="text-lg md:text-xl" />
        ) : (
          <Menu className="text-lg md:text-xl" />
        )}
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full right-6 md:right-12 mt-3 bg-white shadow-lg rounded-xl overflow-hidden w-48"
          >
            <ul className="flex flex-col divide-y divide-gray-200">
                  <motion.li
                    whileHover={{ backgroundColor: "#f9fafb" }}
                    className="px-4 py-3 text-sm cursor-pointer text-[#6A0DAD]"
                  >
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                  </motion.li>
                  <motion.li
                    whileHover={{ backgroundColor: "#f9fafb" }}
                    className="px-4 py-3 text-sm cursor-pointer text-[#6A0DAD]"
                  >
                    <Link to="about" smooth={true} duration={500}>About Me</Link>
                  </motion.li>
                  <motion.li
                    whileHover={{ backgroundColor: "#f9fafb" }}
                    className="px-4 py-3 text-sm cursor-pointer text-[#6A0DAD]"
                  >
                    <Link to="services" smooth={true} duration={500}>Services</Link>
                  </motion.li>
                  <motion.li
                    whileHover={{ backgroundColor: "#f9fafb" }}
                    className="px-4 py-3 text-sm cursor-pointer text-[#6A0DAD]"
                  >
                    <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
                  </motion.li>
                  <motion.li
                    whileHover={{ backgroundColor: "#f9fafb" }}
                    className="px-4 py-3 text-sm cursor-pointer text-[#6A0DAD]"
                  >
                    <Link to="faq" smooth={true} duration={500}>FAQ</Link>
                  </motion.li>
                  <motion.li
                    whileHover={{ backgroundColor: "#f9fafb" }}
                    className="px-4 py-3 text-sm cursor-pointer text-[#6A0DAD]"
                  >
                    <Link to="contact" smooth={true} duration={500}>Contact Me</Link>
                  </motion.li>
                  </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
