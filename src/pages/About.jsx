import React, { Component } from 'react';
import './About.css';
import enjy from '../imgs/gg.png';
import Skills from '../components/Skills';


const About = () => {
    return ( 
<>
<section className="about">
      <div className="about__container">
        <div className="about__underline">
          <h2 className="about__title">About Me</h2>
          <svg viewBox="0 0 236 41" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M229.5 31.9L48.4412 31.9C42.2768 31.9 36.1727 31.7034 30.4776 31.3215C24.7824 30.9395 19.6076 30.3797 15.2487 29.674C10.8898 28.9683 7.4322 28.1305 5.07318 27.2084C2.71416 26.2863 1.5 25.298 1.5 24.3C1.5 23.302 2.71417 22.3137 5.07318 21.3916C7.4322 20.4695 10.8898 19.6317 15.2487 18.926C19.6076 18.2203 24.7824 17.6604 30.4776 17.2785C36.1727 16.8966 42.2768 16.7 48.4412 16.7L169.147 16.7C181.597 16.7 193.536 15.8993 202.339 14.474C211.143 13.0487 216.088 11.1156 216.088 9.1C216.088 7.08436 211.143 5.15127 202.339 3.72599C193.536 2.30071 181.597 1.5 169.147 1.5L1.5 1.5M229.5 31.9L200.559 39.5M229.5 31.9L199.559 24.3" stroke="#FDF0AB" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        <div className="about__grid">
          <div>
            <h3 className="about__bioTitle">BIO</h3>
            <p className="about__bioText">
              HI, looking further to develop my education and skills. I love and appreciate art in all forms. My hobbies are Reading, music, traveling, charity work, astrology, fashion and psychology.
            </p>
          </div>

          <div className="about__imageWrap">
            <div className="about__imageHalo">
              <img src={enjy} alt="enjy" />
            </div>
          </div>
        </div>
      </div>
    </section>

<Skills/>
</>






     );
}
 
export default About;