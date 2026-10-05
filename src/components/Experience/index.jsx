import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import SectionWrapper, { fadeUp } from "../Global/SectionWrapper";
import { TechList } from "../Global/TechChip";
import { experience } from "../../data/portfolio";

const Experience = () => (
  <SectionWrapper id="experience" index="02" heading="Where I've worked">
    <ol className="relative border-l border-slate-200 dark:border-slate-800">
      {experience.map((job) => (
        <motion.li {...fadeUp} key={job.company + job.period} className="relative ml-6 pb-4 md:ml-10">
          <span
            aria-hidden="true"
            className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-white bg-accent-500 ring-4 ring-accent-500/20 md:-left-[47px] dark:border-ink"
          />
          <div className="card p-6 md:p-8">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {job.role}{" "}
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent-700 hover:underline dark:text-accent-400"
                  >
                    @ {job.company}
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                </h3>
                <p className="mt-1 text-sm text-slate-500">{job.location}</p>
              </div>
              <p className="font-mono text-sm text-slate-500 dark:text-slate-400">{job.period}</p>
            </div>

            <ul className="mt-6 space-y-3">
              {job.highlights.map((point) => (
                <li key={point.slice(0, 32)} className="flex gap-3 text-sm leading-relaxed text-slate-700 md:text-base dark:text-slate-300">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  {point}
                </li>
              ))}
            </ul>

            <TechList items={job.tech} className="mt-6" />
          </div>
        </motion.li>
      ))}
    </ol>
  </SectionWrapper>
);

export default Experience;
