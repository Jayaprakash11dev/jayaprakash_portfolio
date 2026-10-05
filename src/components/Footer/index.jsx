import { GithubIcon, LinkedinIcon } from "../Global/Icons";
import { profile } from "../../data/portfolio";

const Footer = () => (
  <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
    <div className="container flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS & Vite.
      </p>
      <div className="flex items-center gap-5">
        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent-600 dark:hover:text-accent-300">
          <GithubIcon />
        </a>
        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent-600 dark:hover:text-accent-300">
          <LinkedinIcon />
        </a>
        <a href={`mailto:${profile.email}`} className="hover:text-accent-600 dark:hover:text-accent-300">
          {profile.email}
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
