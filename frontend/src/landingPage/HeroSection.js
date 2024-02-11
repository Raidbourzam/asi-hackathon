import React from 'react';
import './HeroSection.css';
import illustration from '../Image/Illustration.png';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='colonne1'>
        <h1>Apprenez sans</h1>
        <h2>limites</h2>
        <p>Progressez dans votre carrière grâce à nos formations</p>
        <div className='hero-btns'>
          <button>S'inscrire</button>
        </div>
      </div>
      <div className='colonne2'>
        <img src={illustration} alt='Illustration' />
      </div>
    </div>
  );
}

export default HeroSection;
