import React from 'react';

const CalendarInput = ({onSet, value}) => {

  const setRender = (e) => {
    const val = e.target.value;
    const valY = Number(val.substring(0,4));
    const valM = Number(val.substring(4,6)) - 1;
    const valD = Number(val.substring(6,8));
    const valDate = new Date(valY, valM, valD);

    if(e.key === 'Enter') {
      if(valM < 12 && valDate.getFullYear() === valY && valDate.getMonth() === valM) {
        onSet({
          'year' : valY,
          'month' : valM,
          'selectVal' : val,
        })
      }
    }
  }
  
  return (
    <input type="text" onKeyPress={setRender} placeholder={value} />
  )
}

export default CalendarInput