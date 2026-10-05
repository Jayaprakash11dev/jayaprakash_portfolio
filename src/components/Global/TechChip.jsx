const TechChip = ({ children }) => (
  <li className="rounded-full border border-accent-600/20 bg-accent-50 px-3 py-1 font-mono text-xs text-accent-800 dark:border-accent-400/20 dark:bg-accent-400/10 dark:text-accent-300">
    {children}
  </li>
);

export const TechList = ({ items, className = "" }) => (
  <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Technologies">
    {items.map((item) => (
      <TechChip key={item}>{item}</TechChip>
    ))}
  </ul>
);

export default TechChip;
