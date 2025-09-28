import React from 'react';
import { Link } from 'react-router-dom';
import type { HomeProps } from '../types';
import { mockServices, mockEvents, mockStats } from '../data/mockData';

const Home: React.FC<HomeProps> = ({ 
  services = mockServices, 
  events = mockEvents, 
  stats = mockStats 
}) => {
  if (!services || !events || !stats) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Медицинские решения<br />
              для современного мира
            </h1>
            <p className="hero-subtitle">
              Мы создаем инновационные медицинские технологии, 
              которые помогают врачам спасать жизни и улучшать 
              качество медицинской помощи
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary">
                Наши услуги
              </Link>
              <Link to="/about" className="btn btn-secondary">
                О компании
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-visual">
              <div className="medical-device">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Наши услуги</h2>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 4L29.09 17.26L43.09 18.18L32.55 28.74L35.18 42.64L24 35.77L12.82 42.64L15.45 28.74L4.91 18.18L18.91 17.26L24 4Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="container">
          <h2 className="section-title">Ближайшие события</h2>
          <div className="events-grid">
            {events.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p className="event-date">{event.date}</p>
                  <p className="event-description">
                    {event.description}
                  </p>
                  <Link to={`/events/${event.id}`} className="btn btn-outline">
                    Подробнее
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>О компании Praesens</h2>
              <p>
                Мы являемся ведущим поставщиком медицинского оборудования 
                и технологий в России. Наша миссия - сделать современные 
                медицинские технологии доступными для всех медицинских учреждений.
              </p>
              <p>
                За более чем 15 лет работы мы реализовали сотни проектов 
                по оснащению медицинских учреждений современным оборудованием.
              </p>
              <Link to="/about" className="btn btn-primary">
                Узнать больше
              </Link>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">{stats.projects}</div>
                <div className="stat-label">Реализованных проектов</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{stats.years}</div>
                <div className="stat-label">Лет опыта</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{stats.clients}</div>
                <div className="stat-label">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;