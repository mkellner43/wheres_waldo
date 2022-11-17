import React, { useEffect, useState } from 'react';

const Timer = (props) => {

  const timerConverter = () => {
    let s = Math.floor(props.timer % 3600 % 60)
    let m = Math.floor(props.timer/60 % 60)
    let h = Math.floor(props.timer/3600)
    if(s < 10){
      s=`0${s}`
    }
    let finalString = h > 0 ? `${h}:${m}:${s}` : `${m}:${s}`
    return finalString
  }
  return (
    <div className='timer'>Your Time {timerConverter()}</div>
  )
}

export default Timer;