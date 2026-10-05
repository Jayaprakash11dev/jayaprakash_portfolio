import { motion } from "framer-motion";
import { ArrowUpRightIcon, ServerStackIcon, WindowIcon } from "@heroicons/react/24/outline";
import SectionWrapper, { fadeUp } from "../Global/SectionWrapper";
import { TechList } from "../Global/TechChip";
import Button from "../Global/Button";
import ProjectGrid from "../ProjectGrid";
import { featuredProjects } from "../../data/portfolio";

const Metrics = ({ items }) => (
  <dl className="mt-6 grid max-w-md grid-cols-3 gap-3 border-y border-slate-200 py-4 dark:border-slate-800">
    {items.map((m) => (
      <div key={m.label}>
        <dt className="sr-only">{m.label}</dt>
        <dd className="font-mono text-2xl font-semibold text-slate-900 dark:text-white">{m.value}</dd>
        <dd className="text-xs text-slate-500 dark:text-slate-400">{m.label}</dd>
      </div>
    ))}
  </dl>
);

const HighlightGroup = ({ icon: Icon, label, items }) => (
  <div className="rounded-xl border border-slate-200 bg-white/60 p-5 dark:border-slate-800 dark:bg-ink/40">
    <h4 className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
      <Icon className="h-4 w-4 text-accent-600 dark:text-accent-400" />
      {label}
    </h4>
    <ul className="space-y-2.5">
      {items.map((h) => (
        <li key={h.slice(0, 32)} className="flex gap-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <span aria-hidden="true" className="mt-0.5 font-mono text-accent-600 dark:text-accent-400">▹</span>
          {h}
        </li>
      ))}
    </ul>
  </div>
);

const FeaturedProjects = () => (
  <SectionWrapper
    id="projects"
    index="03"
    heading="Things I've built"
    subheading="Selected products I've built end to end, from the UI to the API and database. The code is private client work, but you can see them live."
  >
    <div className="space-y-10">
      {featuredProjects.map((project, idx) => (
        <motion.article
          {...fadeUp}
          key={project.name}
          className="card p-6 md:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
              <p className="eyebrow">Featured · {project.period}</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{project.name}</h3>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{project.subtitle}</p>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">{project.summary}</p>
  
              {project.metrics && <Metrics items={project.metrics} />}

              <TechList items={project.tech} className="mt-6" />
  
              {project.link && (
                <Button href={project.link} external variant="outline" size="sm" className="mt-6">
                  Live demo <ArrowUpRightIcon className="h-4 w-4" />
                </Button>
              )}
            </div>
  
            <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
                <img
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  loading="lazy"
                  className="w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <HighlightGroup icon={WindowIcon} label="Frontend" items={project.frontend} />
            <HighlightGroup icon={ServerStackIcon} label="Backend" items={project.backend} />
          </div>
        </motion.article>
      ))}
    </div>

    <ProjectGrid />
  </SectionWrapper>
);

export default FeaturedProjects;
