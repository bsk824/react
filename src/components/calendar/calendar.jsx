import React, { useEffect, useState } from 'react';

const Calendar = () => {
  const [selectValue, setSelectValue] = useState(null);
  const [caleDays, setDays] = useState([]);
  const prevShowNum = 0;
  const nextShowNum = 0;
  
  const returnStr = (number) => {
    if(number < 10) number = '0' + number;
    return number;
  }

  const render = () => {
    let dayArry = [];
    const date = new Date();
    const utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
    const kstGap = 9 * 60 * 60 * 1000;
    const now = new Date(utc + kstGap);
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const todayStr = `${now.getFullYear()}${returnStr(now.getMonth() + 1)}${returnStr(now.getDate())}`;
    
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDay = null;

    if(selectValue != null) {
      const selectYear = selectValue.substring(0, 4);
      const selectMonth = returnStr(Number(selectValue.substring(4, 6)) - 1);
      const selectDay = returnStr(selectValue.substring(6, 8));
      const selectDate = new Date(selectYear, selectMonth, selectDay);
      currentYear = selectDate.getFullYear();
      currentMonth = selectDate.getMonth();
      currentDay = selectDate.getDay();
    }

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
      prevMonth = returnStr(prevMonth + 1);
      prevDayNum = returnStr(prevDayNum);
      let dateStr =  `${prevYear}${prevMonth}${prevDayNum}`;

      dayArry.push(
        {
          date: dateStr,
          day: prevDayNum,
          prev: true,
          today : (todayStr === dateStr) ? true : false,
          select : (selectValue === dateStr) ? true : false,
        }
      )
    }

    const endDay = new Date(currentYear, currentMonth + 1, 0);
    
    const nextDate = endDay.getDate();

    for (let days = 1; days <= nextDate; days++) {
      let year = currentYear;
      let month = currentMonth;
      month = returnStr(month + 1);
      days = returnStr(days);
      let dateStr = `${year}${month}${days}`;

      dayArry.push(
        {
          date: dateStr,
          day: days,
          today : (todayStr === dateStr) ? true : false,
          select : (selectValue === dateStr) ? true : false,
        }
      )
    }

    const nextDay = endDay.getDay();
    
    let showNextDay = (6 - nextDay === 6) ? 6 : 6 - nextDay;
    showNextDay = (showNextDay === 0) ? 7 : showNextDay;
    showNextDay = showNextDay + nextShowNum;

    for (let nextDayNum = 1; nextDayNum <= showNextDay; nextDayNum++) {
      let nextYear = currentYear;
      let nextMonth = currentMonth + 1;
      if(nextMonth > 11) {
        nextMonth = 0;
        nextYear = currentYear + 1;
      }
      nextMonth = returnStr(nextMonth + 1);
      nextDayNum = returnStr(nextDayNum);
      let dateStr =  `${nextYear}${nextMonth}${nextDayNum}`;

      dayArry.push(
        {
          date: dateStr,
          day: nextDayNum,
          next: true,
          today : (todayStr === dateStr) ? true : false,
          select : (selectValue === dateStr) ? true : false,
        }
      )
    }

    return dayArry;
  }

	useEffect(()=>{
    setDays(render());
  }, [selectValue]);

  const selectDate = (arg) => {
    setSelectValue(arg);
  }

  const setRender = (e) => {
    if(e.key === 'Enter') {
      setSelectValue(e.target.value);
    }
  }

  return(
    <>
      <input type="text" onKeyPress={setRender} />
      <div className='calendar'>
        <div>일</div>
        <div>월</div>
        <div>화</div>
        <div>수</div>
        <div>목</div>
        <div>금</div>
        <div>토</div>
        {caleDays.map(date => (
          <div
            key={date.date}
            onClick={()=>selectDate(date.date)}
            className={
              (date.today ? 'today ' : '')+
              (date.prev ? 'prev ': '')+
              (date.next ? 'next ': '')+
              (date.select ? 'select ': '')+
              (date.selected ? 'selected ': '')
            }
          >
            {date.day}
          </div>
        ))}
      </div>
    </>
  ) 
}

export default Calendar;