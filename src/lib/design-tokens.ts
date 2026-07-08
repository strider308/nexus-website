// Design Tokens & Color Mappings
// Maps each system ID to its respective custom theme styles.

export interface ProductTheme {
  primary: string;
  dark: string;
  bgLight: string;
  bgDark: string;
  textClass: string;
  bgClass: string;
  borderClass: string;
  statusDot: string;
}

export const PRODUCT_THEMES: Record<string, ProductTheme> = {
  clinicos: {
    primary: "#1A2B4C", // Navy
    dark: "#163870",
    bgLight: "bg-[#1A2B4C]",
    bgDark: "dark:bg-[#4A7BC4]",
    textClass: "text-[#1A2B4C] dark:text-[#4A7BC4]",
    bgClass: "bg-[#1A2B4C]/5 dark:bg-[#4A7BC4]/10",
    borderClass: "border-[#1A2B4C] dark:border-[#4A7BC4]",
    statusDot: "bg-[#3A8A4A]"
  },
  aarogya: {
    primary: "#5A7F5E", // Sage Green
    dark: "#3E6E4A",
    bgLight: "bg-[#5A7F5E]",
    bgDark: "dark:bg-[#6FA876]",
    textClass: "text-[#5A7F5E] dark:text-[#6FA876]",
    bgClass: "bg-[#5A7F5E]/5 dark:bg-[#6FA876]/10",
    borderClass: "border-[#5A7F5E] dark:border-[#6FA876]",
    statusDot: "bg-[#6B6B6B]"
  },
  restaurantos: {
    primary: "#A05C1A", // Warm Amber
    dark: "#7A3E10",
    bgLight: "bg-[#A05C1A]",
    bgDark: "dark:bg-[#C87B3A]",
    textClass: "text-[#A05C1A] dark:text-[#C87B3A]",
    bgClass: "bg-[#A05C1A]/5 dark:bg-[#C87B3A]/10",
    borderClass: "border-[#A05C1A] dark:border-[#C87B3A]",
    statusDot: "bg-[#E07A20]"
  },
  shipwright: {
    primary: "#5B4B8A", // Purple
    dark: "#483A6E",
    bgLight: "bg-[#5B4B8A]",
    bgDark: "dark:bg-[#8B7BC4]",
    textClass: "text-[#5B4B8A] dark:text-[#8B7BC4]",
    bgClass: "bg-[#5B4B8A]/5 dark:bg-[#8B7BC4]/10",
    borderClass: "border-[#5B4B8A] dark:border-[#8B7BC4]",
    statusDot: "bg-[#E07A20]"
  },
  securescan: {
    primary: "#2A7D8A", // Teal
    dark: "#1E5E6A",
    bgLight: "bg-[#2A7D8A]",
    bgDark: "dark:bg-[#3A9EAA]",
    textClass: "text-[#2A7D8A] dark:text-[#3A9EAA]",
    bgClass: "bg-[#2A7D8A]/5 dark:bg-[#3A9EAA]/10",
    borderClass: "border-[#2A7D8A] dark:border-[#3A9EAA]",
    statusDot: "bg-[#3A8A4A]"
  },
  safedate: {
    primary: "#8A2A5A", // Plum
    dark: "#6B1F46",
    bgLight: "bg-[#8A2A5A]",
    bgDark: "dark:bg-[#C44A7A]",
    textClass: "text-[#8A2A5A] dark:text-[#C44A7A]",
    bgClass: "bg-[#8A2A5A]/5 dark:bg-[#C44A7A]/10",
    borderClass: "border-[#8A2A5A] dark:border-[#C44A7A]",
    statusDot: "bg-[#3A8A4A]"
  },
  buildpublic: {
    primary: "#2A5A3A", // Forest Green
    dark: "#1E4A2C",
    bgLight: "bg-[#2A5A3A]",
    bgDark: "dark:bg-[#4A8A5A]",
    textClass: "text-[#2A5A3A] dark:text-[#4A8A5A]",
    bgClass: "bg-[#2A5A3A]/5 dark:bg-[#4A8A5A]/10",
    borderClass: "border-[#2A5A3A] dark:border-[#4A8A5A]",
    statusDot: "bg-[#3A8A4A]"
  }
};
