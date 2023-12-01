import React from 'react'

export default function Nav_bar() {
    function menuClick() {
        const menu = document.getElementById("menu")
        menu.style.display = "flex"
    }

    return (
        <nav>
            <button className='btn_nav btn_hover_red' id='menu_btn' onClick={menuClick} >menu</button>
            <img src="/images/logo.svg" alt="logo" draggable="false"/>
            <a href="/game" className='btn_nav btn_hover_red'>restart</a>
        </nav>)
}
