import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Home />
        <main>
          <Routes>
            <Route path="/test/" element={<Home services={mockServices} events={mockEvents} stats={mockStats} />} />
            <Route path="/events/all-R/aig/sochi/" element={<Event event={mockEvent} relatedEvents={mockEvents} />} />
          </Routes>
        </main>
        <Footer contactInfo={mockContactInfo} socialLinks={mockSocialLinks} />
      </div>
    </Router>
  );
};

export default App;