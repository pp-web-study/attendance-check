import React from 'react';

type user = {
  dailyCheck: Array<boolean>;
  dailyCoin: Array<number>;
};

type userProps = {
  user: user;
};

function Status(props: userProps) {}
