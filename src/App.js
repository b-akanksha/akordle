import React, { useEffect } from 'react'
import Header from './components/header/Header'
import './App.scss'
import AkordleInfo from './components/akordleInfo/AkordleInfo'
import Board from './components/boad/Board'
import Keyboard from './components/keyboard/Keyboard'
import Prompt from './components/prompt/Prompt'
import { useDispatch } from 'react-redux'
import { resetGame } from './redux/akordle'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetGame())
    }, [dispatch])

    return (
        <main>
            <div className="center-content">
                <Header />
                <AkordleInfo />
                <Board />
                <Keyboard />
                <Prompt />
            </div>
        </main>
    )
}

export default App
