import { type ClassValue } from "clsx";

/**
 * Utility function to merge class names
 * Simplified version without clsx dependency
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flat()
    .filter((x) => typeof x === "string")
    .join(" ")
    .trim();
}
