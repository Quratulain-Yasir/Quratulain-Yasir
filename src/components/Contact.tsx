
import { motion , easeInOut } from "framer-motion";
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
    const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeInOut, delay },
  }),
};

  return (
    <section
      id="contact"
      className="py-16"
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
            className="text-4xl sm:text-5xl font-two font-bold text-[#6A0DAD] mb-4"
          >
            Get In Touch
          </h2>
          <p className="inline-block text-gray-900 font-three items-center max-w-2xl mx-auto text-md sm:text-xl ">
            Have a question or want to discuss your project?
          </p>
        </motion.div>
</div>

<div className='flex flex-col lg:flex-row gap-10 px-7'>
  <ContactForm />
  <ContactInfo />
</div>
    </section>
  )
}

export default Contact