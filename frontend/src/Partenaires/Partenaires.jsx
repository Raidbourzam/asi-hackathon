import React, { useEffect, useState } from 'react';
import './Partenaire.css';
import Navbar from '../landingPage/Navbar';
import Footer from '../landingPage/Footer';
import { Link } from 'react-router-dom';


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

  console.log(Partenaires);

  return (
    <div>
        <div className='catalogue'>
        <Navbar />
        <div className='cards-container'>
            {Partenaires.map(item => (
            <div key={item.id} className='card'>
                <h2 className='card-title'>{item.sigle}</h2>
                <p className='card-description'>{item.categorie}</p>
                <span className='card-duration'>{item.tel}</span>
                <img className='imagePartenaire' src={item.image}/>
                <a className='card-link' href="#">Details: {item.notes}</a>
            </div>
            ))}
        </div>
        </div>
        <div className='ButtonDiv'>
            <Link to="/Signup">
                <button className="demande-btn">Demande de partenariat →</button>
          </Link>
        </div>
        <Footer/>
    </div>
    
  );
}

export default Landing;
