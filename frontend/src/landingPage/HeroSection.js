import React from 'react';
import './HeroSection.css';
import illustration from '../Image/Illustration.png';
import { Link } from 'react-router-dom';

function HeroSection() {




  return (
    <div className='hero-container'>
      <div className='colonne1'>
        <h1>Apprenez sans</h1>
        <h2>limites</h2>
        <p>Progressez dans votre carrière grâce à nos formations</p>
        <div className='hero-btns'>
          <Link to="/Signup">
            <button>S'inscrire</button>
          </Link>
        </div>
      </div>
      <div className='colonne2'>
        <img src={illustration} alt='Illustration' />
      </div>
    </div>
  );
}

export default HeroSection;
