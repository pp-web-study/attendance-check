import React, { useState } from 'react';
import './SpecialAward.css';
import SpecialAwardPopUp from './SpecialAwardPopUp';

function SpecialAward() {
  const [open, setOpen] = useState<boolean>(false);
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
        <button className="buttonWinner" type="button">
          2월 당첨자 확인
        </button>
      </div>
      <SpecialAwardPopUp open={open} />
    </div>
  );
}

export default SpecialAward;
