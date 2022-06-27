import React, { useState } from 'react';

type user = {
  dailyCheck: Array<boolean>;
  dailyCoin: Array<number>;
};

type userProps = {
  user: user;
};

function Status(props: userProps) {
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

  return (
    <div className="wrapper">
      <div className="row">
        <div className="unit"></div>
        <div className="rate">{rate}</div>
      </div>
      <div className="row">
        <div className="box">
          <div className="count">{arrayCount(props.user.dailyCheck)}</div>
          <div className="division"></div>
          <div className="sum">{arraySum(props.user.dailyCoin)}</div>
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
