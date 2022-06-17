import React from 'react';

const Calendar = () => {

  const prevShowNum = 0;
  const nextShowNum = 0;
  let selectedDate = '20220430';
  
  const returnStr = (number) => {
    if(number < 10) number = '0' + number;
    return number;
  }

  const returnDateStr = (str) => {
    const year = str.substring(0, 4);
    const month = returnStr(Number(str.substring(4, 6)) + 1);
    const day = str.substring(6, 8);
    return `${year}${month}${day}`;
  }
  
  selectedDate = returnDateStr('20220430');

  let dayArry = [];

  const date = new Date();
  const utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
  const kstGap = 9 * 60 * 60 * 1000;
  const now = new Date(utc + kstGap);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const todayStr = `${now.getFullYear()}${returnStr(now.getMonth())}${returnStr(now.getDate())}`;
  
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const startDay = new Date(currentYear, currentMonth, 0);
  const prevDay = startDay.getDay();
  const prevDate = startDay.getDate();
  
  let showPrevDay = prevDate - prevShowNum - prevDay;
  
  for (let prevDayNum = showPrevDay; prevDayNum <= prevDate; prevDayNum++) {
    let prevYear = currentYear;
    let prevMonth = currentMonth - 1;
    if(prevMonth < 0) {
      prevMonth = 11;
      prevYear = currentYear - 1;
    }
    prevMonth = returnStr(prevMonth);
    prevDayNum = returnStr(prevDayNum);
    let date = new Date(prevYear, prevMonth, prevDayNum);
    let dateStr =  `${prevYear}${prevMonth}${prevDayNum}`;

    dayArry.push(
      {
        date: date,
        day: prevDayNum,
        prev: true,
        today : (todayStr === dateStr) ? true : false,
        selected : (selectedDate === dateStr) ? true : false,
      }
    )
  }

  const endDay = new Date(currentYear, currentMonth + 1, 0);
  
  const nextDate = endDay.getDate();

  for (let days = 1; days <= nextDate; days++) {
    let year = currentYear;
    let month = currentMonth;
    month = returnStr(month);
    days = returnStr(days);
    let date = new Date(year, month, days);
    let dateStr =  `${year}${month}${days}`;

    dayArry.push(
      {
        date: date,
        day: days,
        today : (todayStr === dateStr) ? true : false,
        selected : (selectedDate === dateStr) ? true : false,
      }
    )
  }

  const nextDay = endDay.getDay();

  let showNextDay = (6 - nextDay === 6) ? 0 : 6 - nextDay;
  showNextDay = showNextDay + nextShowNum;

  for (let nextDayNum = 1; nextDayNum <= showNextDay; nextDayNum++) {
    let nextYear = currentYear;
    let nextMonth = currentMonth + 1;
    if(nextMonth > 11) {
      nextMonth = 0;
      nextYear = currentYear + 1;
    }
    nextMonth = returnStr(nextMonth);
    nextDayNum = returnStr(nextDayNum);
    let date = new Date(nextYear, nextMonth, nextDayNum);
    let dateStr =  `${nextYear}${nextMonth}${nextDayNum}`;

    dayArry.push(
      {
        date: date,
        day: nextDayNum,
        next: true,
        today : (todayStr === dateStr) ? true : false,
        selected : (selectedDate === dateStr) ? true : false,
      }
    )
  }

  const returnDate = (arg) => {
    console.log(arg);
  }
  
  return(
    <>
      {dayArry.map(date => (
        <div
          key={date.date}
          onClick={()=>returnDate(date.date)}
          className={
            (date.today ? 'today ' : '')+
            (date.prev ? 'prev ': '')+
            (date.next ? 'next ': '')+
            (date.selected ? 'selected ': '')
          }
        >
          {date.day}
        </div>
			))}
    </>
  ) 
}

export default Calendar;