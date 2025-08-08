import type { Event, ScheduleDay } from '../types';

export const formatEventDate = (date: string): string => {
  return date;
};

export const getEventCategory = (category: string): string => {
  const categories: Record<string, string> = {
    'conference': 'Конференция',
    'exhibition': 'Выставка',
    'workshop': 'Семинар',
    'webinar': 'Вебинар'
  };
  
  return categories[category.toLowerCase()] || category;
};

export const isEventUpcoming = (event: Event): boolean => {

  const eventDate = new Date(event.date);
  const now = new Date();
  return eventDate > now;
};

export const getScheduleDuration = (schedule: ScheduleDay[]): string => {
  if (!schedule || schedule.length === 0) return '';
  
  const days = schedule.length;
  if (days === 1) return '1 день';
  if (days < 5) return `${days} дня`;
  return `${days} дней`;
};

export const filterEventsByCategory = (events: Event[], category: string): Event[] => {
  return events.filter(event => 
    event.category.toLowerCase() === category.toLowerCase()
  );
};

export const sortEventsByDate = (events: Event[]): Event[] => {
  return [...events].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });
}; 