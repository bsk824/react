import React, { useEffect } from 'react';

const Canvas = () => {
  let wrap = null;
  let items = null;
  const init = () => {
    wrap = document.querySelector('canvas');
    items = wrap.getContext('2d');
    const width = window.innerWidth;
    wrap.setAttribute('width', width);

  }
  const scrollNum = (scrollTop, start, end) => {
    let result;
    if(scrollTop >= start && scrollTop <= end) {
      result = (scrollTop - start) / (end - start);
    } else if (scrollTop > end) {
      result = 1; 
    } else {
      result = 0;
    }
    console.log(result);
  }
  const calcNum = (val, time) => {
    const result = val / (time * 60);
    return result;
  }
  const objSet = idx => {
    const x = (idx * 17) + 2.5;
    items.strokeStyle = '#40BFDD';
    items.beginPath();
    items.lineWidth = 5;
    items.lineCap = 'round';
    items.moveTo(x, 58);
    items.lineTo(x, 58);
    items.stroke();
  }
  const modFunc = () => {
    const yArry = [75, 61, 73, 54, 61, 56, 46, 24, 40, 53, 42, 50];
    const hArry = [20, 24, 32, 40, 16, 36, 24, 56, 24, 20, 40, 16];
    const mod = (idx) => {
      let y = 58;
      let calcY = y - yArry[idx];
      let h = 58;
      let calcH = yArry[idx] + hArry[idx] - h;
      const x = (idx * 17) + 2.5;
      const objMod = () => {
        if(h < yArry[idx] + hArry[idx]) {
          if(58 - yArry[idx] < 0) {
            items.clearRect(x - 2.5, 0, 10, y);
            y = y - calcNum(calcY, 1.2);
          } else {
            y = y - calcNum(calcY, 1.2);
          }
          h = h + calcNum(calcH, 1.2);
          items.beginPath();
          items.moveTo(x, y);
          items.lineTo(x, h);
          items.stroke();
          window.requestAnimationFrame(objMod);
        }
      }
      objMod();
    }
    for(let idx = 0; idx <= 11; idx++) {
      mod(idx);
    }
  }

	useEffect(()=>{
    init();
    for(let idx = 0; idx <= 11; idx++) {
      objSet(idx);
    }
    setTimeout(()=>{
      modFunc();
    },1000);

    window.addEventListener('scroll',()=> {
      scrollNum(window.scrollY, 1000, 5000);
    })
  
  });
  return (
    <>
      <canvas height='10000'></canvas>
    </>
  )
}

export default Canvas;