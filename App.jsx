import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

const App = () => {

  return (
    <div className="App">
      <img src="bored.jpg" ></img>
      <h1>Exciting Activities</h1>
      <h2> Try out some of these activities when you are bored and don't know what to do with yourself! </h2>
      <Card name = "Go on a walk" image = {<img src="walking.jpg" ></img>}/>
      <Card name = "Read a book" image = {<img src="walking.jpg" ></img>} />
      <Card name = "Draw" image = {<img src="walking.jpg" ></img>} />
      <Card name = "Bake a cake" image = {<img src="walking.jpg" ></img>} />
      <Card name = "Go for a swim" image = {<img src="walking.jpg" ></img>} />
      <Card name = "Watch TV" image = {<img src="walking.jpg" ></img>} />
      <Card name = "Play a board game" image = {<img src="walking.jpg" ></img>} />
      <Card name = "Take a nap" image = {<img src="walking.jpg" ></img>} />
      <Card name = "Meet up with friends" image = {<img src="walking.jpg" ></img>} />
      <Card name = "Exercise" image = {<img src="walking.jpg" ></img>} />
    </div>
  )
}

export default App
