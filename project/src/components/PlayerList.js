import React, { useEffect } from 'react'
import PlayerCard from './PlayerCard.js'

import { connect } from 'react-redux'
import { fetchPlayers } from '../actions/index.js'

const PlayerList = (props) => {
  console.log(props)

  useEffect(() => {
    props.fetchPlayers()
  }, [])

  return (
    <div>
      <h1>Soccer Players List</h1>
      <div className="card-container">
        {props.players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
    isFetching: state.isFetching,
    error: state.error,
  }
}

export default connect(mapStateToProps, { fetchPlayers })(PlayerList)
