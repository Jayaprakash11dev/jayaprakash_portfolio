import { motion } from "framer-motion";
import { fadeUp } from "../Global/SectionWrapper";
import { stats } from "../../data/portfolio";

const Stats = () => (
  <section aria-label="Highlights" className="border-y border-slate-200 bg-slate-50/60 dark:border-slate-800 dark:bg-ink-surface/40">
    <motion.dl {...fadeUp} className="container grid grid-cols-2 gap-y-8 py-10 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <dt className="sr-only">{stat.label}</dt>
          <dd className="font-mono text-3xl font-semibold text-slate-900 md:text-4xl dark:text-white">
            {stat.value}
          </dd>
          <dd className="mt-1 text-sm text-slate-600 dark:text-slate-400">{stat.label}</dd>
        </div>
      ))}
    </motion.dl>
  </section>
);

export default Stats;
