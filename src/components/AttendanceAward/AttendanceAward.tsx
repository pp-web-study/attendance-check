import React from 'react';

import './AttendanceAward.css';

function AttendanceAward() {
  const run_img = '/images/running.png';

  return (
    <div className="cont01">
      <img className="icon" src={run_img} alt="페이코인 개근상" />
      <h2>페이코인 개근상</h2>
      <ul>
        <li>
          <span>대상</span>
          <p>
            7월 APP 출석 체크 개근 고객
            <br />
            (매월 1일~말일)
          </p>
        </li>
        <li>
          <span>개근상</span>
          <p>
            무조건! 한 달 개근 시 한 달간 본인이
            <br />
            출석체크 이벤트로 당첨된 PCI의 2배 지급
          </p>
        </li>
      </ul>
    </div>
  );
}

export default AttendanceAward;
