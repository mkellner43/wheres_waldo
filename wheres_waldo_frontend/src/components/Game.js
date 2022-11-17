import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Timer from './Timer';
import Score from './Scores';

const Game = (props) => {
  const [marker, setMarker] = useState([])
  const [data, setData] = useState([])
  const [win, setWin] = useState(false)
  const [timer, setTimer] = useState(0)
  const [charSeleted, setSelectedChar] = useState(
    {
     charOne: false,
     charTwo: false,
     charThree: false,
     charFour: false
    }
  )
  
  useEffect(() => {
    if(charSeleted.charOne && charSeleted.charTwo &&
       charSeleted.charThree && charSeleted.charFour){
        setWin(true)
       
       }
  }, [charSeleted])

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/images/${props.mode}`, {headers: {}})
    .then(response => response.json())
    .then(data => setData(data))
  },[props.mode])
  
  useEffect(()=> {
    if(win){
      return
    }
    const time = setTimeout(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000)

    return () => {
      clearInterval(time)
    }
  })

  const findImage = () => {
    if(props.mode === '1'){
      return require('../images/skiSlopes.jpeg')
    } else if(props.mode === '2') {
      return require('../images/spaceStation.jpeg')
    } else {
      return require('../images/fruitLand.jpeg')
    }
  }

  const checkClick = (x, y) => {
    for( let i = 0; i < data.length; i++){
      let result = {x_matched: false, y_matched: false , char: ''}
        if(x <= Number(data[i].x_location) + 1 && x >= Number(data[i].x_location) - 1){
          result.x_matched = true
      }
        if(y <= Number(data[i].y_location) + 1 && y >= Number(data[i].y_location) - 1){
          result.y_matched = true
        }
      if(result.x_matched && result.y_matched){
        
        result.char = data[i].name
        return result
      }
    }
  }

  const handleClick = (e) => {
    const y = (e.pageY - e.target.offsetParent.offsetTop) / (e.target.height) * 100
    const x = (e.pageX - e.target.offsetParent.offsetLeft) / (e.target.width) * 100
    let result = checkClick(x, y)
    if(result && !charSeleted[result.char]){
      setMarker(prevMarker => [...prevMarker, <div key={x} className='marker' style={{left: `calc(${x}% - 1rem)`, top: `calc(${y}% - 1rem)`}}></div>])
      document.getElementById(result.char).classList.add('found')
      setSelectedChar(prevCharSelected => {
        return  {...prevCharSelected, [result.char]: true }
       })
    }
  }

  return (
    <section className='game'>
      {charSeleted.charOne && charSeleted.charTwo &&
       charSeleted.charThree && charSeleted.charFour ?
       <Score score={timer} id={props.mode}/> 
      :
      undefined
      }
      <header className="header">
        <h1>Where's Waldo?</h1>
      </header>
      <div className='game-home'>
        <Link to="/" className='home-btn'>Home</Link>
        <Timer timer={timer}/>
      </div>
      <div className='game-chars'>
        <div>
          <img id='charOne' src={require(`../images/character1.jpeg`)} alt="character 1" />
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