import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Terrasse' | 'Einfahrt' | 'Denkmal' | 'Fassade';
  description: string;
  imageBefore: string;
  imageAfter: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}
