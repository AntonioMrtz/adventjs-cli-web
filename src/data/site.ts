import logoIcon from "@/assets/images/adventjs-cli.webp";

export { SITE_INFO };

const SITE_INFO = {
  name: "adventjs-cli",
  title:
    "adventjs-cli -- The all-in-one command-line tool for AdventJS challenges",
  tagline: "The all-in-one command-line tool for AdventJS challenges",
  description:
    "Save hours of repetitive setup with a single command and focus on solving, not configuring.",
  midudev: {
    handle: "@midudev",
    url: "https://github.com/midudev",
  },
  logo: logoIcon,
  initCommand: {
    command: "npx adventjs-cli init",
    description: "Interactive project setup.",
  },
  generateDayCommand: {
    command: "npx adventjs-cli generate 1",
    description: "Generate boilerplate for a specific day.",
  },
};
