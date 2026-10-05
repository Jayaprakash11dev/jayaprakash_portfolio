import { motion } from "framer-motion";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import SectionWrapper, { fadeUp } from "../Global/SectionWrapper";
import { GithubIcon, LinkedinIcon } from "../Global/Icons";
import ContactForm from "./Form";
import { profile } from "../../data/portfolio";

const channels = [
  { icon: EnvelopeIcon, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: LinkedinIcon, label: "LinkedIn", value: "in/jayaprakash-m-dev", href: profile.socials.linkedin, external: true },
  { icon: GithubIcon, label: "GitHub", value: "Jayaprakash11dev", href: profile.socials.github, external: true },
  { icon: MapPinIcon, label: "Location", value: `${profile.location} · open to relocation` },
];

const Contact = () => (
  <SectionWrapper
    id="contact"
    index="06"
    heading="Let's build something reliable"
    subheading="I'm open to full-stack roles, on-site, hybrid or remote. If you're hiring, or just want to talk about React, APIs or databases, my inbox is open."
  >
    <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
      <motion.ul {...fadeUp} className="space-y-4">
        {channels.map(({ icon: Icon, label, value, href, external }) => {
          const content = (
            <>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-700 dark:bg-accent-400/10 dark:text-accent-300">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-slate-500">{label}</span>
                <span className="block break-all text-sm font-medium text-slate-900 dark:text-white">{value}</span>
              </span>
            </>
          );
          return (
            <li key={label}>
              {href ? (
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="card flex items-center gap-4 p-4 transition-colors hover:border-accent-500/60 dark:hover:border-accent-400/50"
                >
                  {content}
                </a>
              ) : (
                <div className="card flex items-center gap-4 p-4">{content}</div>
              )}
            </li>
          );
        })}
      </motion.ul>

      <motion.div {...fadeUp}>
        <ContactForm />
      </motion.div>
    </div>
  </SectionWrapper>
);

export default Contact;
