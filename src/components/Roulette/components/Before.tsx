import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import './PopMsg.css';

interface ModalDefaultType {
  prizeNumber: number;
}

function Before({ prizeNumber }: ModalDefaultType) {
  return (
    <>
      <div className="row imog">
        <FontAwesomeIcon icon={solid('champagne-glasses')}></FontAwesomeIcon>
      </div>
      <div className="row">축하합니다 {prizeNumber}에 당첨되셨습니다!</div>
      <div className="row">
        <div className="blue-box">
          <em className="tip">1등의 꿈★은 이루어진다.</em>
          <br />
          내일도 출석체크
          <br />
          룰렛에서 만나요!
        </div>
      </div>
    </>
  );
}

export default Before;
