import './index.css'

const Navbar = props => {
  const {score, timer} = props

  return (
    <div>
      <nav className="navbar">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
        <ul className="score-timer-container">
          <li className="score-heading">
            <p>Score:</p> <span className="score-span">{score}</span>
          </li>
          <li className="timer-container">
            <img
              className="timer-image"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />
            <p className="score-span">{timer} sec</p>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
