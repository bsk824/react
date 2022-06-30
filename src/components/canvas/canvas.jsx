import React, { useEffect, useState } from 'react';

const Canvas = () => {
  let wrap;
  let item;
  let raf;
  let y = 36;
  let h = 5;
  const set = () => {
    item.beginPath();
    item.fillRect(10, y, 5, h);
    item.fill();
  }
  const draw = () => {
    h = h + 0.93;
    y = y - 0.54;
    item.clearRect(0,0, wrap.width, wrap.height);
    item.beginPath();
    item.fillRect(10, y, 5, h);
    item.fill();
    console.log(h, y);
    if(h < 67) {
      raf = window.requestAnimationFrame(draw);
    } else {
      window.cancelAnimationFrame(draw);
    }
  }
	useEffect(()=>{
    wrap = document.querySelector('canvas');
    item = wrap.getContext('2d');
    const width = window.innerWidth;
    wrap.setAttribute('width', width);
    
    set();
  
  }, []);
  return (
    <>
      <canvas height='500' onClick={draw}></canvas>
    </>
  )
}

export default Canvas;