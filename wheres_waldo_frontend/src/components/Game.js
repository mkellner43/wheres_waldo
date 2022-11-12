import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Game = (props) => {
  const [timer, setTimer] = useState(0)

  useEffect(()=> {
    const time = setTimeout(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000)

    return () => {
      clearInterval(time)
    }
  }, [timer])
  
  const findImage = () => {
    if(props.mode === 'easy'){
      return require('../images/skiSlopes.jpeg')
    } else if(props.mode === 'medium') {
      return require('../images/spaceStation.jpeg')
    } else {
      return require('../images/fruitLand.jpeg')
    }
  }

  const handleClick = (e) => {
    console.log(e)
  }

  const timerConverter = () => {
    const min = timer / 3600
  }

  return (
    <section className='game'>
      <header className="header">
        <h1>Where's Waldo?</h1>
      </header>
      <Link to="/"><div className='home-btn'>Home</div></Link>
      {/* <div className='timer'>{timer}</div> */}
      <div className='game-chars'>
        <div className='timer'>{timer}</div>
        <img src={require('../images/character1.jpeg')} alt="character 1"></img>
        <img src={require('../images/character2.jpg')} alt="character 2"></img>
        <img src={require('../images/character3.jpg')} alt="character 3"></img>
        <img src={require('../images/character4.jpg')} alt="character 4"></img>
      </div>
      <img className="game-image" src={findImage()} alt={props.mode} onClick={handleClick}/>
    </section>
  )
}

export default Game;