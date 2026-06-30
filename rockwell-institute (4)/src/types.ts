/**
 * Rockwell Institute Redesign - TypeScript Types
 */

export interface Course {
  id: string;
  title: string;
  category: 'licensing' | 'examprep' | 'ce' | 'books';
  categoryLabel: string;
  price: number;
  hours: number;
  format: 'Online' | 'Live Lecture' | 'Correspondence' | 'Book';
  description: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  highlights: string[];
  requirements?: string;
  image?: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  location: string;
  date: string;
  rating: number;
  comment: string;
  courseName?: string;
  verified: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'licensing' | 'general' | 'ce' | 'examprep';
}

export interface LearningFormat {
  id: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
}
