
import { useForm } from "react-hook-form"; 
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import { useRef } from "react";
import emailjs from "@emailjs/browser";


type ContactFormInputs = {
  name:string;
  email:string;
  message:string;
}




export default function ContactForm() {
    // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>();

const form = useRef<HTMLFormElement | null>(null);

 const sendEmail = async ( _data: ContactFormInputs ) => {
    if (!form.current) return;

    try {
      await emailjs.sendForm(
         import.meta.env.VITE_EMAIL_SERVICE_ID,     // replace
         import.meta.env.VITE_EMAIL_TEMPLATE_ID,    // replace
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY      // replace
        
      );

      toast.success('Message sent')
      reset();
    } catch (error) {
      console.error(error); 
      toast.error(error);
    }
  };



 

  return (
 <section id="contact" className="w-full lg:w-1/2 flex">
 
<div className="w-full h-full">
  <motion.form
      ref={form}
  onSubmit={handleSubmit(sendEmail)}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    viewport={{ once: true }}
    className="rounded-lg p-8 shadow-lg hover:shadow-purple-800 focus:shadow-purple-800 active:shadow-purple-800 flex flex-col justify-between h-full bg-[#362072] transition-all duration-300 ease-in-out hover:scale-105 "
  >
            {/* Name */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="name"
                className="block text-white font-medium mb-2"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })} name="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-white"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </motion.div>

            {/* Email */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="email"
                className="block text-white font-medium mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                    message: "Invalid email address",
                  },
                })} name="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-white"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </motion.div>

            {/* Message */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="message"
                className="block text-white font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message", { required: "Message is required" })} name="message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-white"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </motion.div>

            {/* Submit button with tap animation */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 rounded-lg font-medium bg-[#2E035F] text-[#2E035F] bg-white  hover:scale-x-105 active:scale-x-105 duration-300 ease-in-out transition shadow-lg"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div> 

 
 </section>
  );
}
