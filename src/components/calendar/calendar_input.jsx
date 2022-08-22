import React from 'react';

const CalendarInput = ({option, onSet, value, periodValue}) => {

  const setRender = (e) => {
    const val = e.target.value;
    const valY = Number(val.substring(0,4));
    const valM = Number(val.substring(4,6)) - 1;
    const valD = Number(val.substring(6,8));
    const valDate = new Date(valY, valM, valD);

    if(e.key === 'Enter' && valM < 12 && valDate.getFullYear() === valY && valDate.getMonth() === valM) {
      if(option.type === '기간') {
        
      } else {
        onSet({
          'year' : valY,
          'month' : valM,
          'selectVal' : val,
        })
      }
    }
  }
  
  return (
    (option.type === '기간')
      ?
      <>
        <input type="text" onKeyPress={setRender} placeholder={periodValue.start} />
        <span>~</span>
        <input type="text" onKeyPress={setRender} placeholder={periodValue.end} />
      </>
      :
      <input type="text" onKeyPress={setRender} placeholder={value} />
  )
}

export default CalendarInput