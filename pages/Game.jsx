import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Game() {
    useEffect(() => { }, [])

    function menuClick() {
        const menu = document.getElementById("menu")
        menu.style.display = "flex"
    }
    function continue_btn_click() {
        const menu = document.getElementById("menu")
        menu.style.display = "none"
    }
    function display_marker(element) {
        const marker_container = document.getElementById("marker_container")
        let current_marker = parseInt(element.id[element.id.length - 1])
        const marker_column = marker_container.children[current_marker - 1]
        marker_column.children[0].style.display = "block"
    }
    function hide_marker() {
        const marker_column = marker_container.children
        console.log(true);
        for (let i = 0; i < marker_column.length; i++) {
            marker_column[i].children[0].style.display = "none"
        }

    }
    return (
        <main id='Game'>

            <div className='menu' id='menu' >
                <div className='menu_btn_container'>
                    <p>pause</p>
                    <div onClick={continue_btn_click} className='btn_menu'>continue game</div>
                    <a href="/game" className='btn_menu'>restart</a>
                    <Link className='btn_menu btn_menu_pink' to="/">quit game</Link>
                </div>
            </div>

            <nav>
                <button className='btn_nav' id='menu_btn' onClick={menuClick} >menu</button>
                <img src="/images/logo.svg" alt="logo" />
                <a href="/game" className='btn_nav'>restart</a>
            </nav>

            <div className='game'>
                <div className='player_one player'>
                    <p>player 1</p>
                    <strong>0</strong>
                    <img src="/images/player-one.svg" alt="smiling face" />
                </div>

                <div className='player_two player'>
                    <p>player 2</p>
                    <strong>0</strong>
                    <img src="/images/player-two.svg" alt="smiling face" />
                </div>
                <div className='marker_container' id='marker_container'>
                    <div className='column_marker'><img src="/images/marker-red.svg" alt="marker" /></div>
                    <div className='column_marker'><img src="/images/marker-red.svg" alt="marker" /></div>
                    <div className='column_marker'><img src="/images/marker-red.svg" alt="marker" /></div>
                    <div className='column_marker'><img src="/images/marker-red.svg" alt="marker" /></div>
                    <div className='column_marker'><img src="/images/marker-red.svg" alt="marker" /></div>
                    <div className='column_marker'><img src="/images/marker-red.svg" alt="marker" /></div>
                    <div className='column_marker'><img src="/images/marker-red.svg" alt="marker" /></div>
                </div>
                <div className='board'>
                    <div className='column_for_marker'>
                        <div id='marker1' onMouseOver={element => { display_marker(element.target) }} onMouseLeave={hide_marker}></div>
                        <div id='marker2' onMouseOver={element => { display_marker(element.target) }} onMouseLeave={hide_marker}></div>
                        <div id='marker3' onMouseOver={element => { display_marker(element.target) }} onMouseLeave={hide_marker}></div>
                        <div id='marker4' onMouseOver={element => { display_marker(element.target) }} onMouseLeave={hide_marker}></div>
                        <div id='marker5' onMouseOver={element => { display_marker(element.target) }} onMouseLeave={hide_marker}></div>
                        <div id='marker6' onMouseOver={element => { display_marker(element.target) }} onMouseLeave={hide_marker}></div>
                        <div id='marker7' onMouseOver={element => { display_marker(element.target) }} onMouseLeave={hide_marker}></div>
                    </div>

                    <picture className='board_white'>
                        <source media='(min-width:750px)' srcSet="/images/board-layer-white-large.svg" />
                        <img src="/images/board-layer-white-small.svg" alt="board" />
                    </picture>

                    <div className='board_game'>
                        <div className='column'>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                        </div>
                        <div className='column'>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                        </div>
                        <div className='column'>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                        </div>
                        <div className='column'>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                        </div>
                        <div className='column'>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                        </div>
                        <div className='column'>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                        </div>
                        <div className='column'>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                            <picture className="item">
                                <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                <img src="/images/counter-yellow-small.svg" alt="coin" />
                            </picture>
                        </div>
                    </div>

                    <picture className='board_black' >
                        <source media="(min-width:750px)" srcSet="/images/board-layer-black-large.svg" />
                        <img src="/images/board-layer-black-small.svg" alt="board" />
                    </picture>

                    <div className='board_bottom'>
                        <img src="/images/turn-background-red.svg" alt="red triangle" />
                        <div>
                            <p>player 2's turn</p>
                            <strong>0<span>s</span></strong>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom'>
            </div>
        </main >
    )
}