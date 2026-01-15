export interface HeroAction {
  label: string;
  href: string;
  primary?: boolean;
}

export interface TechStackItem {
  name: string;
  iconName:
    | "React"
    | "NextJS"
    | "TypeScript"
    | "Tailwind"
    | "Vite"
    | "TanStack"
    | "NodeJS"
    | "Docker"
    | "Git"; // Constraining to known icons
}

export interface HeroData {
  badge: string;
  headline: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  subheadline: string;
  actions: HeroAction[];
  techStack: {
    title: string;
    items: TechStackItem[];
  };
}
