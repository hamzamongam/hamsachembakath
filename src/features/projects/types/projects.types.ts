export interface ProjectItem {
  title: string;
  description: string;
  role: string;
  outcomes: string[];
  tags: string[];
  links: {
    demo: string;
    github?: string;
  };
}

export interface ProjectsData {
  title: string;
  subtitle: string;
  description: string;
  items: ProjectItem[];
}
