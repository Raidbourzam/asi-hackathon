import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Formation from './Formation/Formation';
import Formateur from './Formateur/Formateur';
import Signup from './Partenaires/signup';
import Login from './Partenaires/Login';
import LandingPage from './landingPage/LandingPage';
import Partenaires from './Partenaires/Partenaires';
import Details from './Details/details';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Formations" element={<Formation />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Partenaires" element={<Partenaires />} />
          <Route path="/details" element={<Details />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Formateurs" element={<Formateur />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
