import { motion } from "framer-motion";
import { AcademicCapIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import SectionWrapper, { fadeUp } from "../Global/SectionWrapper";
import { education, certifications } from "../../data/portfolio";

const Item = ({ icon: Icon, label, title, sub, period, detail }) => (
  <motion.div {...fadeUp} className="card flex gap-5 p-6">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-700 dark:bg-accent-400/10 dark:text-accent-300">
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <p className="eyebrow text-xs">{label}</p>
      <h3 className="mt-1 font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400">{sub}</p>
      <p className="mt-2 font-mono text-xs text-slate-500">
        {period}
        {detail && ` · ${detail}`}
      </p>
    </div>
  </motion.div>
);

const Education = () => (
  <SectionWrapper id="education" index="05" heading="Education & certifications">
    <div className="grid gap-5 md:grid-cols-2">
      {education.map((e) => (
        <Item key={e.school} icon={AcademicCapIcon} label="Education" title={e.degree} sub={e.school} period={e.period} detail={e.detail} />
      ))}
      {certifications.map((c) => (
        <Item key={c.title} icon={CheckBadgeIcon} label="Certification" title={c.title} sub={c.issuer} period={c.period} />
      ))}
    </div>
  </SectionWrapper>
);

export default Education;
