import React from 'react';
import { Link } from 'react-router-dom';
import type { EventPageProps } from '../types';
import { mockEvent, mockEvents } from '../data/mockData';

const Event: React.FC<EventPageProps> = ({ 
  event = mockEvent, 
  relatedEvents = mockEvents 
}) => {

  if (!event || !relatedEvents) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="event-page">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <nav className="breadcrumb-nav">
            <Link to="/">Главная</Link>
            <span className="separator">/</span>
            <Link to="/events">События</Link>
            <span className="separator">/</span>
            <span className="current">{event.title}</span>
          </nav>
        </div>
      </div>

      {/* Event Header */}
      <section className="event-header">
        <div className="container">
          <div className="event-header-content">
            <div className="event-meta">
              <span className="event-category">{event.category}</span>
              <span className="event-date">{event.date}</span>
              <span className="event-location">{event.location}</span>
            </div>
            <h1 className="event-title">
              {event.title}
            </h1>
            <p className="event-subtitle">
              {event.description}
            </p>
          </div>
        </div>
      </section>

      {/* Event Content */}
      <section className="event-content">
        <div className="container">
          <div className="event-layout">
            <div className="event-main">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              
              <div className="event-description">
                <h2>О конференции</h2>
                <p>
                  {event.description}
                </p>
                
                <h3>Основные темы конференции:</h3>
                <ul>
                  <li>Искусственный интеллект в диагностике</li>
                  <li>Роботизированная хирургия</li>
                  <li>Телемедицина и цифровое здравоохранение</li>
                  <li>Персонализированная медицина</li>
                  <li>Биотехнологии и генная терапия</li>
                </ul>

                {event.schedule && (
                  <>
                    <h3>Программа конференции</h3>
                    <div className="schedule">
                      {event.schedule.map((day) => (
                        <div key={day.date} className="schedule-day">
                          <h4>{day.day}</h4>
                          <div className="schedule-items">
                            {day.items.map((item, index) => (
                              <div key={index} className="schedule-item">
                                <span className="time">{item.time}</span>
                                <span className="title">{item.title}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="event-sidebar">
              <div className="event-info-card">
                <h3>Информация о событии</h3>
                <div className="info-item">
                  <span className="label">Дата:</span>
                  <span className="value">{event.date}</span>
                </div>
                <div className="info-item">
                  <span className="label">Место:</span>
                  <span className="value">Отель "Роза Хутор", Сочи</span>
                </div>
                <div className="info-item">
                  <span className="label">Адрес:</span>
                  <span className="value">{event.address}</span>
                </div>
                <div className="info-item">
                  <span className="label">Стоимость:</span>
                  <span className="value">{event.price}</span>
                </div>
                <div className="info-item">
                  <span className="label">Организатор:</span>
                  <span className="value">{event.organizer}</span>
                </div>
                
                <button className="btn btn-primary btn-full">
                  Зарегистрироваться
                </button>
                
                <button className="btn btn-outline btn-full">
                  Добавить в календарь
                </button>
              </div>

              {event.speakers && (
                <div className="speakers-card">
                  <h3>Ключевые спикеры</h3>
                  {event.speakers.map((speaker) => (
                    <div key={speaker.id} className="speaker-item">
                      <div className="speaker-avatar">
                        <img src={speaker.avatar} alt={speaker.name} />
                      </div>
                      <div className="speaker-info">
                        <h4>{speaker.name}</h4>
                        <p>{speaker.organization}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="related-events">
        <div className="container">
          <h2>Похожие события</h2>
          <div className="events-grid">
            {relatedEvents.map((relatedEvent) => (
              <div key={relatedEvent.id} className="event-card">
                <div className="event-image">
                  <img src={relatedEvent.image} alt={relatedEvent.title} />
                </div>
                <div className="event-content">
                  <h3>{relatedEvent.title}</h3>
                  <p className="event-date">{relatedEvent.date}</p>
                  <p className="event-description">
                    {relatedEvent.description}
                  </p>
                  <Link to={`/events/${relatedEvent.id}`} className="btn btn-outline">
                    Подробнее
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Event;