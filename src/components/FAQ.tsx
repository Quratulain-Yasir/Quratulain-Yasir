import { useState } from "react";
import { CircleArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  

  const faqs = [
    {
      q: "What will my website cost?",
      a: "Pricing depends on features (pages, e-commerce, booking, custom integrations). After a quick discovery call, I provide a detailed proposal with transparent cost breakdown so you know exactly where your money goes."
    },
    {
      q: "How long will it take to launch?",
      a: "A standard business site (5–7 pages) usually takes 2–4 weeks, depending on revisions and content readiness. Bigger projects (like e-commerce) can take 6–8 weeks. I set clear milestones so you can track progress."
    },
    {
      q: "Will my site be SEO-ready & mobile-friendly?",
      a: "Yes. Every site I build is responsive (works on all devices) and SEO-optimized with clean code, fast loading speed, and metadata setup — so it can start ranking on Google from day one."
    },
    {
      q: "Who owns the website & content after delivery?",
      a: "100% you. You’ll get full access to domain, hosting, source code, images, and content. I never lock clients into dependency — you’re the complete owner."
    },
    {
      q: "Can you show me past work / portfolio?",
      a: "Absolutely. I share live project links relevant to your industry so you can see both design style and technical capability before we begin."
    }
  ];

  return (
    <section
      id="faq"
      className="max-w-7xl mx-auto sm:px-12 px-4 py-12"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="text-4xl sm:text-5xl font-bold text-[#6A0DAD] mb-13 text-center font-four"
      >
        Frequently Asked <br /> Questions
      </h2>

      <dl className="space-y-6 sm:px-10 px-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b pb-4">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full cursor-pointer sm:text-2xl text-xl font-medium text-[#2E035F] flex justify-between items-start focus:outline-none"
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
