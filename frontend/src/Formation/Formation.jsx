import React, { useEffect, useState } from 'react';
import './Formation.css';
import Navbar from '../landingPage/Navbar';
import Footer from '../landingPage/Footer';
import {Link} from 'react-router-dom';

function Landing() {
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/formations');
        if (!response.ok) {
          throw new Error('Failed to fetch formations');
        }
        const data = await response.json();
        setFormations(data);
      } catch (error) {
        console.error('Error fetching formations:', error);
      }
    };

    fetchFormations();
  }, []);

  return (
    <div>
    <Navbar/>
    <div className='catalogue'>
      <div className='cards-container'>
        {formations.map(item => (
          <div key={item.id} className='card'>
            <h2 className='card-title'>{item.objet}</h2>
            <p className='card-description'>{item.notes}</p>
            <span className='card-duration'>{item.duree}</span>
            <Link to="/Details" className='card-link'>Détails</Link>
          </div>
        ))}
      </div>
    </div>
    <div className="button-container">
    <div className="demande-btn-container">
  <button className="demande-btn">Demande de partenariat →</button>
  </div>
  </div>
   
     
      
    <Footer/>
    </div>
  );
};

export default Landing;
