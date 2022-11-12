import React, { useState, useEffect } from 'react';

const Images = () => {
  const [image, setImage] = useState([])

  useEffect(() => {
    const API_URL = 'http://localhost:3000/api/v1/images'
    fetch(API_URL, { headers: { } })
      .then(response => response.json())
      .then(data => {
        let imagesArray = data.map(obj => <div key={obj.url}>{obj.url} {obj.description}</div>)
        setImage(imagesArray)
      })
  }, [])
    return (
    <div>{image}</div>
  )
}

export default Images;