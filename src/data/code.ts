import description from "@/assets/files/01-description.txt?raw";
import solution from "@/assets/files/01-solution.txt?raw";
import test from "@/assets/files/01-test.txt?raw";
import type { CodeLanguage } from "astro";
import type { BuiltinTheme } from "shiki";

export { CODE_SNIPPETS, type CodeSnippet };

const DEFAULT_CODE_THEME = "dracula";

interface CodeSnippet {
  name: string;
  code: string;
  lang: CodeLanguage;
  theme: BuiltinTheme;
}

const CODE_SNIPPETS: CodeSnippet[] = [
  {
    name: "01/01.ts",
    code: solution,
    lang: "typescript",
    theme: DEFAULT_CODE_THEME,
  },
  {
    name: "01/01.md",
    code: description,
    lang: "markdown",
    theme: DEFAULT_CODE_THEME,
  },
  {
    name: "01/01.spec.ts",
    code: test,
    lang: "typescript",
    theme: DEFAULT_CODE_THEME,
  },
] as const;
