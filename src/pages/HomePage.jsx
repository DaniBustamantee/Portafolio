import React from 'react';
import SkillBadge from '../components/SkillBadge';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'SQL SERVER']; // Ejemplo de habilidades
  

  return (
    <div>

      <section className="text-center py-5">
        <h1>Danilo Bustamante</h1>
        <p className="lead">Bachillerato en Comunicacion | Analista en Sistemas</p>
      </section>

      <section className="mb-5">
        <h2>Habilidades principales</h2>
        {skills.map((skill) => (
          <SkillBadge key={skill} nombre={skill} />

        ))
        }
      </section>

      <section className="mb-5">
        <h2>Contacto</h2>
        <Link to="/contact" className="btn btn-primary">
        Ir a Contacto
      </Link>
      </section>
    </div>
  );
};

export default HomePage;