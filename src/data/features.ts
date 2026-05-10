import vitestLogo from "@/assets/icons/vitest.svg";
import prettierLogo from "@/assets/icons/prettier.svg";
import eslintLogo from "@/assets/icons/eslint.svg";
import debugLogo from "@/assets/icons/debug.svg";
import githubActionsLogo from "@/assets/icons/github-actions.svg";

export { FEATURES, type Feature };

interface Feature {
  name: string;
  description: string;
  icon: ImageMetadata;
}

const FEATURES = [
  {
    name: "Testing",
    description:
      "Out of the box test configuration and auto-generated test files.",
    icon: vitestLogo,
  },
  {
    name: "Debugging support",
    description: "Built-in debugging capabilities for easy troubleshooting.",
    icon: debugLogo,
  },
  {
    name: "Prettier integration",
    description: "Automatic code formatting with Prettier.",
    icon: prettierLogo,
  },
  {
    name: "ESLint integration",
    description: "Built-in linting support with ESLint.",
    icon: eslintLogo,
  },
  {
    name: "Github Actions",
    description: "Pre-configured CI/CD pipelines for seamless integration.",
    icon: githubActionsLogo,
  },
] as const;
