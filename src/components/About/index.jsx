import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import SectionWrapper, { fadeUp } from "../Global/SectionWrapper";
import images from "../../constants/image";
import { about } from "../../data/portfolio";

const About = () => (
  <SectionWrapper id="about" index="01" heading="From database schema to polished UI">
    <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
      <motion.div {...fadeUp}>
        {about.paragraphs.map((p) => (
          <p key={p.slice(0, 24)} className="mb-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {p}
          </p>
        ))}

        <h3 className="mt-8 mb-4 font-semibold text-slate-900 dark:text-white">What I'm focused on</h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {about.focus.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
              <CheckCircleIcon className="h-5 w-5 shrink-0 text-accent-600 dark:text-accent-400" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div {...fadeUp} className="relative mx-auto w-full max-w-sm self-start">
        <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-2xl md:translate-x-4 md:translate-y-4 border-2 border-accent-500/60" aria-hidden="true" />
        <img
          src={images.profilePhoto}
          alt="Portrait of Jayaprakash M"
          width={640}
          height={800}
          loading="lazy"
          className="relative aspect-[4/5] w-full rounded-2xl object-cover object-top"
        />
      </motion.div>
    </div>
  </SectionWrapper>
);

export default About;
