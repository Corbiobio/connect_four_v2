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
                <Link to="/">
                    <svg width="70px" height="75px" viewBox="0 0 70 75" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>icon-check</title>
                        <g id="Designs" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="icon-check">
                                <circle className="contour" id="Oval-Copy-37" fill="#000000" cx="35" cy="35" r="35"></circle>
                                <circle className="contour" id="Oval-Copy-38" fill="#000000" cx="35" cy="40" r="35"></circle>
                                <circle id="Oval-Copy-39" fill="#FD6687" cx="35" cy="35" r="32"></circle>
                                <polyline id="Path" stroke="#FFFFFF" strokeWidth="3" points="20 34.5819497 30.2640104 44.84596 50.1099704 25"></polyline>
                            </g>
                        </g>
                    </svg>
                </Link>
            </section>
        </main>
    )
}
