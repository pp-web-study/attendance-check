import React, { useState } from 'react';
import './App.css';
import SpecialAward from './components/SpecialAward/SpecialAward';
import Calendar from './components/Calendar/Calendar';
import AttendanceAward from './components/AttendanceAward/AttendanceAward';
import CheckWinner from './components/CheckWinner/CheckWinner';

// export type PopupType = {
//   open: boolean
// }

function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="App">
      <div className="line"></div>
      <Calendar />
      <div className="line"></div>
      <AttendanceAward />
      <CheckWinner />
      <SpecialAward open={open} />
    </div>
  );
}

export default App;
