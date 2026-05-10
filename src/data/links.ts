import githubIcon from "@/assets/icons/github.svg";
import npmIcon from "@/assets/icons/npm.svg";
import amIcon from "@/assets/images/logoAM.webp";
import adventJsIcon from "@/assets/images/adventjs.webp";

export { type Link, LINKS };

interface Link {
  name: string;
  url: string;
  icon: ImageMetadata;
}

const LINKS = [
  {
    name: "Npm",
    url: "https://www.npmjs.com/package/adventjs-cli",
    icon: npmIcon,
  },
  {
    name: "Repo",
    url: "https://github.com/AntonioMrtz/adventjs-cli",
    icon: githubIcon,
  },
  {
    name: "AdventJS",
    url: "https://adventjs.dev/",
    icon: adventJsIcon,
  },
  {
    name: "AntonioMrtz",
    url: "https://antoniomrtz.github.io/Portfolio/",
    icon: amIcon,
  },
];
