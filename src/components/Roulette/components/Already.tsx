import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import './PopMsg.css';

function Already() {
  return (
    <>
      <div className="row imog">
        <FontAwesomeIcon icon={solid('hands-clapping')}></FontAwesomeIcon>
      </div>
      <div className="row">
        오늘은 벌써 출첵 하셨네요! <br />
        내일 다시 만나요! ^_^
      </div>
      <div className="row">
        <div className="blue-box">
          <em className="tip">Coin 모오는 꿀팁★</em>
          <br />
          newPay에서 게임하고
          <br />
          Coin 받아가세요!
        </div>
      </div>
    </>
  );
}

export default Already;
