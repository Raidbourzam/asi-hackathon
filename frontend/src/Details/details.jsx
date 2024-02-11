import React from 'react';
import './details.css';

class FormationDetails extends React.Component {
    render() {
        // Hardcoded values for prerequisites, objectives, and content
        const prerequis = "Prérequis de la formation";
        const objectifs = ["Apprendre à congurer un routeur CISCO", "Apprendre à congurer un commutateur CISCO.", "Découpage réseau en VLAN."];
        const contenu = ["Examen des interfaces d’un routeur", "Commandes pour vérier la conguration", "ContenConguration d’une interface sérieu 3"];

        return (
            <div className="formation-details-container">
                <h2 className="formation-details-title">Détails de la formation</h2>
                <div className="formation-details-section">
                    <h3>Prérequis :</h3>
                    <p className="details-text">{prerequis}</p>
                </div>

                <div className="formation-details-section">
                    <h3>Objectifs :</h3>
                    <ul className="formation-details-list">
                        {objectifs.map((objectif, index) => (
                            <li key={index} className="formation-details-list-item">{objectif}</li>
                        ))}
                    </ul>
                </div>

                <div className="formation-details-section">
                    <h3>Contenu de la formation :</h3>
                    <ul className="formation-details-list">
                        {contenu.map((item, index) => (
                            <li key={index} className="formation-details-list-item">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="formation-details-section">
                    <button className="formation-details-button">Demander un Devis de formation </button>
                </div>
            </div>
        );
    }
}

export default FormationDetails;