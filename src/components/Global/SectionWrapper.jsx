import { motion } from "framer-motion";

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

const SectionWrapper = ({ id, index, heading, subheading, className = "", children }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="container">
      <motion.header {...fadeUp} className="mb-12 max-w-2xl">
        <p className="eyebrow mb-3">
          {index && <span className="mr-2">{index}.</span>}
          {id}
        </p>
        <h2 className="heading">{heading}</h2>
        {subheading && <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">{subheading}</p>}
      </motion.header>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
