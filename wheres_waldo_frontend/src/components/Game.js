import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Game = (props) => {
  const [timer, setTimer] = useState(0)
  const [marker, setMarker] = useState([])
  const [charSeleted, setSelectedChar] = useState(
    {
     charOne: false,
     charTwo: false,
     charThree: false,
     charFour: false
    }
  )
  const data = 
    {
     easy: { 
      charOne: {x: [84.74, 86.30], y: [70.58, 75.10]},
      charTwo: {x: [48.24, 49.83], y: [40.33, 43.89]},
      charThree: {x: [5.94, 7.5], y: [73.54, 77.73]},
      charFour: {x: [31.18, 32.24], y: [62.53, 64.42]},
    },
      medium: {
        charOne: {x: [40.05, 40.83], y: [61.39, 64.56]},
        charTwo: {x: [29.11, 29.84], y: [50.79, 52.85]},
        charThree: {x: [77.55, 78.64], y: [56.64, 58.78]},
        charFour: {x: [6.56, 7.5], y: [68.18, 69.78]},
    },
      hard: {
        charOne: {x: [88.75, 89.59], y: [65.56, 67.18]},
        charTwo: {x: [12.92, 13.7], y: [84, 85.61]},
        charThree: {x: [24.94, 25.57], y: [47.94, 49.72]},
        charFour: {x: [65.78, 66.41], y: [55.22,56.91]},
    }
    }

  useEffect(()=> {
    const time = setTimeout(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000)

    return () => {
      clearInterval(time)
    }
  }, [timer])

  useEffect(() => {
    if(charSeleted.charOne && charSeleted.charTwo &&
       charSeleted.charThree && charSeleted.charFour){
        alert('WINNER!!(:')
       }
  }, [charSeleted])
  
  const findImage = () => {
    if(props.mode === 'easy'){
      return require('../images/skiSlopes.jpeg')
    } else if(props.mode === 'medium') {
      return require('../images/spaceStation.jpeg')
    } else {
      return require('../images/fruitLand.jpeg')
    }
  }

  const checkClick = (x, y) => {
    let mode = props.mode
    let result = {xMatched: false, yMatched: false, char: ''}
    let coords = {x: x, y: y}
    fetch('http://localhost:3000')
    // for(let key in data[mode] ) {
    //   for(let key2 in data[mode][key]) {
    //     if(key2 === 'x') {
    //       if(x >= data[mode][key][key2][0] && x <= data[mode][key][key2][1]){
    //         result.xMatched = true
    //       }
    //     }
    //     if(key2 === 'y') {
    //       if(y >= data[mode][key][key2][0] && y <= data[mode][key][key2][1]){
    //         result.yMatched = true
    //       }
    //     }
    //   }
    //   if(result.xMatched && result.yMatched){
    //     result.char = key
    //     return result
    //   } else {
    //     result.xMatched = false
    //     result.yMatched = false
    //   }
    // }
    // return result
  }

  const handleClick = (e) => {
    const y = (e.pageY - e.target.offsetParent.offsetTop) / (e.target.height) * 100
    const x = (e.pageX - e.target.offsetParent.offsetLeft) / (e.target.width) * 100
    let result = checkClick(x, y)
    if(result.xMatched && result.yMatched){
      setMarker(prevMarker => [...prevMarker, <div key={x} className='marker' style={{left: `calc(${x}% - 1rem)`, top: `calc(${y}% - 1rem)`}}></div>])
      document.getElementById(result.char).classList.add('found')
      setSelectedChar(prevCharSelected => {
        return  {...prevCharSelected, [result.char]: true }
       })
    }
  }

  const timerConverter = () => {
    let s = Math.floor(timer % 3600 % 60)
    let m = Math.floor(timer/60 % 60)
    let h = Math.floor(timer/3600)
    if(s < 10){
      s=`0${s}`
    }
    let finalString = h > 0 ? `${h}:${m}:${s}` : `${m}:${s}`
    return finalString
  }

  return (
    <section className='game'>
      <header className="header">
        <h1>Where's Waldo?</h1>
      </header>
      <div className='game-home'>
        <Link to="/" className='home-btn'>Home</Link>
        <div className='timer'>Your Time {timerConverter()}</div>
      </div>
      <div className='game-chars'>
        <div>
          <img id='charOne' src={require('../images/character1.jpeg')} alt="character 1" />
        </div>
        <div>
          <img id="charTwo" src={require('../images/character2.jpg')} alt="character 2" />
        </div>
        <div>
          <img id="charThree" src={require('../images/character3.jpg')} alt="character 3" />
        </div>
        <div>
          <img id="charFour" src={require('../images/character4.jpg')} alt="character 4" />
        </div>
      </div>
      <div style={{position: 'absolute'}}>
        {marker}
        <img className="game-image" src={findImage()} alt={props.mode} onClick={handleClick} />
      </div>
    </section>
  )
}

export default Game;

//need to get timer to display hours mins and seconds propely, figure out how to get click coords regardless of image size, set up circles on faces when clicked, 