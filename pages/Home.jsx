import React from 'react'
import { Link } from 'react-router-dom'

export default function App() {
    return (
        <main id='Home'>
            <nav>
                <img src="/images/logo.svg" alt="logo" draggable="false"/>
                <div>
                    <Link to="/game" className='btn'>Payer vs PLayer <img src="images/player-vs-player.svg" alt="player vs player" draggable="false"/></Link>
                    <Link to="/rules" className='btn'>Game rules</Link>
                </div>
            </nav>
        </main >
    )
}
