import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'he' | 'ru';

export interface NavItem {
  id: string;
  path: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  category: 'ai' | 'web' | 'hardware' | 'consulting' | 'sos';
}

export interface CaseStudy {
  id: string;
  category: 'ai' | 'web' | 'hardware' | 'complex';
  image: string;
}

export interface Course {
  id: string;
  levelKey: string;
}

export interface TeamMember {
  id: string;
  image: string;
}

export interface Partner {
  id: string;
  logo: string;
}