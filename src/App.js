import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='page'>
    <Router>
      <Header />
      <Footer />
    </Router>
    </div>
  );
}

export default App;
