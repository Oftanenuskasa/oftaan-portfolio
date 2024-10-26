import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Service';
import ServiceDetail from './components/ServiceDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div><Hero /><About /><Service /><Projects /><Contact /><Footer /></div>} />
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
