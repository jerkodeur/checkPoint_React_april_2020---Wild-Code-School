import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './GameList.css'

const Gamelist = (props) => {

  const { id, name, released, genres, background_image, rating, short_screenshots } = { ...props.game }

  return (
    <div className="game">
      <h2>{name}</h2>
      <p className="released">{released}</p>
      <img alt="" src={background_image} className="gameImage" />
      <p className="rating"><button >{rating} / 5</button></p>
      <div className="genre">
        <fieldset>
          {
            genres.map((genre, id) =>
              <>
                {
                  id < 1 &&
                  <li key={genre.id}>
                    {genre.name}
                  </li>
                }
              </>
            )
          }
        </fieldset>
      </div>
      <div className="divScreen">
        <Link to={{
          pathname: '/screenShots',
          screens: { short_screenshots }
        }}>
          {
            short_screenshots.map((screen, id) =>
              <>
                {id > 0 && id < 7 &&
                  < img className="screenShot" src={screen.image} alt={screen.image} key={id} />
                }
              </>
            )
          }
        </Link>
      </div>
      <button id={id} onClick={props.handleClick} value="Supprimer" className="buttonDelete">Supprimer</button>
    </div>
  )
}

Gamelist.propTypes = {
  handleClick: PropTypes.func.isRequired,
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired,
    "background_image": PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    clip: PropTypes.shape({
      preview: PropTypes.string.isRequired,
      clips: PropTypes.shape.isRequired
    }),
    "short_screenshots": PropTypes.arrayOf(PropTypes.shape)
  })
}

export default Gamelist