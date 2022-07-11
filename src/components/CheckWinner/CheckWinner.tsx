import React from 'react';

import './CheckWinner.css';

function CheckWinner() {
  const gift_img = '/images/ico_surprise.png';
  const date = new Date();
  const month = date.getMonth() + 1;

  const prize_1 = '/images/img_prize01_2207.png';
  const prize_2 = '/images/img_prize02_2207.png';
  const prize_3 = '/images/img_prize03_2207.png';

  return (
    <div className="cont02">
      <ul>
        <li>
          <img className="icon" src={gift_img} alt="특별상 경품" />
          <h2>{month}월 특별상</h2>
          <p>{month}월 출석체크 회원 특별상 랜덤 지급!</p>
          <div className="prize01">
            <img src={prize_1} alt="1등 경품" />
          </div>
          <div className="prize02">
            <img src={prize_2} alt="2등 경품" />
          </div>
          <div className="prize03">
            <img src={prize_3} alt="3등 경품" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CheckWinner;
