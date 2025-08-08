// Константы приложения

export const APP_NAME = 'Praesens Medical';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  EVENTS: '/events',
  NEWS: '/news',
  CONTACTS: '/contacts',
  EVENT_DETAIL: '/events/all-R/aig/sochi/'
} as const;

export const API_ENDPOINTS = {
  EVENTS: '/api/events',
  SERVICES: '/api/services',
  CONTACTS: '/api/contacts'
} as const;

export const EVENT_CATEGORIES = {
  CONFERENCE: 'conference',
  EXHIBITION: 'exhibition',
  WORKSHOP: 'workshop',
  WEBINAR: 'webinar'
} as const;

export const CONTACT_INFO = {
  ADDRESS: 'Москва, ул. Тверская, 15',
  PHONE: '+7 (495) 123-45-67',
  EMAIL: 'info@praesens.ru'
} as const;


export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE: 1200
} as const;

export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500
} as const; 