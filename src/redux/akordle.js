import { createSlice } from '@reduxjs/toolkit'

import FourWords from '../util/word_4.json'
import FiveWords from '../util/word_5.json'
import SixWords from '../util/word_6.json'

const akordleSlice = createSlice({
    name: 'akordle',
    initialState: {
        streak: 0,
        difficulty: 5,
        boardData: ['', '', '', '', '', ''],
        currentTurn: 0,
        currentWord: '',
        exactLetters: [],
        misplacedLetters: [],
        unusedLetters: [],
        history: [],
        unusedWords: FiveWords,
        status: null,
    },
    reducers: {
        resetGame(state) {
            state.boardData = ['', '', '', '', '', '']

            state.streak = 0
            state.currentTurn = 0

            state.exactLetters = []
            state.misplacedLetters = []
            state.unusedLetters = []

            state.history = []

            state.status = null

            if (state.difficulty === 4) {
                state.unusedWords = FourWords
            } else if (state.difficulty === 5) {
                state.unusedWords = FiveWords
            } else if (state.difficulty === 6) {
                state.unusedWords = SixWords
            }

            let randomWordIndex = Math.floor(
                Math.random() * state.unusedWords.length
            )
            state.currentWord = state.unusedWords[randomWordIndex]
            state.unusedWords = state.unusedWords.filter(
                (word) => word !== state.unusedWords[randomWordIndex]
            )
        },
        setDifficulty(state, action) {
            state.difficulty = action.payload.difficulty
        },
        advanceRound(state) {
            state.boardData = ['', '', '', '', '', '']

            state.streak = state.streak + 1
            state.currentTurn = 0

            state.exactLetters = []
            state.misplacedLetters = []
            state.unusedLetters = []

            state.history = []
            state.status = null

            if (state.unusedWords.length >= 0) {
                if (state.difficulty === 4) {
                    state.unusedWords = FourWords
                } else if (state.difficulty === 5) {
                    state.unusedWords = FiveWords
                } else if (state.difficulty === 6) {
                    state.unusedWords = SixWords
                }
            }

            let randomWordIndex = Math.floor(
                Math.random() * state.unusedWords.length
            )
            state.currentWord = state.unusedWords[randomWordIndex]
            state.unusedWords = state.unusedWords.filter(
                (word) => word !== state.unusedWords[randomWordIndex]
            )
        },
        addLetter(state, action) {
            if (state.boardData[state.currentTurn].length < state.difficulty) {
                state.boardData[state.currentTurn] =
                    state.boardData[state.currentTurn] + action.payload.letter
            }
        },
        removeLetter(state) {
            if (state.boardData[state.currentTurn].length > 0) {
                let dataLength = state.boardData[state.currentTurn].length
                state.boardData[state.currentTurn] = state.boardData[
                    state.currentTurn
                ].substring(0, dataLength - 1)
            }
        },
        submitWord(state) {
            // First we check to make sure that the word as a length of six or more
            // because smaller lengths are invalid.
            if (state.boardData[state.currentTurn].length >= state.difficulty) {
                let boardWordData = state.boardData[state.currentTurn]
                    .toUpperCase()
                    .split('')
                let currentWordData = state.currentWord.toUpperCase().split('')

                for (let i = 0; i < state.difficulty; i++) {
                    if (
                        boardWordData[i] === currentWordData[i] &&
                        !state.exactLetters.includes(boardWordData[i])
                    ) {
                        state.exactLetters = [
                            ...state.exactLetters,
                            boardWordData[i],
                        ]
                    } else if (
                        currentWordData.includes(boardWordData[i]) &&
                        !state.misplacedLetters.includes(boardWordData[i])
                    ) {
                        state.misplacedLetters = [
                            ...state.misplacedLetters,
                            boardWordData[i],
                        ]
                    } else {
                        if (!state.unusedLetters.includes(boardWordData[i])) {
                            state.unusedLetters = [
                                ...state.unusedLetters,
                                boardWordData[i],
                            ]
                        }
                    }
                }

                if (
                    state.boardData[state.currentTurn].toUpperCase() !==
                    state.currentWord.toUpperCase()
                ) {
                    if (state.currentTurn >= 5) {
                        state.status = 'round_lost'
                    } else {
                        state.currentTurn = state.currentTurn + 1
                    }
                } else {
                    state.status = 'round_won'
                    state.currentTurn = state.currentTurn + 1
                }
            }
        },
    },
})

export const {
    resetGame,
    setDifficulty,
    advanceRound,
    addLetter,
    removeLetter,
    submitWord,
} = akordleSlice.actions

export default akordleSlice.reducer
