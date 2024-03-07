import { twMerge } from "tailwind-merge";

export default function cn(...args: (string | undefined)[]) {
  return twMerge(...args);
}
