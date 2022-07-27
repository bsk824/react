import React, { useEffect, useState } from 'react';

const Calendar = () => {
  const [calType] = useState('period');
  const [selectValue, setSelectValue] = useState(null);
  const [calDays, setDays] = useState([]);
  const [currentYear, setYear] = useState(()=>{
    const date = new Date();
    const utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
    const kstGap = 9 * 60 * 60 * 1000;
    const now = new Date(utc + kstGap);
    return now.getFullYear();
  });
  const [currentMonth, setMonth] = useState(()=>{
    const date = new Date();
    const utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
    const kstGap = 9 * 60 * 60 * 1000;
    const now = new Date(utc + kstGap);
    return now.getMonth();
  });
  const prevShowNum = 0;
  const nextShowNum = 0;
  
  const returnStr = (number) => {
    if(number < 10) number = '0' + number;
    return number;
  }

  const selectDate = (arg) => {
    setSelectValue(arg);
  }

  const setRender = (e) => {
    const val = e.target.value;
    const valY = Number(val.substring(0,4));
    const valM = Number(val.substring(4,6)) - 1;
    const valD = Number(val.substring(6,8));
    const valDate = new Date(valY, valM, valD);

    if(e.key === 'Enter') {
      if(valM < 12 && valDate.getFullYear() === valY && valDate.getMonth() === valM) {
        setYear(valY);
        setMonth(valM);
        setSelectValue(val);
      }
    }
  }

  const classRender = (obj) => {
    let result = null;
    const resultMake = (val) => {
      if(result !== null) {
        result += ' ' + val;
      } else {
        result = val;
      }
    }
    
    if(obj.today) resultMake('today');
    if(obj.prev) resultMake('prev');
    if(obj.next) resultMake('next');
    if(obj.select) resultMake('select');
    if(obj.selected) resultMake('selected');

    return result;
  }

  const prevMonth = () => {
    if(currentMonth === 0) {
      setYear(currentYear - 1);
      setMonth(11);
    } else {
      setMonth(currentMonth - 1);
    }
  }

  const nextMonth = () => {
    if(currentMonth === 11) {
      setYear(currentYear + 1);
      setMonth(0);
    } else {
      setMonth(currentMonth + 1);
    }
  }

	useEffect(()=>{
    const render = () => {
      let dayArry = [];
      const date = new Date();
      const utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
      const kstGap = 9 * 60 * 60 * 1000;
      const now = new Date(utc + kstGap);
      const todayStr = `${now.getFullYear()}${returnStr(now.getMonth() + 1)}${returnStr(now.getDate())}`;
      
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
  
        dayArry.push({
          date: dateStr,
          day: prevDayNum,
          prev: true,
          today : (todayStr === dateStr) ? true : false,
          select : (selectValue === dateStr) ? true : false,
        })
      }
  
      const endDay = new Date(currentYear, currentMonth + 1, 0);
      
      const nextDate = endDay.getDate();
  
      for (let days = 1; days <= nextDate; days++) {
        let year = currentYear;
        let month = currentMonth;
        month = returnStr(month + 1);
        days = returnStr(days);
        let dateStr = `${year}${month}${days}`;
  
        dayArry.push({
          date: dateStr,
          day: days,
          today : (todayStr === dateStr) ? true : false,
          select : (selectValue === dateStr) ? true : false,
        })
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
  
        dayArry.push({
          date: dateStr,
          day: nextDayNum,
          next: true,
          today : (todayStr === dateStr) ? true : false,
          select : (selectValue === dateStr) ? true : false,
        })
      }
  
      return dayArry;
    }
    setDays(render());
  }, [selectValue, currentYear, currentMonth]);

  return(
    <>
      <button onClick={prevMonth}>prev</button>
      <input type="text" onKeyPress={setRender} placeholder={selectValue} />
      {currentYear}
      {returnStr(currentMonth + 1)}
      <button onClick={nextMonth}>next</button>
      <div className='calendar'>
        <div>일</div>
        <div>월</div>
        <div>화</div>
        <div>수</div>
        <div>목</div>
        <div>금</div>
        <div>토</div>
        {calDays.map(date => (
          <div
            key={date.date}
            onClick={()=>selectDate(date.date)}
            className={classRender(date)}
          >
            {date.day}
          </div>
        ))}
      </div>
    </>
  ) 
}

export default Calendar;