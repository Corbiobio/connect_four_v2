import React from 'react'
import { Link } from 'react-router-dom'

export default function App() {
    return (
        <main>
            <nav>
                <img src="/images/logo.svg" alt="logo" />
                <div>
                    <button><Link to="/game" >Payer vs PLayer </Link><img src="./player-vs-player.svg" alt="player vs player" /></button>
                    <button><Link to="/rules">Game rules</Link></button>
                </div>
            </nav>
        </main>
    )
}
