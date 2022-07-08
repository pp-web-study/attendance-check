import React, { useState } from 'react';
import './SpecialAward.css';
import SpecialAwardPopUp from './SpecialAwardPopUp';

type openProps = { open: boolean };
const SpecialAward = (open: openProps) => {
  const [btnState, setBtnState] = useState(false);

  const handleBtnClick = () => {
    setBtnState((click: boolean) => !click);
  };

  return (
    <div>
      <div className="announce">
        <img
          className="announceIcon"
          src="/images/ico_announcement.png"
          alt="발표일정"
        />
        <h2 className="announceDate">발표일정</h2>
        <p>
          5월5일 (당첨자 발표 및 PCI 지급일)
          <br />
          *3월 당첨자의 경우 4월 10일 발표
        </p>
        <button className="buttonWinner" type="button" onClick={handleBtnClick}>
          2월 당첨자 확인
        </button>
      </div>
      {btnState && <SpecialAwardPopUp />}
    </div>
  );
};

export default SpecialAward;
