import React from 'react'
import { Link } from 'react-router-dom'

class Test extends React.Component {

  render() {
    return (
      <div>
        <h1>Test</h1>
        <button><Link exact to='/'>Retour à l'accueil</Link></button>
      </div>
    )
  }
}

export default Test