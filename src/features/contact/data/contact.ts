import type { ContactData } from "../types/contact.types";

export const contactData: ContactData = {
  title: "Get in Touch",
  subtitle: "Contact",
  description:
    "Always open to discussing new opportunities, interesting collaborations, or just having a chat about tech. Drop me a line!",
  links: [
    {
      label: "Email Me",
      href: "mailto:hamsa.mongam@gmail.com",
      iconName: "Mail",
    },
    {
      label: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/hamsa-c-671569190/",
      iconName: "Linkedin",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/919562191932",
      iconName: "Whatsapp",
    },
    {
      label: "Call Me",
      href: "tel:+919562191932",
      iconName: "Phone",
    },
  ],
};
