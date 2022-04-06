import React from 'react'
import Header from './components/header/Header'
import './App.scss'
import AkordleInfo from './components/akordleInfo/AkordleInfo'
import Board from './components/boad/Board'

function App() {
    return (
        <main>
            <div className="center-content">
                <Header />
                <AkordleInfo />
                <Board />
            </div>
        </main>
    )
}

export default App
