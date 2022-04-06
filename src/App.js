import React from 'react'
import Header from './components/header/Header'
import './App.scss'
import AkordleInfo from './components/akordleInfo/AkordleInfo'
import Board from './components/boad/Board'
import Keyboard from './components/keyboard/Keyboard'

function App() {
    return (
        <main>
            <div className="center-content">
                <Header />
                <AkordleInfo />
                <Board />
                <Keyboard />
            </div>
        </main>
    )
}

export default App
