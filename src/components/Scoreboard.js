import React, { Component } from 'react'
import './Scoreboard.css';
import Player from './Player'
import AddPlayer from './AddPlayer'

export default class Scoreboard extends Component {
state = {
  players: [
    {
      id: 1,
      name: 'Dasha',
      score: 2
    },
    {
      id: 2,
      name: 'Vita',
      score: 5
    },
    {
      id: 3,
      name: 'Raya',
      score: 4
    }
  ]
}

addPlayer = (name) => {
  const player = {
    id: Math.round(Math.random()*100000),
    name,
    score: 0
  }
  this.setState({
    players: this.state.players.concat(player)
  })
}

updatePlayerScore = (id, score) => {
  const updatedPlayers = this.state.players.map(
    player => {
      if (player.id === id) {
        return {
          ...player,
          score
        }
      }
      else {
        return player
      }
    }
  )
  this.setState({ players: updatedPlayers })
}

  renderPlayer = (player) => {
    return (<Player
      {...player}
      key={player.id}
      updatePlayerScore={this.updatePlayerScore}
    />
  )
  }

  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
          {
            this.state.players
              .sort((a, b) => b.score - a.score)
              .map(this.renderPlayer)
          }
        </ul>
        <AddPlayer addPlayer={this.addPlayer} />
      </div>
    )
  }
}
