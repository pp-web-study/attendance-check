import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import './SpecialAwardPopUp.css';

// type openProps = { open: boolean };
const SpecialAwardPopUp = () => {
  return (
    <>
      <div className="popWinner">
        <div className="dimmed" />
        <div className="popWinnerContent">
          <div className="postion">
            <div className="topGradation" />
            <div className="winnerIcon">
              <img
                className="img_trophy"
                src="/images/ico_trophy.png"
                alt="당첨자 안내 트로피"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialAwardPopUp;
