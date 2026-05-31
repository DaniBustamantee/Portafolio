import React from 'react';
import PropTypes from 'prop-types';


const SkillBadge = ({ nombre }) => {
  return (
    
    <span className="badge bg-primary me-1">
      { nombre }
    </span>
  );
};

SkillBadge.propTypes = {
  nombre: PropTypes.string.isRequired,
};

export default SkillBadge;