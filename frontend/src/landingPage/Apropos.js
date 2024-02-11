import React from 'react';
import logo1 from '../Image/usthblogo.jpg';
import logo2 from '../Image/Rectangle 169 (1).png';
import logo3 from '../Image/Rectangle 169.png';
import './Apropos.css'; // Assurez-vous d'avoir le fichier CSS approprié

function Partenaires() {
  return (
    <div className="partenaires-container">
      <h1>Nos partenaires</h1>
      <p>Nous collaborons avec plusieurs universités</p>
      <div className="logo-container">
        <img src={logo1} alt="Logo partenaire 1" className="logo" />
        <img src={logo2} alt="Logo partenaire 2" className="logo" />
        <img src={logo3} alt="Logo partenaire 3" className="logo" />
      </div>
    </div>
  );
}

export default Partenaires;