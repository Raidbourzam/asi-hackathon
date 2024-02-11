import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Formation from './Formation/Formation';
import Signup from './Partenaires/signup';
import LandingPage from './landingPage/LandingPage';
import Partenaires from './Partenaires/Partenaires';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Formations" element={<Formation />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Partenaires" element={<Partenaires />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
