import React from 'react';
import './App.css';
import SpecialAward from './components/SpecialAward/SpecialAward';
import Calendar from './components/Calendar/Calendar';

function App() {
  return (
    <div className="App">
      <Calendar />
      <SpecialAward />
    </div>
  );
}

export default App;
