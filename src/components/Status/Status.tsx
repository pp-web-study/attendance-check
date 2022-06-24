import React from 'react';
import { resourceLimits } from 'worker_threads';

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
}
