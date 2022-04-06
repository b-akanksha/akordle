import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { advanceRound, resetGame } from '../../redux/akordle'
import './Prompt.scss'

const Prompt = () => {
    const dispatch = useDispatch()

    const { status, streak, currentWord, difficulty, currentTurn } =
        useSelector((state) => state.akordle)

    const renderLosePrompt = () => {
        return (
            <div className="prompt-wrapper">
                <div className="prompt">
                    <div className="lost-message">You lost. Nice try.</div>
                    <div className="lost-message">
                        The word was:{' '}
                        <span className="lost-current-word">
                            {currentWord.toUpperCase()}
                        </span>
                    </div>
                    <div className="lost-streak">
                        Streak:{' '}
                        <span className="lost-streak-text">{streak} words</span>
                    </div>
                    <div className="lost-buttons">
                        <div
                            className="play-again-button"
                            onClick={handleLosePlayAgainButton}
                        >
                            Reset
                        </div>
                        <div
                            className="share-button"
                            onClick={() => handleShareButton('lost')}
                        >
                            Share
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const encouragementWords = (turn) => {
        if (turn < 2) {
            return 'Impressive!! '
        } else if (turn < 4) {
            return 'Goooood!! '
        } else if (turn === 5) {
            return 'You did it!! '
        } else {
            return 'Phewww! '
        }
    }

    const renderWonPrompt = () => {
        return (
            <div className="prompt-wrapper">
                <div className="prompt">
                    <div className="lost-message">
                        {' '}
                        {encouragementWords(currentTurn)}
                        {currentTurn}/6 !!!
                    </div>
                    <div className="lost-message">
                        The word was:{' '}
                        <span className="lost-current-word">
                            {currentWord.toUpperCase()}
                        </span>
                    </div>
                    <div className="lost-streak">
                        Streak:{' '}
                        <span className="lost-streak-text">{streak} words</span>
                    </div>
                    <div className="lost-buttons">
                        <div
                            className="play-again-button"
                            onClick={handleAdvanceRounds}
                        >
                            Play more
                        </div>
                        <div
                            className="share-button"
                            onClick={() => handleShareButton('won')}
                        >
                            Share
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const handleShareButton = (type) => {
        const getDifficulty = (difficulty) => {
            if (difficulty === 4) {
                return 'Easy'
            } else if (difficulty === 5) {
                return 'Normal'
            } else if (difficulty === 6) {
                return 'Hard'
            }

            return ''
        }
        navigator.clipboard.writeText(
            'Difficulty: ' +
                getDifficulty(difficulty) +
                '\n' +
                'Streak: ' +
                streak +
                ' words\n' +
                `I ${type} to the word: (You guess 🧐)\n` +
                'Play at: https://b-akanksha.github.io/akordle/'
        )
    }

    const handleLosePlayAgainButton = () => {
        dispatch(resetGame())
    }

    const handleAdvanceRounds = () => {
        dispatch(advanceRound())
    }

    const renderPrompt = () => {
        if (status !== null) {
            if (status === 'round_lost') {
                return renderLosePrompt()
            } else if (status === 'round_won') {
                return renderWonPrompt()
            }
        } else {
            return
        }
    }

    return <div className="prompt-manager">{renderPrompt()}</div>
}

export default Prompt
