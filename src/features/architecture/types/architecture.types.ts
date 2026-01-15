export interface ArchitectureItem {
  title: string;
  description: string;
  className?: string; // For layout control
}

export interface ArchitectureData {
  title: string;
  subtitle: string;
  description: string;
  items: ArchitectureItem[];
}
