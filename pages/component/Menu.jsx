import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    function continue_btn_click() {
        const menu = document.getElementById("menu")
        menu.style.display = "none"
    }

    return (
        <div className='menu' id='menu' >
            <div className='menu_btn_container'>
                <p>pause</p>
                <div onClick={continue_btn_click} className='btn_menu'>continue game</div>
                <a href="/game" className='btn_menu'>restart</a>
                <Link className='btn_menu btn_menu_pink' to="/">quit game</Link>
            </div>
        </div>
    )
}
