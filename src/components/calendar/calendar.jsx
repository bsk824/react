import React from 'react';

const Calendar = () => {
  const date = new Date();
  const utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
  const kstGap = 9 * 60 * 60 * 1000;
  const today = new Date(utc + kstGap);
  // const thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const thisMonth = new Date('2022', '01', '01');

  let currentYear = thisMonth.getFullYear();
  let currentMonth = thisMonth.getMonth();
  let currentDate = thisMonth.getDate();
  
  let dateMap = new Array;
  const renderCalender = (thisMonth) => {
    currentYear = thisMonth.getFullYear();
    currentMonth = thisMonth.getMonth();
    currentDate = thisMonth.getDate();

    let startDay = new Date(currentYear, currentMonth, 0);
    let prevDate = startDay.getDate();
    let prevDay = startDay.getDay();

    let endDay = new Date(currentYear, currentMonth + 1, 0);
    let nextDate = endDay.getDate();
    let nextDay = endDay.getDay();
    
    for (let idx = prevDate - prevDay; idx <= prevDate; idx++) {
      let prevMonth = currentMonth - 1;
      if(prevMonth < 10) prevMonth = '0'+prevMonth;
      if(idx < 10) idx = '0'+idx;
      dateMap.push([currentYear, prevMonth, idx]);
    }
    for (let idx = 1; idx <= nextDate; idx++) {
      let nowMonth = currentMonth;
      if(nowMonth < 10) nowMonth = '0'+nowMonth;
      if(idx < 10) idx = '0'+idx;
      dateMap.push([currentYear, nowMonth, idx]);
    }
    for (let idx = 1; idx <= (6 - nextDay == 6 ? 0 : 6 - nextDay); idx++) {
      let nextMonth = currentMonth + 1;
      if(nextMonth < 10) nextMonth = '0'+nextMonth;
      if(idx < 10) idx = '0'+idx;
      dateMap.push([currentYear, nextMonth, idx]);
    }
  }
  renderCalender(thisMonth);
  const returnDate = (key) => {
    console.log(key);
  }
  return(
    <>
      {dateMap.map(date => (
        <div key={`${date[0]}${date[1]}${date[2]}`} onClick={()=>returnDate(`${date[0]}${date[1]}${date[2]}`)}>{date[2]}</div>
			))}
    </>
  ) 
}

export default Calendar;