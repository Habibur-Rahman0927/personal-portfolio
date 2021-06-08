import React, { useState } from 'react';
import './App.scss'
import TopBar from './Components/Topbar/TopBar';
import Intro from './Components/Intro/Intro'
import Portfolio from './Components/Portfolio/Portfolio'
import Works from './Components/Works/Works'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Menu from './Components/Menu/Menu'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></TopBar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className="section">
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Works></Works>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default App;
