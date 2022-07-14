import React, { useState, useCallback } from 'react';
import { Wheel } from 'react-custom-roulette';

import Modal from './components/Modal';
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

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [isOpenModal, setOpenModal] = useState(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div className="roulette-box">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={['#3e3e3e', '#df3428']}
        textColors={['#ffffff']}
        onStopSpinning={() => {
          setMustSpin(false);
          setOpenModal(!isOpenModal);
        }}
      ></Wheel>
      <button onClick={handleSpinClick} className="roulette-btn">
        SPIN
      </button>
      {isOpenModal && (
        <Modal
          onClickModal={onClickToggleModal}
          prizeNumber={prizeNumber}
        ></Modal>
      )}
      <button onClick={onClickToggleModal}>Open Modal</button>
    </div>
  );
}

export default Roulette;
