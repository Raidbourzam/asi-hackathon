import React, { useEffect, useState } from 'react';
import './Formateur.css';
import Navbar from '../landingPage/Navbar';
import Footer from '../landingPage/Footer';

function Landing() {
  const [formateurs, setFormateurs] = useState([]);

  useEffect(() => {
    const fetchFormateurs = async () => {
      try {
        const response = await fetch('http://localhost:8083/api/formateurs');
        if (!response.ok) {
          throw new Error('Failed to fetch formateurs');
        }
        const data = await response.json();
        setFormateurs(data);
      } catch (error) {
        console.error('Error fetching formateurs:', error);
      }
    };

    fetchFormateurs();
  }, []);

  return (
    <div>
      <div className='catalogue'>
        <Navbar/>
        <div className='cards-container'>
          {formateurs.map(formateur => (
            <div key={formateur.id} className='card'>
              <h2 className='card-title'>{formateur.nom} {formateur.prenom}</h2>
              <p className='card-description'>Sexe: {formateur.sexe}</p>
              <p className='card-description'>Adresse: {formateur.adresse}</p>
              <p className='card-description'>Email: {formateur.mail}</p>
              <p className='card-description'>Téléphone: {formateur.tel}</p>
              <p className='card-description'>Diplôme: {formateur.diplome}</p>
              <p className='card-description'>Spécialité: {formateur.specialite}</p>
              <div className='card-link'>Détails</div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Landing;
