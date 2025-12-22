export interface ContactInfo {
  iconName: "Phone" | "Mail";
  label: string;
  value: string;
  href?: string;
}

export interface SocialLink {
  iconName: "Github" | "BookOpen" | "Mail";
  label: string;
  href: string;
  color: string;
}

export const email = "ertr777@naver.com";

export const contactInfo: ContactInfo[] = [
  {
    iconName: "Phone",
    label: "Phone",
    value: "010-6692-2351",
    href: "tel:010-6692-2351",
  },
  {
    iconName: "Mail",
    label: "Email",
    value: email,
    href: `mailto:${email}`,
  },
];

export const socialLinks: SocialLink[] = [
  {
    iconName: "Github",
    label: "GitHub",
    href: "https://github.com/puremax77",
    color: "hover:bg-gray-800 dark:hover:bg-gray-700",
  },
  {
    iconName: "BookOpen",
    label: "Blog",
    href: "https://puremax77.tistory.com",
    color: "hover:bg-orange-600",
  },
];

