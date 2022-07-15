import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import Button from '../Button/Button';
import './SpecialAwardPopUp.css';

interface ModalDefaultType {
  onClickModal: () => void;
}

const SpecialAwardPopUp = ({ onClickModal }: ModalDefaultType) => {
  const popClose = () => {
    // e.preventDefault();

    if (onClickModal) {
      onClickModal();
    }
  };

  return (
    <>
      <div className="popWinner">
        <div className="dimmed" />
        <div className="popWinnerContent">
          <div className="postion">
            <div className="topGradation" />
            <div className="winnerIcon">
              <img src="/images/ico_trophy.png" alt="당첨자 안내 트로피" />
            </div>
            <div className="contInner">
              <div className="all">
                <div className="winner">
                  <h2>특별상 당첨자</h2>
                  <div className="winnerCheck">
                    <span>이름 + 휴대폰 번호 뒷 4자리로 조회하세요</span>
                  </div>
                  <ul>
                    <li>
                      <div className="winnerBox winnerlist">
                        <div className="winnerNumbers">
                          <img src="" alt="1등 당첨자" />
                        </div>
                        <div className="prizeTitle">
                          <span>
                            <em>1등</em>
                            스위스 자유여행 패키지
                          </span>
                          <h3>정*원 1234</h3>
                          <h3>정*투 2345</h3>
                          <h3>정*쓰리 3456</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="winnerBox">
                        <div className="winnerNumbers">
                          <img src="" alt="2등 당첨자" />
                        </div>
                        <div className="prizeTitle">
                          <span>
                            <em>2등</em>
                            일본 자유여행 패키지
                          </span>
                          <h3>김*지 1234</h3>
                          <h3>김*투 2345</h3>
                          <h3>김*쓰리 3456</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="winnerBox winnerlist">
                        <div className="winnerNumbers">
                          <img src="" alt="3등 당첨자" />
                        </div>
                        <div className="prizeTitle">
                          <span>
                            <em>3등</em>
                            제주도 자유여행
                          </span>
                          <h3>유*규 1234</h3>
                          <h3>유*투 2345</h3>
                          <h3>유*쓰리 3456</h3>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="buttonGradation">
              <Button name="닫기" onClick={popClose} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialAwardPopUp;
