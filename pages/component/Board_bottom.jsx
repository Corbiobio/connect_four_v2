import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ColorContext } from "./ColorContext"

export default function Board_bottom({ player_turn, game_draw, ref_use, restart_func}) {

    const color = useContext(ColorContext)

    let turn_player
    let color_player

    //define player number and color
    if (player_turn) {
        turn_player = 1
        color_player = color.ColorP1
    } else {
        turn_player = 2
        color_player = color.ColorP2
    }

    //create hover dynamically 
    function btn_enter(event) {
        if (!game_draw.current) {
            event.target.style.backgroundColor = color_player
        }
    }

    function btn_leave(event) {
        event.target.style.backgroundColor = "#5c2dd5"
    }

    return (
        <div className='board_bottom' ref={ref_use}>
            <div className='bottom_game_turn'>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 197 165">
                    <defs>
                        <filter x="-4.2%" y="-4.2%" width="108.4%" height="116.2%" filterUnits="objectBoundingBox" id="a">
                            <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
                            <feOffset dy="10" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                            <feComposite in="shadowOffsetOuter1" in2="SourceAlpha" operator="out" result="shadowOffsetOuter1" />
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="shadowOffsetOuter1" />
                        </filter>
                        <path d="M12.239 34.847 87.279 3.25a20 20 0 0 1 15.454-.029l75.96 31.65A20 20 0 0 1 191 53.333V130c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V53.28a20 20 0 0 1 12.239-18.433Z" id="b" />
                    </defs>
                    <g transform="translate(3 2)" fill="none" fillRule="evenodd">
                        <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                        <path stroke="#000" strokeWidth="3" d="M86.697 1.868a21.5 21.5 0 0 1 16.613-.03l75.96 31.65a21.478 21.478 0 0 1 9.62 7.92 21.478 21.478 0 0 1 3.61 11.925V130a21.433 21.433 0 0 1-6.297 15.203A21.433 21.433 0 0 1 171 151.5H20a21.433 21.433 0 0 1-15.203-6.297A21.433 21.433 0 0 1-1.5 130V53.28c0-4.326 1.296-8.44 3.589-11.893a21.478 21.478 0 0 1 9.568-7.923Z" fill={color_player} />
                    </g>
                    <g fill="black" fontFamily="SpaceGrotesk-Bold, Space Grotesk" fontWeight="bold">
                        <text fontSize="16" transform="translate(45 41)">
                            <tspan x="1.64" y="16">Player {turn_player}'s turn</tspan>
                        </text>
                        <text fontSize="56" transform="translate(51 41)">
                            <tspan x=".872" y="77">00s</tspan>
                        </text>
                    </g>
                </svg>
            </div>
            <div className='bottom_game_finish'>
                <p>player {turn_player}</p>
                <strong>wins</strong>
                <button onClick={()=>{restart_func();}} onMouseEnter={btn_enter} onMouseLeave={btn_leave}>play again</button>
            </div>
            <div className='bottom_game_finish'>
                <strong>Draw</strong>
                <button onClick={()=>{restart_func();}} onMouseEnter={btn_enter} onMouseLeave={btn_leave} >play again</button>
            </div>
        </div>
    )
}
