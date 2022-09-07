import './App.css';
import React from "react"
import Header from "./tools/Header"
import HeroSection from "./tools/HeroSection"
import NewsTicker from './tools/NewsTicket';
import CardHolder from './tools/CardHolder';
import Stats from './tools/Stats';
import Roles from './tools/Roles';
import End from './tools/End';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeroSection></HeroSection>
      <NewsTicker></NewsTicker>
      <CardHolder></CardHolder>
      <Stats></Stats>
      <Roles></Roles>
      <End></End>
    </div>
  );
}

export default App;
