/**
 * Pure helper utilities for portfolio data formatting, filtering, and validation
 */
import { Project } from "../data/portfolioData";

/**
 * Filter projects by query string (searches title, subtitle, category, tags)
 */
export function filterProjects(projects: Project[], query: string): Project[] {
  if (!query || query.trim() === "") return projects;
  const q = query.toLowerCase().trim();
  return projects.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );
}

/**
 * Find project by slug or ID
 */
export function findProject(projects: Project[], identifier: string): Project | undefined {
  if (!identifier) return undefined;
  const idLower = identifier.toLowerCase();
  return projects.find(
    (p) =>
      p.route.toLowerCase() === idLower ||
      p.slug.toLowerCase() === idLower ||
      p.id.toLowerCase() === idLower
  );
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Cleanly format number with leading zero for editorial numbering
 */
export function formatEditorialIndex(index: number): string {
  const num = index + 1;
  return num < 10 ? `0${num}` : `${num}`;
}
