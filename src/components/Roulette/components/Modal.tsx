import React, { useState } from 'react';

import Already from './Already';
import Before from './Before';
import './Modal.css';

interface ModalDefaultType {
  onClickModal: () => void;
  prizeNumber: number;
}

function Modal({ onClickModal, prizeNumber }: ModalDefaultType) {
  const popClose = () => {
    if (onClickModal) {
      onClickModal();
    }
  };

  const [isAlready, setIsAlready] = useState(false);

  const changeCheckStatus = function () {
    setIsAlready(!isAlready);
  };

  return (
    <div className="popWinner">
      <div className="dimmed" />
      <div className="white-background">
        <div className="position">
          <div className="modal-content">
            {isAlready ? <Already /> : <Before prizeNumber={prizeNumber} />}
            <div className="row">
              <button className="close-btn" onClick={popClose}>
                닫기
              </button>
              <button className="game-btn" onClick={changeCheckStatus}>
                게임하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
