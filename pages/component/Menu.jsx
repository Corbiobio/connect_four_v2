import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ColorContext } from "./ColorContext"

export default function Menu(restart_func) {
    console.log(restart_func);
    const color = useContext(ColorContext)

    function continue_btn_click() {
        const menu = document.getElementById("menu")
        const menu_background = document.getElementById("menu_background")
        const menu_btn_container = document.getElementById("menu_btn_container")

        menu_btn_container.style.animation = "menu_close 1.4s cubic-bezier(.75,0,.3,1) 1";
        menu_background.style.animation = "menu_close_background 1.4s";

        setTimeout(() => {
            menu_btn_container.style.animation = ""
            menu_background.style.animation = ""
            menu.style.display = "none"
        }, 1200)
    }

    return (
        <div className='menu' id='menu' >
            <div id='menu_background'></div>
            <div className='menu_btn_container' id='menu_btn_container'>
                <p>pause</p>
                <div onClick={continue_btn_click} className='btn_menu'>continue game</div>
                <div onClick={restart_func.restart_func} className='btn_menu'>restart</div>
                <Link className='btn_menu btn_menu_colored' to="/connect_four_v2" style={{ backgroundColor: color.ColorP1 }}>quit game</Link>
            </div>
        </div>
    )
}
