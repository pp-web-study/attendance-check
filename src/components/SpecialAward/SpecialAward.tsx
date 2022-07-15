import React, { useCallback, useState } from 'react';
import Button from '../Button/Button';
import './SpecialAward.css';
import SpecialAwardPopUp from './SpecialAwardPopUp';

const SpecialAward = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <div>
      <div className="announce">
        <img
          className="announceIcon"
          src="/images/ico_announcement.png"
          alt="발표일정"
        />
        <h2 className="announceDate">발표일정</h2>
        <p>
          5월5일 (당첨자 발표 및 PCI 지급일)
          <br />
          *3월 당첨자의 경우 4월 10일 발표
        </p>
        <Button name="당첨자 확인" onClick={onClickModal} />
      </div>
      {isOpenModal && <SpecialAwardPopUp onClickModal={onClickModal} />}
    </div>
  );
};

export default SpecialAward;
