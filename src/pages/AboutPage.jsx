import React from 'react';
import SkillBadge from '../components/SkillBadge';

const AboutPage = () => {
  const experiencia = [{id: 1, titulo: 'Proyecto academico', empresa: 'Institucion Cervantes', año: '2023-Presente', descripcion:
    'Desarrollo una app de geolocalizacion y gestion de inventario utilizando React para el frontend, Node.Js para el backend y SQL Server para la base de datos.'}]

  const educacion = [{id: 1, titulo: 'Bachillerato en Comunicacion', institucion: 'Instituto Secundario Nuestra Señora de las Mercedes'
    , año: '2014-2020'},
    {id: 2, titulo: 'Analista en Sistemas', institucion: 'Institucion Cervantes', año: '2023-Presente'}]

  const habilidades = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'SQL SERVER'];
  return (
    <div>
      
      <section className="mb-5">
        <h2>Sobre mí</h2>
        <p>Soy estudiante de Analista en Sistemas, cursando el último año de mi formación académica.
          Me apasiona el desarrollo web y la resolucion de problemas a traves de codigo. Tengo conocimientos en HTML, CSS, JavaScript,React
          y Sql Server, busco seguir creciendo profesionalmente combinando teoría y práctica</p>
      </section>

      
      <section className="mb-5">
        <h2>Experiencia</h2>
        {experiencia.map((item) => (
          <div key={item.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{item.titulo}</h5>
              <p className="card-text">{item.empresa}</p>
              <p className="card-text">{item.año}</p>
              <p className="card-text">{item.descripcion}</p>
            </div>
          </div>
        ))}
      </section>

      
      <section className="mb-5">
        <h2>Educación</h2>
        {educacion.map((item) => (
          <div key={item.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{item.titulo}</h5>
              <p className="card-text">{item.institucion}</p>
              <p className="card-text">{item.año}</p>
            </div>
          </div>
        ))}
      </section>

      
      <section className="mb-5">
        <h2>Habilidades</h2>
        {habilidades.map((skill) => (
          <SkillBadge key={skill} nombre={skill} />
        ))}
      </section>
    </div>
  );
};

export default AboutPage;