import React, { useEffect, useState } from 'react';

const CalendarDate = ({
  option,
  selectValue,
  setSelectValue,
  periodValue,
  setPeriodValue,
  currentYear,
  currentMonth,
}) => {
  const [calDays, setDays] = useState([]);
  
  const returnStr = (number) => {
    if(number < 10) number = '0' + number;
    return number;
  }
  
  const selectDate = (arg) => {
    if(option.type === '기간') {
      if(periodValue.start === null) {
        periodValue.start = arg;
      } else if(arg > periodValue.start) {
        if(periodValue.end === null) {
          periodValue.end = arg;
        } else {
          periodValue.start = arg;
          periodValue.end = null;
        }
      } else if(arg <= periodValue.start) {
        periodValue.start = arg;
        periodValue.end = null;
      }
      setPeriodValue({...periodValue})
    } else {
      setSelectValue(arg);
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
    if(obj.start) resultMake('start');
    if(obj.end) resultMake('end');
    if(obj.current) resultMake('current');

    return result;
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
      
      let showPrevDay = prevDate - (option.prevShowLine * 7) - prevDay;
      
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
          start: (periodValue.start === dateStr) ? true : false,
          end: (periodValue.end === dateStr) ? true : false,
          current: (periodValue.start < dateStr && periodValue.end > dateStr) ? true : false,
          disabled: (dateStr <= option.minDate || dateStr >= option.maxDate) ? true : false,
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
          start: (periodValue.start === dateStr) ? true : false,
          end: (periodValue.end === dateStr) ? true : false,
          current: (periodValue.start < dateStr && periodValue.end > dateStr) ? true : false,
          disabled: (dateStr <= option.minDate || dateStr >= option.maxDate) ? true : false,
        })
      }
  
      const nextDay = endDay.getDay();
      
      let showNextDay = (6 - nextDay === 6) ? 6 : 6 - nextDay;
      showNextDay = (showNextDay === 0) ? 7 : showNextDay;
      showNextDay = showNextDay + (option.nextShowLine * 7);
  
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
          start: (periodValue.start === dateStr) ? true : false,
          end: (periodValue.end === dateStr) ? true : false,
          current: (periodValue.start < dateStr && periodValue.end > dateStr) ? true : false,
          disabled: (dateStr <= option.minDate || dateStr >= option.maxDate) ? true : false,
        })
      }
  
      return dayArry;
    }
    setDays(render());
  }, [selectValue, periodValue, currentYear, currentMonth, option]);

  return(
    <>
      {calDays.map(date => (
        <div
          key={date.date}
          onClick={date.disabled ? null : ()=>selectDate(date.date)}
          className={classRender(date)}
        >
          {date.day}
        </div>
      ))}
    </>
  ) 
}

export default CalendarDate;