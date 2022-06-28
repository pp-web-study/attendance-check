import React, { useState } from 'react';
import './Status.css';

type user = {
  dailyCheck: Array<boolean>;
  dailyCoin: Array<number>;
};

function Status() {
  function arraySum(numbers: Array<number>) {
    const result = numbers.reduce((prev, cur) => {
      return prev + cur;
    }, 0);
    return result;
  }

  function arrayCount(bools: Array<boolean>) {
    const result = bools.filter((bool) => {
      if (bool === true) {
        return true;
      }
      return false;
    });
    return result.length;
  }

  const [rate, setRate] = useState(0);
  const [user, setUser] = useState({
    dailyCheck: [true, false, true, false],
    dailyCoin: [1, 2, 3, 4],
  });

  return (
    <div className="wrapper">
      <div className="row">
        <div>
          <i></i> = 0.001PCI
        </div>
        <div>1PCI = {rate}원</div>
      </div>
      <div className="row">
        <div className="box">
          <div>
            <span className="title">누적 출석 횟수</span>
            <br />
            <span className="content">{arrayCount(user.dailyCheck)}회</span>
          </div>
          <div className="division">
            <hr className="vertical" />
          </div>
          <div>
            <span className="title">누적 획득 PCI</span>
            <br />
            <span className="content">{arraySum(user.dailyCoin)}</span>
          </div>
        </div>
      </div>
      <div className="row">
        <span>
          <i></i>당첨되신 PCI는 <em>24시간 이내 지급되며,</em> 즉시 사용이
          가능합니다.
        </span>
      </div>
    </div>
  );
}

export default Status;
