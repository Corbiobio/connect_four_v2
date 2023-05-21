import React from 'react'
import { Link } from 'react-router-dom'

export default function Rules() {
    return (
        <main id='Rules'>
            <section>
                <h1>Rules</h1>
                <article>
                    <h2>Objective</h2>
                    <p>
                        Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).
                    </p>
                </article>
                <article>
                    <h2>How to play</h2>
                    <ol>
                        <li><p>Red goes first in the first game.</p></li>
                        <li><p>Players must alternate turns, and only one disc can be dropped in each turn.</p></li>
                        <li><p>The game ends when there is a 4-in-a-row or a stalemate.</p></li>
                        <li><p>The starter of the previous game goes second on the next game.</p></li>
                    </ol>
                </article>
                <Link to="/"><img src="/images/icon-check.svg" alt="check" /></Link>
            </section>
        </main>
    )
}
