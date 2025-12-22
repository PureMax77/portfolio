export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: "홈", href: "#hero" },
  { name: "소개", href: "#about" },
  { name: "프로젝트", href: "#projects" },
  { name: "연락", href: "#contact" },
];

