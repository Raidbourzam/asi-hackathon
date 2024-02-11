import React, { useEffect, useState } from 'react';
import './Partenaire.css';
import Navbar from '../landingPage/Navbar';

function Landing() {
  const [Partenaires, setPartenaires] = useState([]);

  useEffect(() => {
    const fetchPartenaires = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/partenaire/Allpartenaire');
        if (!response.ok) {
          throw new Error('Failed to fetch Partenaires');
        }
        const data = await response.json();
        setPartenaires(data);
      } catch (error) {
        console.error('Error fetching Partenaires:', error);
      }
    };

    fetchPartenaires();
  }, []);

  return (
    <div className='catalogue'>
      <Navbar />
      <div className='cards-container'>
        {Partenaires.map(item => (
          <div key={item.id} className='card'>
            <h2 className='card-title'>{item.objet}</h2>
            <p className='card-description'>{item.notes}</p>
            <span className='card-duration'>{item.duree}</span>
            <a className='card-link' href="#">Details</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landing;
