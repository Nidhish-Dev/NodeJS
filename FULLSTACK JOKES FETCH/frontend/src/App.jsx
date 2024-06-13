import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
const [jokes, setJokes] = useState([])
useEffect(()=>{
  axios.get('/api/jokes')
  .then((response)=>{
    setJokes(response.data)
  })
  .catch((error)=>{
    console.log(error);
  })
})

  return (
    <>
      <p className='heading'>Jokes</p>
      {
        jokes.map((joke)=>(
          <div className='joke-container' key={joke.id}>
            <p>{joke.id}.</p>
            <p>{joke.title}</p>
          </div>
          
        ))
      }
    </>
  )
}

export default App
