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
    },
})

export const { resetGame, setDifficulty } = akordleSlice.actions

export default akordleSlice.reducers
