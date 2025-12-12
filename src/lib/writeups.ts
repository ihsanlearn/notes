import writeupsData from '@/data/writeups.json';

export interface LocalizedString {
  en: string;
  id: string;
}

export interface Writeup {
  id: string;
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  date: string;
  readTime: string;
  tags: string[];
  content?: LocalizedString;
}

export function getAllWriteups(): Writeup[] {
  return writeupsData;
}

export function getWriteupBySlug(slug: string): Writeup | undefined {
  return writeupsData.find((writeup) => writeup.slug === slug);
}
