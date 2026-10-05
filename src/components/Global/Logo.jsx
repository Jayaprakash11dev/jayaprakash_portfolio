import { useId } from "react";
import { profile } from "../../data/portfolio";

// Geometric "JM" monogram on a teal gradient tile. Mirrors public/favicon.svg.
export const LogoMark = ({ className = "h-9 w-9" }) => {
  const gradientId = useId();

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2DD4BF" />
          <stop offset="1" stopColor="#0D9488" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill={`url(#${gradientId})`} />
      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="none" stroke="#fff" strokeOpacity="0.2" />
      <path
        d="M6.5 8.5h7v11.5a3.5 3.5 0 0 1-7 0M17.5 23.5v-15l4 6 4-6v15"
        fill="none"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Logo = () => (
  <a href="#home" aria-label={`${profile.name}, home`} className="group flex items-center gap-3">
    <LogoMark className="h-9 w-9 shadow-lg shadow-accent-500/20 rounded-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 motion-reduce:transform-none" />
    <span className="flex flex-col leading-tight">
      <span className="text-[15px] font-semibold tracking-tight text-slate-900 dark:text-white">{profile.name}</span>
      <span className="hidden font-mono text-[11px] lowercase text-slate-500 sm:block dark:text-slate-400">{profile.title}</span>
    </span>
  </a>
);

export default Logo;
