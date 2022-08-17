import React from 'react';
import Calendar from 'components/calendar/calendar';

function GuideInfo() {
  return (
    <>
      <Calendar param={{
        type : '기간',
        prevShowLine : 0,
        nextShowLine : 0,
        minDate : 20220801,
        maxDate : 20220815,
      }}/>
    </>
  );
}

export default GuideInfo;