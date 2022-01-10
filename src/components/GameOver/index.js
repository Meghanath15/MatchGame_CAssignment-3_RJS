import './index.css'

const GameOver = props => {
  const {score, onClickPlayAgain} = props

  return (
    <div className="game-over-container">
      <div className="score-card-container">
        <img
          className="trophy-image"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
        />
        <p className="your-score-text">YOUR SCORE</p>
        <p className="result-score">{score}</p>
        <button
          className="play-again-button"
          onClick={onClickPlayAgain}
          type="button"
        >
          <img
            className="reset-image"
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default GameOver
