import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import ScoreCard from '../ScoreCard'

import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class StartGame extends Component {
  state = {list: '', isTrue: false, score: 0, choice: '', result: ''}

  getResults = (value1, value2) => {
    if (value1.id === 'ROCK') {
      switch (value2.id) {
        case 'SCISSORS':
          return 'YOU WON'
        case 'PAPER':
          return 'YOU LOSE'

        default:
          return 'IT IS DRAW'
      }
    } else if (value1.id === 'SCISSORS') {
      switch (value2.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'

        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (value2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'

        default:
          return 'IT IS DRAW'
      }
    }
  }

  getStartGame = value => {
    const {score} = this.state
    const choice1 = choicesList.filter(each => each.id === value)
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    console.log(choice1)
    console.log(choice2)

    const result = this.getResults(choice1[0], choice2)
    console.log(result)

    let newScore = score
    let newResult = result

    if (result === 'IT IS DRAW') {
      newScore = score + 0
      newResult = result
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
      newResult = result
    } else {
      newScore = score + 1
      newResult = result
    }
    this.setState({
      list: choice1[0],
      isTrue: true,
      choice: choice2,
      score: newScore,
      result: newResult,
    })
  }

  playAgain = () => {
    this.setState({isTrue: false})
  }

  render() {
    const {list, isTrue, score, choice, result} = this.state

    return (
      <>
        <div className="start-game">
          <ScoreCard score={score} />
          {isTrue ? (
            <div className="main-container">
              <div className="container">
                <div className="text-container">
                  <p className="paragraph">YOU</p>
                  <img
                    src={list.imageUrl}
                    alt="your choice"
                    className="image"
                  />
                </div>
                <div className="text-container">
                  <p className="paragraph">OPPONENT</p>
                  <img
                    src={choice.imageUrl}
                    alt="opponent choice"
                    className="image"
                  />
                </div>
              </div>
              <p className="result">{result}</p>
              <button
                type="button"
                className="play-button"
                onClick={this.playAgain}
              >
                Play Again
              </button>
            </div>
          ) : (
            <div className="buttons-container">
              <div>
                <button
                  type="button"
                  className="button"
                  key={choicesList[0].id}
                  onClick={() => this.getStartGame(choicesList[0].id)}
                  data-testid="rockButton"
                >
                  <img
                    src={choicesList[0].imageUrl}
                    alt={choicesList[0].id}
                    className="image"
                  />
                </button>
                <button
                  type="button"
                  className="button"
                  key={choicesList[1].id}
                  onClick={() => this.getStartGame(choicesList[1].id)}
                  data-testid="scissorsButton"
                >
                  <img
                    src={choicesList[1].imageUrl}
                    alt={choicesList[1].id}
                    className="image"
                  />
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="button"
                  key={choicesList[2].id}
                  onClick={() => this.getStartGame(choicesList[2].id)}
                  data-testid="paperButton"
                >
                  <img
                    src={choicesList[2].imageUrl}
                    alt={choicesList[2].id}
                    className="image"
                  />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="rules-container">
          <div className="popup-container">
            <Popup
              trigger={
                <button className="rules-button" type="button">
                  Rules
                </button>
              }
            >
              {close => (
                <div className="pop">
                  <button
                    type="button"
                    className="close-button"
                    onClick={() => close()}
                  >
                    <RiCloseLine className="close" />
                  </button>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                    className="rules-image"
                  />
                </div>
              )}
            </Popup>
          </div>
        </div>
      </>
    )
  }
}

export default StartGame
