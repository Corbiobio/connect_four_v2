import React, { useContext } from 'react'
import { ColorContext } from "./ColorContext"

export default function Player_one() {
    let color_p1 = useContext(ColorContext).ColorP1

    if (!localStorage.getItem("player_one")) {
        localStorage.setItem("player_one", 0)
    }

    return (
        <div className='player_one player'>
            <p>player 1</p>
            <strong>{localStorage.getItem("player_one")}</strong>
            <svg width="54px" height="59px" viewBox="0 0 54 59" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <title>player-one</title>
                <g id="Designs" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="player-one">
                        <circle id="Oval-Copy-21" fill="#000000" cx="27" cy="27" r="27"></circle>
                        <circle id="Oval-Copy-40" fill="#000000" cx="27" cy="32" r="27"></circle>
                        <circle id="Oval-Copy-11" fill={color_p1} cx="27" cy="27" r="24"></circle>
                        <g id="Group-8" transform="translate(19.000000, 17.000000)" stroke="#000000" strokeWidth="3">
                            <path d="M6,26.75 C12.627417,26.75 18,21.377417 18,14.75 C18,8.122583 12.627417,2.75 6,2.75" id="Oval-Copy-11" transform="translate(12.000000, 14.750000) rotate(90.000000) translate(-12.000000, -14.750000) "></path>
                            <g id="Group-7" transform="translate(9.750000, 0.000000)">
                                <line x1="0.5" y1="0" x2="0.5" y2="5.9844035" id="Path"></line>
                                <line x1="10.5" y1="0" x2="10.5" y2="5.9844035" id="Path-Copy"></line>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}
