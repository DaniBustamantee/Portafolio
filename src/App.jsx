import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import useLocalStorage from './hooks/useLocalStorage';
import Navbar from './components/Navbar';

const App = () => {
  const [tema, setTema] = useLocalStorage('tema', 'light');

  const toggleTema = () => {
    setTema(tema === 'light' ? 'dark' : 'light');
  };

  return (
    <div data-bs-theme={tema} className= {tema === 'dark' ? 'bg-dark text-light min-vh100' : 'min-vh-100 '}>
      <Navbar tema={tema} toggleTema={toggleTema} />
      <div className="container mt-4"> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      </div>
    </div>
  );
};

export default App;