import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar/Navbar';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Certificates from '@/components/Certificates/Certificates';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import '@/index.css';

const MainLayout = ({ children, theme, setTheme }) => (
  <div className={`container ${theme === 'dark' ? 'dark' : 'light'}`}>
    <Navbar theme={theme} setTheme={setTheme} />
    <div className="main-content">{children}</div>
    <Footer />
  </div>
);

const AppRoutes = ({ theme, setTheme }) => (
  <MainLayout theme={theme} setTheme={setTheme}>
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/skillsntools" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<h1 style={{ textAlign: 'center' }}>404 - Page Not Found</h1>} />
    </Routes>
  </MainLayout>
);

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('current_theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
    <Router>
      <ScrollToTop />
      <AppRoutes theme={theme} setTheme={setTheme} />
    </Router>
  );
};

export default App;
