import React from 'react'

const PlayerCard = ({ player }) => {
  return (
    <div className="card">
      <h2>{player.name}</h2>
      <p>{player.rank}</p>
      <p>{player.nickname}</p>
    </div>
  )
}

export default PlayerCard
