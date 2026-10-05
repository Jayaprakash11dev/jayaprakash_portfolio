import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import useDarkMode from "../../hooks/useDarkMode";
import Button from "../Global/Button";
import Logo, { LogoMark } from "../Global/Logo";
import { navLinks, profile } from "../../data/portfolio";

const ThemeToggle = ({ isDark, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-ink-raised dark:hover:text-white"
  >
    {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
  </button>
);

export default function NavBar() {
  const [isDark, setIsDark] = useDarkMode();
  const toggleTheme = () => setIsDark(!isDark);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Popover
      as="header"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-ink/80"
          : "border-b border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-accent-700 dark:text-slate-400 dark:hover:text-accent-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <Button href={profile.resume} variant="outline" size="sm" download>
            <ArrowDownTrayIcon className="h-4 w-4" />
            Resume
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <Popover.Button className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-ink-raised">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 p-3 md:hidden">
          {({ close }) => (
            <div className="card bg-white p-5 shadow-xl dark:bg-ink-surface">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2.5 font-semibold text-slate-900 dark:text-white">
                  <LogoMark className="h-7 w-7" />
                  Menu
                </span>
                <Popover.Button className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-ink-raised">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <nav className="mt-4 grid gap-1" aria-label="Mobile">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => close()}
                    className="rounded-lg px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-ink-raised"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <Button href={profile.resume} className="mt-4 w-full" download>
                <ArrowDownTrayIcon className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
