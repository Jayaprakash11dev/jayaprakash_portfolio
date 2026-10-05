import { motion } from "framer-motion";
import { ArrowDownTrayIcon, ArrowRightIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Button from "../Global/Button";
import { GithubIcon, LinkedinIcon } from "../Global/Icons";
import { profile } from "../../data/portfolio";

const punct = "text-slate-300";
const str = "text-amber-300";

// Builds a syntax-highlighted `  key: [...]` or `  key: "..."` line for the code card.
const prop = (key, value) => {
  const tokens = [{ t: `  ${key}: `, c: punct }];
  if (Array.isArray(value)) {
    tokens.push({ t: "[", c: punct });
    value.forEach((v, i) => {
      tokens.push({ t: `"${v}"`, c: str });
      if (i < value.length - 1) tokens.push({ t: ", ", c: punct });
    });
    tokens.push({ t: "],", c: punct });
  } else if (typeof value === "boolean") {
    tokens.push({ t: String(value), c: "text-accent-300" }, { t: ",", c: punct });
  } else {
    tokens.push({ t: `"${value}"`, c: str }, { t: ",", c: punct });
  }
  return tokens;
};

const codeLines = [
  [{ t: "// developer.ts", c: "text-slate-500" }],
  [
    { t: "const ", c: "text-violet-400" },
    { t: "jayaprakash", c: "text-sky-300" },
    { t: " = {", c: punct },
  ],
  prop("role", "Full Stack Developer"),
  prop("experience", "3 years"),
  prop("frontend", ["React", "Next.js", "TypeScript"]),
  prop("backend", ["Node.js", "NestJS", "PostgreSQL"]),
  prop("cloud", ["AWS", "Docker"]),
  prop("ships", "end-to-end features"),
  prop("openToWork", true),
  [{ t: "};", c: punct }],
];

const Hero = () => (
  <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
    />
    <div className="container relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-600/30 bg-accent-50 px-3 py-1 text-xs font-medium text-accent-800 dark:border-accent-400/30 dark:bg-accent-400/10 dark:text-accent-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
          </span>
          {profile.availability}
        </p>

        <p className="eyebrow mb-3">Hi, I'm</p>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
          {profile.name}
        </h1>
        <p className="mt-3 text-2xl font-semibold text-slate-500 sm:text-3xl dark:text-slate-400">
          {profile.title}. <span className="text-slate-900 dark:text-slate-200">{profile.headline}</span>
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">{profile.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#projects">
            View my work <ArrowRightIcon className="h-4 w-4" />
          </Button>
          <Button href={profile.resume} variant="outline" download>
            <ArrowDownTrayIcon className="h-4 w-4" /> Download resume
          </Button>
        </div>

        <div className="mt-8 flex items-center gap-5 text-slate-500 dark:text-slate-400">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="transition-colors hover:text-accent-600 dark:hover:text-accent-300"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="transition-colors hover:text-accent-600 dark:hover:text-accent-300"
          >
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <span className="flex items-center gap-1.5 text-sm">
            <MapPinIcon className="h-4 w-4" /> {profile.location}
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="hidden overflow-hidden rounded-2xl border border-slate-800 bg-[#0D1320] shadow-2xl shadow-accent-900/20 sm:block"
        aria-hidden="true"
      >
        <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-slate-500">developer.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
          {codeLines.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-5 w-4 select-none text-right text-slate-600">{i + 1}</span>
              <code>
                {line.map((tok, j) => (
                  <span key={j} className={tok.c}>
                    {tok.t}
                  </span>
                ))}
              </code>
            </div>
          ))}
        </pre>
      </motion.div>
    </div>
  </section>
);

export default Hero;
