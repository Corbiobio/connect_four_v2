import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Game() {

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
        let current_marker_position = parseInt(element.id[element.id.length - 1] - 1)
        const marker_column = marker_container.children
        const current_marker_column = marker_container.children[current_marker_position]

        for (let i = 0; i < marker_column.length; i++) {
            marker_column[i].children[0].style.display = "none"
        }
        current_marker_column.children[0].style.display = "block"
    }

    function put_coin(element) {
        const board_game = document.getElementById("board_game")
        const column_click = board_game.children[element.id[element.id.length - 1] - 1]

        //if first coin doesnt contain a coin 
        if (column_click.children[0].classList[0] !== "red" && column_click.children[0].classList[0] !== "yellow") {

            let i = column_click.children.length - 1
            //verif if coin is empty (if true put a coin)
            //get index of first coin empty
            while (i >= 0 && column_click.children[i].classList[0] !== "empty") {
                i--
            }
            column_click.children[i].className = "red item"
        }
    }

    let turn_color = true
    function turn(element) {
        console.log(turn_color);
        turn_color = !turn_color
        console.log(element);
        // const board_game = document.getElementById("board_game")
        // const column_click = board_game.children[element.id[element.id.length - 1] - 1]
        // if (column_click.children[0].classList[0] !== "red" && column_click.children[0].classList[0] !== "yellow") {
        //     turn_color = !turn_color
        // }
    }
    turn("a")
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
                        <div id='marker1' onClick={element => { turn(element.target); put_coin(element.target) }} onMouseOver={element => { display_marker(element.target) }}></div>
                        <div id='marker2' onClick={element => { turn(element.target); put_coin(element.target) }} onMouseOver={element => { display_marker(element.target) }}></div>
                        <div id='marker3' onClick={element => { turn(element.target); put_coin(element.target) }} onMouseOver={element => { display_marker(element.target) }}></div>
                        <div id='marker4' onClick={element => { turn(element.target); put_coin(element.target) }} onMouseOver={element => { display_marker(element.target) }}></div>
                        <div id='marker5' onClick={element => { turn(element.target); put_coin(element.target) }} onMouseOver={element => { display_marker(element.target) }}></div>
                        <div id='marker6' onClick={element => { turn(element.target); put_coin(element.target) }} onMouseOver={element => { display_marker(element.target) }}></div>
                        <div id='marker7' onClick={element => { turn(element.target); put_coin(element.target) }} onMouseOver={element => { display_marker(element.target) }}></div>
                    </div>

                    <picture className='board_white'>
                        <source media='(min-width:750px)' srcSet="/images/board-layer-white-large.svg" />
                        <img src="/images/board-layer-white-small.svg" alt="board" />
                    </picture>

                    <div className='board_game' id='board_game'>

                        <div className='column'>

                            <div className="empty item">
                                <picture>
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>
                        </div>
                        <div className='column'>

                            <div className="empty item">
                                <picture>
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>
                        </div>
                        <div className='column'>

                            <div className="empty item">
                                <picture>
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>
                        </div>
                        <div className='column'>

                            <div className="empty item">
                                <picture>
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>
                        </div>
                        <div className='column'>

                            <div className="empty item">
                                <picture>
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>
                        </div>
                        <div className='column'>

                            <div className="empty item">
                                <picture>
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>
                        </div>
                        <div className='column'>

                            <div className="empty item">
                                <picture>
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>

                            <div className="empty item">
                                <picture >
                                    <source media="(min-width:750px)" srcSet='/images/counter-yellow-large.svg' />
                                    <img src="/images/counter-yellow-small.svg" alt="coin" />
                                </picture>
                            </div>
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