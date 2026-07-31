export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  features: string[];
  estimatedTime: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'location' | 'services' | 'appointment' | 'timing' | 'parts';
}

export interface AreaServed {
  name: string;
  distance: string;
  highlights: string;
}
