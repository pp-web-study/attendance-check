import React, { useState, useEffect } from 'react';

import './Calendar.css';

function Calendar() {
  const [tableData, setTableData] = useState<object[]>([]);

  const today: Date = new Date();

  const monthInfo: Date = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0,
  );
  const endDate: number = monthInfo.getDate();
  const preEndDay: number = new Date(
    today.getFullYear(),
    today.getMonth(),
    0,
  ).getDay();

  // 달력 그리기
  const drawCalendar = () => {
    setTableData([]);
    const row: number = Math.ceil(endDate / 7);
    let cnt = 1;

    for (let i = 0; i < row; i++) {
      const tempArr: number[] = [];

      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j <= preEndDay) || cnt > endDate) {
          tempArr.push(0);
        } else {
          tempArr.push(cnt);
          cnt++;
        }
      }
      setTableData((tableData) => [...tableData, tempArr]);
    }
  };

  // 출석한 날 체크
  const checkAttendance = () => {
    // 1. 출석정보 가져오기
    // 2. if문 이용하여 출석 체크해주기
    for (let cnt = 1; cnt <= endDate; cnt++) {
      if (cnt % 10 === 0) {
        document.getElementById(String(cnt))?.classList.add('on');
      }
    }
  };

  useEffect(() => {
    drawCalendar();
  }, []);

  useEffect(() => {
    checkAttendance();
  }, [tableData]);

  return (
    <div className="calendar" id="calendar">
      <table id="month_table">
        <caption>
          <span id="month">{today.getMonth() + 1}</span>월
        </caption>
        <tbody id="ID_TBODY">
          <tr>
            <td>일</td>
            <td>월</td>
            <td>화</td>
            <td>수</td>
            <td>목</td>
            <td>금</td>
            <td>토</td>
          </tr>
          {/* TODO: trData 형식 any에서 알맞은 것으로 변경 */}
          {tableData.map((trData: any, idx: number) => (
            <tr key={idx}>
              {trData.map((val: number, i: number) =>
                val ? (
                  <td id={String(val)} key={i}>
                    {val}
                  </td>
                ) : (
                  <td></td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
