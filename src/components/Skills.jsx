import React, { Component } from 'react';
import './Skills.css';


const Skills = () => {
    const skills = [
      { name: 'Team work', level: 5 },
      { name: 'Time management', level: 2 },
      { name: 'Organization', level: 4 },
      { name: 'Creative', level: 4 },
      { name: 'Extrovert', level: 3 },
      { name: 'Communication Skills', level: 5 },
    ];
    return ( 
<section className="skills">
      <div className="skills__container">
        <h2 className="skills__title">SKILLS</h2>

        <div className="skills__grid">
          {skills.map(({ name, level }, i) => (
            <div key={i} className="skillRow">
              <span className="skillRow__name">{name}</span>
              <div className="skillRow__bars">
                {[...Array(level)].map((_, j) => (
                  <div key={j} className="skillRow__bar" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="skills__btn">Download CV</button>
      </div>
    </section>


        
     );
}
 
export default Skills;