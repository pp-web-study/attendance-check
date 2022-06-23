import React from 'react';
import './SpecialAward.css';

function SpecialAward() {
  return (
    <div className="announce">
      <img className="icon" src="/images/ico_announcement.png" alt="발표일정" />
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
  );
}

export default SpecialAward;
