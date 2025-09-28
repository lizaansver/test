

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  image: string;
  price?: string;
  organizer: string;
  address?: string;
  speakers?: Speaker[];
  schedule?: ScheduleDay[];
}

export interface Speaker {
  id: string;
  name: string;
  position: string;
  organization: string;
  avatar: string;
}

export interface ScheduleDay {
  day: string;
  date: string;
  items: ScheduleItem[];
}

export interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CompanyStats {
  projects: string;
  years: string;
  clients: string;
}

export interface NavigationItem {
  id: string;
  title: string;
  path: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  path: string;
}


export interface HeaderProps {
  navigation?: NavigationItem[];
}

export interface FooterProps {
  contactInfo?: ContactInfo;
  socialLinks?: SocialLink[];
}

export interface HomeProps {
  services?: Service[];
  events?: Event[];
  stats?: CompanyStats;
}

export interface EventPageProps {
  event?: Event;
  relatedEvents?: Event[];
}

export interface ServiceCardProps {
  service: Service;
}

export interface EventCardProps {
  event: Event;
  variant?: 'default' | 'compact';
}

export interface SpeakerCardProps {
  speaker: Speaker;
}

export interface ScheduleProps {
  schedule: ScheduleDay[];
}

export interface StatsProps {
  stats: CompanyStats;
} 