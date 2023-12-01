import React from 'react'

export default function Player_one() {
    if (!localStorage.getItem("player_one")) {
        localStorage.setItem("player_one",0)
    }

    return (
        <div className='player_one player'>
            <p>player 1</p>
            <strong>{localStorage.getItem("player_one")}</strong>
            <img src="/images/player-one.svg" alt="smiling face" draggable="false"/>
        </div>
    )
}
