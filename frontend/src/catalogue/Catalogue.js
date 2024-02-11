import React from 'react';
import './Catalogue.css'
import image1 from '../Image/galaxy.png';
import image2 from '../Image/galaxy.png';
import image3 from '../Image/galaxy.png';

function Catalogue() {
  return (
    <div className="catalogue-container">
      <div className="header">
        <div className="title">Explorez les thèmes des formations</div>
        <button className="download-btn">Télécharger le catalogue</button>
      </div>
      <div className="images-container">
        <div className="image-wrapper">
          <img src={image1} alt="Formation 1" />
          <div className="image-title">Base de données</div>
        </div>
        <div className="image-wrapper">
          <img src={image2} alt="Formation 2" />
          <div className="image-title">Réseau avancé</div>
        </div>
        <div className="image-wrapper">
          <img src={image3} alt="Formation 3" />
          <div className="image-title">Bureautique et web</div>
        </div>
      </div>
    </div>
  );
}

export default Catalogue;
