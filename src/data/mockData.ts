import type { Event, Service, CompanyStats, Speaker, ScheduleDay, ContactInfo, SocialLink } from '../types';

export const mockServices: Service[] = [
  {
    id: '1',
    title: 'Медицинское оборудование',
    description: 'Поставка и обслуживание современного медицинского оборудования',
    icon: 'equipment'
  },
  {
    id: '2',
    title: 'Консультации',
    description: 'Профессиональные консультации по медицинским технологиям',
    icon: 'consultation'
  },
  {
    id: '3',
    title: 'Обучение персонала',
    description: 'Обучение медицинского персонала работе с новым оборудованием',
    icon: 'training'
  }
];

export const mockSpeakers: Speaker[] = [
  {
    id: '1',
    name: 'Доктор А.В. Иванов',
    position: 'Главный врач',
    organization: 'ЦКБ РАН',
    avatar: './dist/спикер1.jpg'
  },
  {
    id: '2',
    name: 'Профессор М.С. Петрова',
    position: 'Ведущий специалист',
    organization: 'НИИ кардиологии им. Мясникова',
    avatar: './dist/спикер2.jpg'
  },
  {
    id: '3',
    name: 'Доктор П.К. Сидоров',
    position: 'Руководитель отделения',
    organization: 'Медицинский центр "Европейский"',
    avatar: './dist/спикер3.jpg'
  }
];

export const mockSchedule: ScheduleDay[] = [
  {
    day: '15 декабря - День 1',
    date: '2024-12-15',
    items: [
      { time: '09:00 - 10:00', title: 'Регистрация участников' },
      { time: '10:00 - 11:30', title: 'Открытие конференции. Пленарное заседание' },
      { time: '11:30 - 12:00', title: 'Кофе-брейк' },
      { time: '12:00 - 14:00', title: 'Секционные заседания' }
    ]
  },
  {
    day: '16 декабря - День 2',
    date: '2024-12-16',
    items: [
      { time: '09:00 - 11:00', title: 'Мастер-классы и демонстрации' },
      { time: '11:00 - 12:00', title: 'Кофе-брейк' },
      { time: '12:00 - 14:00', title: 'Постерная сессия' }
    ]
  },
  {
    day: '17 декабря - День 3',
    date: '2024-12-17',
    items: [
      { time: '09:00 - 11:00', title: 'Круглые столы' },
      { time: '11:00 - 12:00', title: 'Кофе-брейк' },
      { time: '12:00 - 14:00', title: 'Закрытие конференции' }
    ]
  }
];

export const mockEvent: Event = {
  id: 'sochi-conference-2024',
  title: 'Международная медицинская конференция "Инновационные технологии в медицине"',
  description: 'Крупнейшая конференция по медицинским технологиям в России, объединяющая ведущих специалистов отрасли',
  date: '15-17 декабря 2024',
  location: 'Сочи, Россия',
  category: 'Конференция',
  image: './конфа.jpg',
  price: '25,000 ₽',
  organizer: 'Praesens Medical',
  address: 'ул. Олимпийская, 35',
  speakers: mockSpeakers,
  schedule: mockSchedule
};

export const mockEvents: Event[] = [
  {
    id: 'moscow-exhibition-2025',
    title: 'Выставка медицинского оборудования',
    description: 'Крупнейшая выставка медицинского оборудования в России',
    date: '20-22 января 2025',
    location: 'Москва, Россия',
    category: 'Выставка',
    image: './techno.jpg',
    organizer: 'Praesens Medical'
  },
  {
    id: 'spb-cardiology-2025',
    title: 'Конференция по кардиологии',
    description: 'Научная конференция по современным методам лечения',
    date: '10-12 февраля 2025',
    location: 'Санкт-Петербург, Россия',
    category: 'Конференция',
    image: './piter.jpg',
    organizer: 'Praesens Medical'
  }
];

export const mockStats: CompanyStats = {
  projects: '500+',
  years: '15',
  clients: '1000+'
};

export const mockContactInfo: ContactInfo = {
  address: 'Москва, ул. Тверская, 15',
  phone: '+7 (495) 123-45-67',
  email: 'info@praesens.ru'
};

export const mockSocialLinks: SocialLink[] = [
  {
    id: 'telegramm',
    name: 'Telegramm',
    url: '#',
    icon: 'telegram',
    path: './Telegram.svg'
  },

  {
    id: 'vk',
    name: 'vk',
    url: '#',
    icon: 'vk',
    path: './Vk.svg'
  },
]; 