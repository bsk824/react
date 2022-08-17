import React, { useState } from 'react';
import CalendarInput from './calendar_input';
import CalendarDate from './calendar_date';

const Calendar = ({param}) => {

  const [option] = useState({
    type: (param && param.type) ? param.type : null,
    prevShowLine: (param && param.prevShowLine) ? param.prevShowLine : 0,
    nextShowLine: (param && param.nextShowLine) ? param.nextShowLine : 0,
    minDate: (param && param.minDate) ? param.minDate : null,
    maxDate: (param && param.maxDate) ? param.maxDate : null,
  });

  const [selectValue, setSelectValue] = useState(null);
  const [periodValue, setPeriodValue] = useState({start: null, end: null});
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
  
  const returnStr = (number) => {
    if(number < 10) number = '0' + number;
    return number;
  }

  const setRender = (arg) => {
    setYear(arg.year);
    setMonth(arg.month);
    setSelectValue(arg.selectVal);
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
 
  return(
    <>
      <button onClick={prevMonth}>prev</button>
      <CalendarInput
        option={option}
        onSet={setRender}
        value={selectValue}
        periodValue={periodValue}
      />
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
        <CalendarDate
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          periodValue={periodValue}
          setPeriodValue={setPeriodValue}
          currentYear={currentYear}
          currentMonth={currentMonth}
          option={option}
        />
      </div>
    </>
  ) 
}

export default Calendar;