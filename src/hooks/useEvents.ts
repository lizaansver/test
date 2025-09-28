import { useState, useEffect } from 'react';
import type { Event } from '../types';
import { mockEvents, mockEvent } from '../data/mockData';

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        setEvents(mockEvents);
        setError(null);
      } catch (err) {
        setError('Ошибка при загрузке событий');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const getEventById = (id: string): Event | undefined => {
    if (id === 'sochi-conference-2024') {
      return mockEvent;
    }
    return events.find(event => event.id === id);
  };

  return {
    events,
    loading,
    error,
    getEventById
  };
}; 