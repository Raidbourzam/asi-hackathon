import React, { useState }   from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import du fichier CSS

function Login() {

    const navigate = useNavigate();
  // État pour gérer les champs de saisie et les messages d'erreur
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  // Fonction pour gérer la soumission du formulaire de connexion
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:8083/api/auth/partenaire/login', {
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
                password: ''
            });
            console.log(data); // Handle success response from the backend
            navigate('/');
        } else {
            alert("Error in Username or Password")
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
  };

  // Fonction pour mettre à jour les champs de saisie lorsqu'ils changent
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

