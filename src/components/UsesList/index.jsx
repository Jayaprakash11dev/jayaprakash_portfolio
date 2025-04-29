import { motion } from "framer-motion";
import { ExternalLinkIcon } from "@heroicons/react/solid";
const usesData = [
  {
    section: "Hardware",
    items: [
      {
        name: "Keyboard - Dell Pro Plus Keyboard - KB700",
        link: "https://www.dell.com/en-in/shop/dell-pro-plus-keyboard-kb700-us-international/apd/580-akrq/pc-accessories?tfcid=30223580&gacd=10415953-9018-5761040-285934065-0&dgc=PLA&&gad_source=1&gbraid=0AAAAACFBcEcCZclqzXBGh8p8ftJcF7P9a&gclid=CjwKCAjwwqfABhBcEiwAZJjC3q7-BSFEEDlU9YSkRBat2kQhXQD6BwdJXOhUV7L6ta1M3YKdpg1m1hoCwroQAvD_BwE&gclsrc=aw.ds",
      },
      {
        name: "Laptop - ASUS ExpertBook",
        link: "https://www.apple.com/ph/shop/buy-mac/macbook-air/13-inch-m2",
      },
      {
        name: "Mouse - Dell wireless-mouse-ms7421w",
        link: "https://www.dell.com/en-in/shop/dell-premier-rechargeable-wireless-mouse-ms7421w/apd/580-ajog/pc-accessories?tfcid=30223580&srsltid=AfmBOopBTwOhVsHJmFYtRxfD_dZR51ugvK1azBskGdV8hKDtU0qjFP2-VNg",
      },
      {
        name: 'Monitor - Msi (27")',
      },
      {
        name: "Intel i5-1235U, 8GB RAM , 512GB SSD Pop!_OS"

      },
    ],
  },
  {
    section: "Editor",
    items: [
      {
        name: "Visual Studio Code",
        link: "https://code.visualstudio.com/download",
      },
      { name: "Font - MonoLisa", link: "https://www.monolisa.dev/" },
    ],
  },
  {
    section: "Terminal",
    items: [
      {
        name: "konsole",
        link: "https://konsole.kde.org/",
      },
      { name: "Oh My zsh", link: "https://ohmyz.sh/" }
    ],
  },
  {
    section: "Other Software",
    items: [
      { name: "Slack", link: "https://slack.com/" },
      { name: "Discord", link: "https://discord.com/" },
      { name: "Figma", link: "https://www.figma.com/" },
    ],
  },
];

const UsesList = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "linear", duration: 0.5 }}
      className="container relative"
    >
      <div className="flex flex-col items-start">
        {usesData.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-bold text-primary mb-4 dark:text-white">
              {section.section}
            </h2>
            <ul>
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className="list-inside list-disc leading-loose text-neutral-700 dark:text-neutral-300"
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                    {item.link && (
                      <span className="ml-1 inline-flex align-middle">
                        <ExternalLinkIcon className="h-5 w-5" />
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default UsesList;
