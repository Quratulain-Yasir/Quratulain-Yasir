import { motion } from "framer-motion";

const ContactInfo = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    }),
  };
  return (
    //  {/* Contact Info */}
    <section>
      <motion.div
        className="md:w-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.15}
        variants={{ hidden: fadeUp.hidden, visible : fadeUp.visible(0.15) }}
      >
        <div className="bg-white rounded-lg p-8 shadow-md h-full">
          <h3 className="text-2xl font-bold text-[#6D4C41] mb-6">
            Contact Information
          </h3>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start">
              <div
                className="bg-[#D35400] bg-opacity-10 p-3 rounded-full mr-4 flex-shrink-0"
                aria-hidden="true"
              >
                {/* Mail Icon */}
                <svg
                  className="w-6 h-6 text-[#D35400]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-[#6D4C41]">Email</h4>
                <a
                  href="mailto:hello@autumnwhispers.com"
                  className="text-gray-600 hover:underline"
                >
                  hello@autumnwhispers.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <div
                className="bg-[#D35400] bg-opacity-10 p-3 rounded-full mr-4 flex-shrink-0"
                aria-hidden="true"
              >
                {/* Phone Icon */}
                <svg
                  className="w-6 h-6 text-[#D35400]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-[#6D4C41]">Phone</h4>
                <a
                  href="tel:+15551234567"
                  className="text-gray-600 hover:underline"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start">
              <div
                className="bg-[#D35400] bg-opacity-10 p-3 rounded-full mr-4 flex-shrink-0"
                aria-hidden="true"
              >
                {/* Location Icon */}
                <svg
                  className="w-6 h-6 text-[#D35400]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-[#6D4C41]">Location</h4>
                <p className="text-gray-600">
                  123 Autumn Lane, Maple Valley, VT 05478
                </p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="mt-8">
            <h4 className="font-medium text-[#6D4C41] mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Visit our Facebook"
                className="social-icon text-[#D35400] hover:text-[#C0392B]"
              >
                {/* Facebook */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Visit our Instagram"
                className="social-icon text-[#D35400] hover:text-[#C0392B]"
              >
                {/* Instagram */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Visit our Twitter"
                className="social-icon text-[#D35400] hover:text-[#C0392B]"
              >
                {/* Twitter */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Visit our Dribbble"
                className="social-icon text-[#D35400] hover:text-[#C0392B]"
              >
                {/* Dribbble */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M9.04,21.54C10,21.83 10.97,22 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12C2,16.25 4.67,19.9 8.44,21.34C8.35,20.56 8.26,19.27 8.44,18.38L9.59,13.44C9.59,13.44 9.3,12.86 9.3,11.94C9.3,10.56 10.16,9.53 11.14,9.53C12,9.53 12.4,10.16 12.4,10.97C12.4,11.83 11.83,13.06 11.54,14.24C11.37,15.22 12.06,16.08 13.06,16.08C14.84,16.08 16.22,14.18 16.22,11.5C16.22,9.1 14.5,7.46 12.03,7.46C9.21,7.46 7.55,9.56 7.55,11.77C7.55,12.63 7.83,13.5 8.29,14.07C8.38,14.13 8.38,14.21 8.35,14.36L8.06,15.45C8.06,15.62 7.95,15.68 7.78,15.56C6.59,15 5.96,13.3 5.96,11.96C5.96,8.87 8.07,6 12.35,6C15.83,6 18.13,8.43 18.13,11.38C18.13,14.79 16.19,17.5 13.23,17.5C12.23,17.5 11.26,16.97 10.92,16.37L10.18,18.5C9.85,19.73 9.33,20.73 8.85,21.54H9.04Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactInfo;
