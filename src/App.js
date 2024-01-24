import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Greetings from './components/Greetings';
import './App.css';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/greetings" element={<Greetings />} />
        </Routes>
      </Router>
  );
}

export default App;
