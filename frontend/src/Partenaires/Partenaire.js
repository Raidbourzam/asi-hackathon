// Partenaire.js
import React from 'react';
import './Partenaire.css';
import usthbLogo from '../Image/usthblogo.jpg'
import a from '../Image/Rectangle 169 (1).png'
import aa from '../Image/Rectangle 169.png'

function Partenaire() {
  return (
    <div className="partenaire-container">
      <div className="title">Sigrex > Partenaires</div>
      <div className="feature-row">
        <div className="feature-box">
        <img src={usthbLogo} alt="USTHB Logo" />
          <p>USTHB</p>
        </div>
        <div className="feature-box">
        <img src={a} alt="USTHB Logo" />
          <p>USTHB</p>
        </div>
        <div className="feature-box">
        <img src={aa} alt="USTHB Logo" />
          <p>USTHB</p>
        </div>
        <div className="feature-box">
        <img src={usthbLogo} alt="USTHB Logo" />
          <p>USTHB</p>
        </div>
      </div>
      <div className="feature-row">
        <div className="feature-box">
        <img src={usthbLogo} alt="USTHB Logo" />
          <p>USTHB</p>
        </div>
        <div className="feature-box">
        <img src={a} alt="USTHB Logo" />
          <p>USTHB</p>
        </div>
        <div className="feature-box">
        <img src={aa} alt="USTHB Logo" />
          <p>USTHB</p>
        </div>
        <div className="feature-box">
        <img src={usthbLogo} alt="USTHB Logo" />
          <p>USTHB</p>
        </div>
      </div>
      <div className="demande-btn-container">
  <button className="demande-btn">Demande de partenariat →</button>
</div>
    </div>
  );
}

export default Partenaire;
