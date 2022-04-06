import React from 'react'
import Header from './components/header/Header'
import './App.scss'
import AkordleInfo from './components/akordleInfo/AkordleInfo'

function App() {
    return (
        <main>
            <div className="center-content">
                <Header />
                <AkordleInfo />
            </div>
        </main>
    )
}

export default App
