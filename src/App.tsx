import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ContactModal from './components/ContactModal';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Support from './components/Support';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';

function HomePage() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const sectionIds = ['home', 'features', 'support', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActiveSection(id);
      }, { threshold: 0.6 });
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  return (
    <>
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      <main>
        <section id="home"><Hero /></section>
        <section id="features"><Features /></section>
        <section id="support"><Support /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer onNavigateToPage={scrollToSection} />
      <ContactModal isOpen={false} onClose={() => {}} />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy onBack={() => window.history.back()} />} />
        <Route path="/TermsConditions" element={<TermsConditions onBack={() => window.history.back()} />} />
      </Routes>
    </Router>
  );
}

export default App;
