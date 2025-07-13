import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutMe from '../AboutMe/AboutMe';
import SkillsnTools from '../SkillsnTools/SkillsnTools';

const About = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');

      const interval = setInterval(() => {
        const el = document.getElementById(id);
        if (el) {
          const offset = 80; // Tinggi navbar
          const y = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          clearInterval(interval); // Hentikan polling
        }
      }, 100); // Cek setiap 100ms

      // Timeout supaya polling ga jalan terus-terusan
      const timeout = setTimeout(() => clearInterval(interval), 3000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [hash]);

  return (
    <div className="about">
      <section id="aboutme" className="scroll-target">
        <AboutMe />
      </section>
      <section id="skillsntools" className="scroll-target">
        <SkillsnTools />
      </section>
    </div>
  );
};

export default About;
