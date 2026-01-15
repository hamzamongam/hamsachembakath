export interface EducationItem {
  institution: string;
  qualification: string;
  period: string;
  description: string;
}

export interface EducationData {
  title: string;
  subtitle: string;
  description: string;
  items: EducationItem[];
}
