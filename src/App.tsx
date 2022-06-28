import React from 'react';
import './App.css';
import SpecialAward from './components/SpecialAward/SpecialAward';
import Calendar from './components/Calendar/Calendar';

function App() {
  return (
    <div className="App">
      <div className="line"></div>
      <Calendar />
      <div className="line"></div>
      <SpecialAward />
    </div>
  );
}

export default App;
