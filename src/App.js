import React from 'react';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Place from './pages/Place';
import ScrollToTop from './ScrollToTop';
import './styles/App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/place" element={ <Place />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
