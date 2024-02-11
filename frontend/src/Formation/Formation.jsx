import React, { useEffect, useState } from 'react';
import './Formation.css';

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
    <div className='catalogue'>
      <div className='cards-container'>
        {formations.map(item => (
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
