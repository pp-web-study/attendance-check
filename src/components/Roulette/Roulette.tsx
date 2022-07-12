import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import './Roulette.css';

function Roulette() {
  const [data, setData] = useState([
    { option: '0', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '1', style: { backgroundColor: 'orange', textColor: 'black' } },
    { option: '2', style: { backgroundColor: 'yellow', textColor: 'black' } },
    { option: '3', style: { backgroundColor: 'green', textColor: 'black' } },
    { option: '4', style: { backgroundColor: 'blue', textColor: 'black' } },
    { option: '5', style: { backgroundColor: 'indigo', textColor: 'black' } },
    { option: '6', style: { backgroundColor: 'purple', textColor: 'black' } },
  ]);

  return (
    <div className="roulette-box">
      <Wheel
        mustStartSpinning={true}
        prizeNumber={1}
        data={data}
        backgroundColors={['#3e3e3e', '#df3428']}
        textColors={['#ffffff']}
      ></Wheel>
      <button></button>
    </div>
  );
}

export default Roulette;
