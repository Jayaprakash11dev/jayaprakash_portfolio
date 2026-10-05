import { motion } from "framer-motion";
import { ServerStackIcon, WindowIcon } from "@heroicons/react/24/outline";
import SectionWrapper, { fadeUp } from "../Global/SectionWrapper";
import { TechList } from "../Global/TechChip";
import { skills } from "../../data/portfolio";

// The first two groups (Frontend, Backend) are the headline cards.
const headlineIcons = [WindowIcon, ServerStackIcon];

const SkillCard = ({ group, items, icon: Icon }) => (
  <motion.div {...fadeUp} className="card h-full p-6">
    <h3 className="mb-4 flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
      {Icon && <Icon className="h-5 w-5 text-accent-600 dark:text-accent-400" />}
      {group}
    </h3>
    <TechList items={items} />
  </motion.div>
);

const Skills = () => {
  const headline = skills.slice(0, 2);
  const rest = skills.slice(2);

  return (
    <SectionWrapper
      id="skills"
      index="04"
      heading="Tools of the trade"
      subheading="Equally at home in the browser and on the server, with the DevOps skills to ship it."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {headline.map((s, i) => (
          <SkillCard key={s.group} {...s} icon={headlineIcons[i]} />
        ))}
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((s) => (
          <SkillCard key={s.group} {...s} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
