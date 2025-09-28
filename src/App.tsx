import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Event from './pages/Event';
import { mockServices, mockEvents, mockStats, mockEvent, mockContactInfo, mockSocialLinks } from './data/mockData';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Home services={mockServices} events={mockEvents} stats={mockStats} />
        <Event event={mockEvent} relatedEvents={mockEvents} />
        <Footer contactInfo={mockContactInfo} socialLinks={mockSocialLinks} />
      </div>
    </Router>
  );
};

export default App;