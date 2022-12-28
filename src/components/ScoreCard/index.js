import './index.css'

const ScoreCard = props => {
  const {score} = props
  return (
    <div className="card-container">
      <div className="score-card-container">
        <h1 className="heading">ROCK PAPER SCISSORS</h1>
      </div>
      <div className="score-container">
        <p className="score">Score</p>
        <p className="score1">{score}</p>
      </div>
    </div>
  )
}

export default ScoreCard
