import React from 'react';
import { Link } from 'react-router-dom';
import type { FooterProps } from '../types';
import { mockContactInfo, mockSocialLinks } from '../data/mockData';

const Footer: React.FC<FooterProps> = ({ 
  contactInfo = mockContactInfo, 
  socialLinks = mockSocialLinks 
}) => {
  if (!contactInfo || !socialLinks) {
    return <footer className="footer"><div>Загрузка...</div></footer>;
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="footer-logo">
                <Link to="/" className="footer-logo-text">
                  StatusPraesens
                </Link>
              </div>
              <p className="footer-description">
                Ведущий поставщик медицинского оборудования и технологий в России. 
                Мы помогаем медицинским учреждениям оснащаться современным оборудованием.
              </p>
              <div className="social-links">
                {socialLinks.map((link) => (
                  <a key={link.id} href={link.url} className="social-link">
                    <img src={link.path} alt="img" />
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-section">
              <h3>Услуги</h3>
              <ul className="footer-links">
                <li><Link to="/services">Медицинское оборудование</Link></li>
                <li><Link to="/services">Консультации</Link></li>
                <li><Link to="/services">Обучение персонала</Link></li>
                <li><Link to="/services">Техническое обслуживание</Link></li>
                <li><Link to="/services">Сервисное обслуживание</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Компания</h3>
              <ul className="footer-links">
                <li><Link to="/about">О нас</Link></li>
                <li><Link to="/news">Новости</Link></li>
                <li><Link to="/events">События</Link></li>
                <li><Link to="/careers">Карьера</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Контакты</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" fill="currentColor"/>
                    <path d="M8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="currentColor"/>
                  </svg>
                  <span>{contactInfo.address}</span>
                </div>
                <div className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.654 1.328C3.056.725 2.111.866 1.778 1.47L.5 3.5c-.5 1.5.5 3.5 2 4.5l1.5 1.5c1 .5 2.5 1 4 2s3 2.5 4 2l2.5.5c.604.333.745 1.278.142 1.876l-.828.828c-.604.604-1.549.462-1.876.142L9.5 13.5c-1.5-.5-3-.5-4.5-1.5s-1-3-1.5-4.5L2.5 3.5c-.333-.604-.462-1.549.142-1.876l.012-.296z" fill="currentColor"/>
                  </svg>
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.708 2.825L15 11.105V5.383zm-.034 6.876l-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z" fill="currentColor"/>
                  </svg>
                  <span>{contactInfo.email}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2024 StatusPraesens. Все права защищены.</p>
              <div className="footer-bottom-links">
                <Link to="/privacy">Политика конфиденциальности</Link>
                <Link to="/terms">Условия использования</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;