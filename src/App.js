import React from 'react';
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Aborigins from './components/Aborigins'; 
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="home">
        <MainPage />
      </div>
      <div id="tribes">
        <Aborigins />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;
