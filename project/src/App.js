import React from 'react'
import PlayerList from './components/PlayerList.js'
import PlayerForm from './components/PlayerForm.js'

import './App.css'

const App = () => {
  return (
    <div className="center">
      <h1>Soccer Players</h1>
      <div>Welcome to the app</div>
      <div>Start inside of the `src/index.js` file</div>
      <div>Have fun!</div>
      <PlayerForm />
      <PlayerList />
    </div>
  )
}

export default App
