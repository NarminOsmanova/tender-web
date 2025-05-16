import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 0-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

// İstifadə:
const rawDate = "2025-05-16T07:38:54.2133752";
export const formattedDate = formatDate(rawDate); // "16-05-2025"
