import React, { useState } from 'react';
import './AuthForm.css';

function AuthForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        sigle: '',
        categorie: '',
        address: '',
        tel: '',
        fax: '',
        mail: '',
        pays: '',
        url: '',
        notes: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/auth/partenaire/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                setFormData({
                    username: '',
                    password: '',
                    sigle: '',
                    categorie: '',
                    address: '',
                    tel: '',
                    fax: '',
                    mail: '',
                    pays: '',
                    url: '',
                    notes: ''
                });
                console.log(data); // Handle success response from the backend
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="auth-form-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
                <input type="text" name="sigle" value={formData.sigle} onChange={handleChange} placeholder="Sigle" required />
                <input type="text" name="categorie" value={formData.categorie} onChange={handleChange} placeholder="Categorie" required />
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
                <input type="text" name="tel" value={formData.tel} onChange={handleChange} placeholder="Tel" required />
                <input type="text" name="fax" value={formData.fax} onChange={handleChange} placeholder="Fax" required />
                <input type="email" name="mail" value={formData.mail} onChange={handleChange} placeholder="Email" required />
                <input type="text" name="pays" value={formData.pays} onChange={handleChange} placeholder="Pays" required />
                <input type="text" name="url" value={formData.url} onChange={handleChange} placeholder="URL" required />
                <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Notes"></textarea>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default AuthForm;
