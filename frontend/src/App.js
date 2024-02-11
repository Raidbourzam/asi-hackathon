import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Formation from './Formation/Formation';
import Signup from './Partenaires/signup';
import LandingPage from './landingPage/LandingPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Formation" element={<Formation />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
