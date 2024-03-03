import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Nav_bar({ color_p1, color_p2, player_turn, game_draw }) {

    let color_player = useRef("#FD6687");
    //define player  color
    if (player_turn) {
        color_player.current = color_p1
    } else {
        color_player.current = color_p2
    }

    function menuClick() {
        const menu = document.getElementById("menu")
        menu.style.display = "flex"
    }

    //create hover dynamically 
    function btn_enter(event) {
        if (!game_draw.current) {
            event.target.style.backgroundColor = color_player.current
        }
    }

    function btn_leave(event) {
        event.target.style.backgroundColor = "#5c2dd5"
    }

    return (
        <nav>
            <button onMouseEnter={btn_enter} onMouseLeave={btn_leave} className='btn_nav' id='menu_btn' onClick={menuClick} >menu</button>
            <Link to="/">
                <svg width="58px" height="61px" viewBox="0 0 58 61" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <title>logo</title>
                    <g id="Designs" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="assets" transform="translate(-432.000000, -742.000000)">
                            <g id="Group-24" transform="translate(211.000000, 160.000000)">
                                <g id="logo" transform="translate(221.000000, 582.000000)">
                                    <g id="Group-23" fill="#000000">
                                        <circle id="Oval-Copy-47" cx="13" cy="13" r="13"></circle>
                                        <circle id="Oval-Copy-51" cx="45" cy="13" r="13"></circle>
                                        <circle id="Oval-Copy-53" cx="13" cy="45" r="13"></circle>
                                        <circle id="Oval-Copy-52" cx="45" cy="45" r="13"></circle>
                                    </g>
                                    <g id="Group-23-Copy" transform="translate(0.000000, 3.000000)" fill="#000000">
                                        <circle id="Oval-Copy-47" cx="13" cy="13" r="13"></circle>
                                        <circle id="Oval-Copy-51" cx="45" cy="13" r="13"></circle>
                                        <circle id="Oval-Copy-53" cx="13" cy="45" r="13"></circle>
                                        <circle id="Oval-Copy-52" cx="45" cy="45" r="13"></circle>
                                    </g>
                                    <circle id="Oval-Copy-11" fill={color_p1} cx="13" cy="13" r="10"></circle>
                                    <circle id="Oval-Copy-25" fill={color_p1} cx="45" cy="45" r="10"></circle>
                                    <circle id="Oval-Copy-23" fill={color_p2} cx="45" cy="13" r="10"></circle>
                                    <circle id="Oval-Copy-24" fill={color_p2} cx="13" cy="45" r="10"></circle>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </Link>
            <a href="/game" onMouseEnter={btn_enter} onMouseLeave={btn_leave} className='btn_nav'>restart</a>
        </nav>)
}
