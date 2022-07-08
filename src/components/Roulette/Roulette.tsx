import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

function Roulette() {
  const [data, setData] = useState([
    { option: '0', style: { backgroundColor: 'blue', textColor: 'black' } },
    { option: '1', style: { backgroundColor: 'white', textColor: 'black' } },
    { option: '2' },
  ]);

  return (
    <div>
      <Wheel
        mustStartSpinning={true}
        prizeNumber={1}
        data={data}
        backgroundColors={['#3e3e3e', '#df3428']}
        textColors={['#ffffff']}
      ></Wheel>
    </div>
  );
}

export default Roulette;
