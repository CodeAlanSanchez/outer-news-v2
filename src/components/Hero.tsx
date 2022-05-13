import { useRef } from 'react';

const Hero: React.FC = () => {
  const planet = useRef(null);

  const loopPlanet = async () => {
    setTimeout(() => {
      return planet.current;
    }, 1000);
  };

  return (
    <div className="hero">
      <div ref={planet} className="planet-1">
        <div className="land-mass land-mass-1" />
        <div className="land-mass land-mass-2" />
        <div className="land-mass land-mass-3"></div>
      </div>
      <div className="hero-content">
        <h4 className="hero-title">Outer News</h4>
        <p className="hero-info">
          Space articles fetched from{' '}
          <span>
            <a
              target="_blank"
              referrerPolicy="no-referrer"
              href="https://api.spaceflightnewsapi.net/v3/documentation"
            >
              API
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
