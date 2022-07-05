import React, { useState } from 'react';

function Invitation() {
  const goInviteEvent = function () {
    console.log('move to invitation event page');
  };

  return (
    <div onClick={goInviteEvent}>
      <div>
        <div>
          <span>PCI 더 받고 싶다면</span>
          <br />
          <em>친구추천 하고 PCI 받으세요!</em>
          <br />
          <span>친구 추천하기&gt;</span>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Invitation;
