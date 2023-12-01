import React from 'react'

export default function Player_two() {
    if (!localStorage.getItem("player_two")) {
        localStorage.setItem("player_two",0)
    }

    return (
        <div className='player_two player'>
            <p>player 2</p>
            <strong>{localStorage.getItem("player_two")}</strong>
            <img src="/images/player-two.svg" alt="smiling face" draggable="false"/>
        </div>
    )
}
