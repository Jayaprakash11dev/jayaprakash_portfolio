const variants = {
  primary:
    "bg-accent-500 text-ink hover:bg-accent-400 dark:bg-accent-400 dark:hover:bg-accent-300",
  outline:
    "border border-slate-300 text-slate-900 hover:border-accent-500 hover:text-accent-700 dark:border-slate-700 dark:text-white dark:hover:border-accent-400 dark:hover:text-accent-300",
  ghost:
    "text-slate-700 hover:text-accent-700 dark:text-slate-300 dark:hover:text-accent-300",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
};

// Renders an <a> when given href, otherwise a <button>.
const Button = ({ href, variant = "primary", size = "md", className = "", external, children, ...props }) => {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a href={href} className={classes} {...externalProps} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
