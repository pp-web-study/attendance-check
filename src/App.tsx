import React, { useState } from 'react';
import './App.css';
import SpecialAward from './components/SpecialAward/SpecialAward';
import Calendar from './components/Calendar/Calendar';
import AttendanceAward from './components/AttendanceAward/AttendanceAward';

// export type PopupType = {
//   open: boolean
// }

function App() {
  return (
    <div className="App">
      <div className="line"></div>
      <Calendar />
      <div className="line"></div>
      <AttendanceAward />
      <SpecialAward />
    </div>
  );
}

export default App;
