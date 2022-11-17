import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Score = (props) => {
  const [formComplete, setFormComplete] = useState(false)
  const [name, setName] = useState('')
  const [scores, setScores] = useState([])

  const handleChange = (e) => {
    setName(e.target.value)
  }

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/scores', {
      method: 'get',
      headers:{
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => setScores(
      data.map(score => 
        <div className='score' key={score.id}>
          <h3>Name: {score.name} </h3>
          <h3>Time: {score.time}</h3>
        </div>
      )
    ))
  }, [formComplete])

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/api/v1/scores`, {
      method: 'post',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: name, image_id: props.id, time: props.score})
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((err) => console.log("Error boi is: ", err))
    setFormComplete(true)
  }

  return (
    formComplete ?
    <div className='blur-container'>
      <div className='high-scores'>
      <h1>High Scores</h1>
        {scores}
        <Link to="/" className='home-btn'>Home</Link>
      </div>
    </div>
    :
    <>
    <div className='blur-container'>
      <form className='form'>
        <div>Congrats you found Waldo!</div>
        <label>Enter Name</label>
        <input value={name} onChange={handleChange} placeholder='Name'/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
    </>
  )
}

export default Score;