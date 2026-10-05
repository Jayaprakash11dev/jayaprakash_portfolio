import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { fadeUp } from "../Global/SectionWrapper";
import { moreProjects } from "../../data/portfolio";

const ProjectGrid = () => (
  <div className="mt-20">
    <motion.h3 {...fadeUp} className="text-xl font-semibold text-slate-900 dark:text-white">
      More production work
    </motion.h3>
    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Earlier client projects across healthcare, education and hospitality.</p>

    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {moreProjects.map((project) => (
        <motion.a
          {...fadeUp}
          key={project.name}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="card group flex flex-col overflow-hidden transition-colors hover:border-accent-500/60 dark:hover:border-accent-400/50"
        >
          <div className="aspect-[16/9] overflow-hidden border-b border-slate-200 dark:border-slate-800">
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h4 className="flex items-center justify-between font-semibold text-slate-900 dark:text-white">
              {project.name}
              <ArrowUpRightIcon className="h-4 w-4 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-500" />
            </h4>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>
            <p className="mt-4 font-mono text-xs text-slate-500">{project.tech.join(" · ")}</p>
          </div>
        </motion.a>
      ))}
    </div>
  </div>
);

export default ProjectGrid;
