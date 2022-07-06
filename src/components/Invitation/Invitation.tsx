import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Invitation.css';

function Invitation() {
  const goInviteEvent = function () {
    console.log('move to invitation event page');
  };

  return (
    <div onClick={goInviteEvent} className="background">
      <div className="box">
        <div className="spanBox">
          <span className="thick">PCI 더 받고 싶다면</span>
          <br />
          <em className="thick">친구추천 하고 PCI 받으세요!</em>
          <br />
          <span className="thin">친구 추천하기&gt;</span>
        </div>
      </div>
      <div className="imobox">
        <FontAwesomeIcon icon={solid('handshake')}></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default Invitation;
