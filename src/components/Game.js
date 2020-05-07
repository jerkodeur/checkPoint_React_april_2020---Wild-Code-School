import React from 'react'
import axios from 'axios'

import GameList from './GameList'

import './Game.css'

class Game extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      games: [],
      filter: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.filterGames = this.filterGames.bind(this)
  }

  getApiData() {
    axios.get("https://wild-games.herokuapp.com/api/v1")
      .then(res => this.setState({ games: res.data }))
      .catch(e => console.log(e.message))
  }

  handleClick(e) {
    const tmp = this.state.games
    const id = parseInt(e.target.id)
    const newGames = tmp.filter(game => game.id !== id)
    this.setState({ "games": newGames })
  }

  filterGames(booleen) {
    if (booleen) {
      const gameFilter = this.state.games.filter(game => game.rating > 4.5).sort((a, b) => a.rating < b.rating)
      this.setState({ "games": gameFilter, "filter": booleen })
    }
    else {
      this.getApiData()
      this.setState({ "filter": booleen })
    }

  }

  componentDidMount() {
    this.getApiData()
  }

  render() {
    return (
      <>
        <div className="divButton">
          <button onClick={() => this.filterGames(!this.state.filter)} className="buttonFilter">
            {this.state.filter ? "All games" : "Filter the games by rating"}
          </button>
        </div>
        <div className="grid">
          {
            this.state.games.map(game =>
              <div key={game.id}>
                <GameList game={game} handleClick={this.handleClick} />
              </div>
            )
          }
        </div>
      </>
    )
  }
}

export default Game