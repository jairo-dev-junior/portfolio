import type { IconType } from 'react-icons';
import { FaCog } from 'react-icons/fa';
import { SiOpenjdk, SiKotlin, SiSpring, SiMysql, SiPostgresql, SiNodedotjs, SiDocker, SiJavascript, SiReact, SiHtml5, SiCss3, SiTailwindcss } from 'react-icons/si';

export const backendTech: string[] = ['Java', 'Kotlin', 'Spring', 'Micronaut', 'MySQL', 'PostgreSQL', 'NodeJS', 'Docker'];
export const frontendTech: string[] = ['JavaScript', 'React', 'HTML', 'CSS', 'TailwindCSS'];

export const techIcons: Record<string, IconType> = {
  Java: SiOpenjdk,
  Kotlin: SiKotlin,
  Spring: SiSpring,
  Micronaut: FaCog,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  NodeJS: SiNodedotjs,
  Docker: SiDocker,
  JavaScript: SiJavascript,
  React: SiReact,
  HTML: SiHtml5,
  CSS: SiCss3,
  TailwindCSS: SiTailwindcss,
}; 