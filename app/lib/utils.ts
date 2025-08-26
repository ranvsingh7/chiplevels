import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function formatReadTime(minutes: number): string {
  if (minutes < 1) {
    return 'Less than 1 min read';
  }
  if (minutes === 1) {
    return '1 min read';
  }
  return `${minutes} min read`;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength).trim() + '...';
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function getCategoryColor(category: string): string {
  const colors = {
    hardware: 'from-blue-500 to-cyan-500',
    networking: 'from-green-500 to-emerald-500',
    mobile: 'from-purple-500 to-pink-500',
    software: 'from-orange-500 to-red-500',
  };
  
  return colors[category.toLowerCase() as keyof typeof colors] || 'from-slate-500 to-slate-600';
}

export function getCategoryIcon(category: string): string {
  const icons = {
    hardware: '🔧',
    networking: '🌐',
    mobile: '📱',
    software: '💻',
  };
  
  return icons[category.toLowerCase() as keyof typeof icons] || '📄';
}
