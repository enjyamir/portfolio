import { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className={`hero ${animate ? 'hero--animate' : ''}`}>
      <div className="max-w-[900px] mx-auto">
        <div className="hero__label">UX|UI</div>

        <div className="hero__titleWrap">
          <h1 className="hero__titleBack" aria-hidden="true">PORTFOLIO</h1>
          <h1 className="hero__titleFront">PORTFOLIO</h1>
        </div>

        <div className="hero__meta">
          <div>ENJY AMIR</div>
          <div>2025</div>
        </div>
      </div>

      <div>
        <p className="hero__tagline">"Designs that smile back."</p>
      </div>
    </section>
  );
}


 
