import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormError from './FormError';

const Score = (props) => {
  const [formComplete, setFormComplete] = useState(false)
  const [name, setName] = useState('')
  const [scores, setScores] = useState([])
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setName(e.target.value)
    setError(false)
  }

  const checkValidity = () => {
    return name.trim().length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(checkValidity(name)){
      return setError(true)
    }else {
      setError(false)
    }
    fetch(`http://localhost:3000/api/v1/scores`, {
      method: 'post',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({score: {name: name, image_id: props.id, time: props.score}})
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
        { error ? <FormError id='name' /> : null }
          <input id='name' type='text' name='name' value={name} onChange={handleChange} placeholder='Name' required/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
    </>
  )
}

export default Score;