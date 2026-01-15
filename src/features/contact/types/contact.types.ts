export interface ContactLink {
  label: string;
  href: string;
  iconName: "Mail" | "Linkedin" | "Phone" | "Whatsapp";
}

export interface ContactData {
  title: string;
  subtitle: string;
  description: string;
  links: ContactLink[];
}
