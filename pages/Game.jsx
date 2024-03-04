import React, { useRef, useState } from 'react'

import Column from './component/Column'
import Board_black from './component/Board_black'
import Board_white from './component/Board_white'
import Player_one from './component/Player_one'
import Player_two from './component/Player_two'
import Nav_bar from './component/Nav_bar'
import Menu from './component/Menu'
import Marker_container from './component/Marker_container'
import Board_bottom from './component/Board_bottom'

export default function Game() {

    //true = p1 | false = p2
    let [player_turn, setPlayer_turn] = useState(true)

    let can_play = useRef(true)
    let game_draw = useRef(false)
    let marker_containerRef = useRef(null)
    let board_gameRef = useRef(null)
    let boardRef = useRef(null)
    let coin_info = useRef({ coin: null, coin_color: null, index_column: null, index_row: null })
    let board_bottomRef = useRef(null)
    let bottom_page = useRef(null)

    //get if color in local storage 
    let color_p1 = localStorage.getItem("color_p1") ? localStorage.getItem("color_p1") : localStorage.setItem("color_p1", "#FD6687")
    let color_p2 = localStorage.getItem("color_p2") ? localStorage.getItem("color_p2") : localStorage.setItem("color_p2", "#FFCE67")

    //if color is correct color ? true keep color : false default color
    color_p1 = CSS.supports("fill", color_p1) ? color_p1 : "#FD6687"
    color_p2 = CSS.supports("fill", color_p2) ? color_p2 : "#FFCE67"

    function get_color(color_bool) {
        if (color_bool) {
            return "red"
        } else {
            return "yellow"
        }
    }

    function display_marker(column) {
        let column_id = parseInt(column.id)
        let marker_container_child = marker_containerRef.current.children

        for (let i = 0; i < marker_container_child.length; i++) {
            marker_container_child[i].children[0].style.display = "none"
        }

        marker_container_child[column_id].children[0].style.display = "block"
    }

    function put_coin(column) {
        let column_id = parseInt(column.id)
        let current_column = board_gameRef.current.children[column_id]
        let columnn_child = current_column.children

        //if highest coin is empty, we can put coin
        if (columnn_child[0].classList[0] === "empty") {

            let i = columnn_child.length - 1

            //get index of first coin empty
            while (i >= 0 && columnn_child[i].classList[0] !== "empty") {
                i--
            }

            let color = get_color(player_turn)



            columnn_child[i].className = `${color} item`
            columnn_child[i].innerHTML = `
            <div class="anim_coin_fall_${i}">
                <svg class="coin_small" width="41px" height="46px" viewBox="0 0 41 46" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>counter-small</title>
                    <defs>
                        <circle id="path-small-1" cx="19.9756098" cy="19.9756098" r="16.9756098"></circle>
                        <filter x="-7.4%" y="-7.4%" width="114.7%" height="114.7%" filterUnits="objectBoundingBox" id="filter-small-2">
                            <feOffset dx="0" dy="5" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
                            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g id="Designs" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="assets" transform="translate(-231.000000, -744.000000)">
                            <g id="Group-24" transform="translate(211.000000, 160.000000)">
                                <g id="counter-small" transform="translate(20.975610, 584.975610)">
                                    <circle id="Oval-Copy-49" fill="#000000" cx="20" cy="20" r="20"></circle>
                                    <circle id="Oval-Copy-50" fill="#000000" cx="20" cy="25" r="20"></circle>
                                    <g id="Oval-Copy-48">
                                        <use fill=${player_turn ? color_p1 : color_p2} fill-rule="evenodd" xlink:href="#path-small-1"></use>
                                        <use fill="black" fill-opacity="1" filter="url(#filter-small-2)" xlink:href="#path-small-1"></use>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <svg class="coin_large" width="70px" height="75px" viewBox="0 0 70 75" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>counter-large</title>
                    <defs>
                        <circle id="path-1" cx="35" cy="35" r="32"></circle>
                        <filter x="-3.9%" y="-3.9%" width="107.8%" height="107.8%" filterUnits="objectBoundingBox" id="filter-2">
                            <feOffset dx="0" dy="5" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
                            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g id="Designs" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="counter-large">
                            <circle id="Oval-Copy-41" fill="#000000" cx="35" cy="35" r="35"></circle>
                            <circle id="Oval-Copy-42" fill="#000000" cx="35" cy="40" r="35"></circle>
                            <g id="Oval-Copy-43">
                                <use fill=${player_turn ? color_p1 : color_p2} fill-rule="evenodd" xlink:href="#path-1"></use>
                                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>`

            coin_info = { coin: columnn_child[i], coin_color: get_color(player_turn), index_column: column_id, index_row: i }
            game_turn(coin_info)
        }
    }

    function game_turn(coin_info) {

        //verif if each coin is empty | false -> not draw 
        function verif_draw(columns) {
            let line_full = true
            for (let i = 0; i < columns.length; i++) {
                //get first class of the highest coin of each column | value : red yellow or empty
                if (columns[i].children[0].classList[0] === "empty") {

                    line_full = false;
                    break
                }
            }
            return line_full
        }

        function verif_win(columns, coin_info) {

            const coin_color = coin_info.coin_color
            const row_id = coin_info.index_row
            const column_id = coin_info.index_column

            function check_row(column_id, row_id, color, columns) {
                function check_coins(column_id, row_id, color, columns, operation) {
                    const coin_good = []

                    let coin_good_flag = true
                    while (coin_good_flag) {
                        if (operation === true) {
                            column_id++
                        } else {
                            column_id--
                        }
                        //if column existe
                        if (columns[column_id]) {
                            //get coin
                            let current_coin = columns[column_id].children[row_id]

                            // get next/befor coin class
                            let current_class = current_coin.classList

                            // dom token list to array
                            current_class = [...current_class]

                            if (current_class.includes(color)) {
                                coin_good.push(current_coin)
                            } else {
                                // stop while
                                coin_good_flag = false
                            }
                        } else {
                            // stop while
                            coin_good_flag = false
                        }
                    }
                    return coin_good
                }
                //true -> add | false -> remove
                let operation = true
                let after_coin_good = check_coins(column_id, row_id, color, columns, operation)
                operation = false
                let before_coin_good = check_coins(column_id, row_id, color, columns, operation)

                // all value in array
                const coin_good = [...before_coin_good, ...after_coin_good]
                return coin_good
            }
            function check_column(column_id, row_id, color, columns) {
                function check_coins(column_id, row_id, color, columns, operation) {
                    const coin_good = []

                    let coin_good_flag = true
                    while (coin_good_flag) {
                        if (operation === true) {
                            row_id++
                        } else {
                            row_id--
                        }
                        //if coin existe
                        if (columns[column_id].children[row_id]) {
                            //get coin
                            let current_coin = columns[column_id].children[row_id]

                            // get next/befor coin class
                            let current_class = current_coin.classList

                            // dom token list to array
                            current_class = [...current_class]

                            if (current_class.includes(color)) {
                                coin_good.push(current_coin)
                            } else {
                                // stop while
                                coin_good_flag = false
                            }
                        } else {
                            // stop while
                            coin_good_flag = false
                        }
                    }
                    return coin_good
                }
                //true -> add | false -> remove
                let operation = true
                let after_coin_good = check_coins(column_id, row_id, color, columns, operation)
                operation = false
                let before_coin_good = check_coins(column_id, row_id, color, columns, operation)

                // all value in array
                const coin_good = [...before_coin_good, ...after_coin_good]
                return coin_good
            }
            function check_north_west_to_south_east(column_id, row_id, color, columns) {
                function check_coins(column_id, row_id, color, columns, operation) {
                    const coin_good = []

                    let coin_good_flag = true
                    while (coin_good_flag) {
                        if (operation === true) {
                            row_id++
                            column_id++
                        } else {
                            row_id--
                            column_id--
                        }
                        //if column and coin existe
                        if (columns[column_id] && columns[column_id].children[row_id]) {
                            //get coin
                            let current_coin = columns[column_id].children[row_id]

                            // get next/befor coin class
                            let current_class = current_coin.classList

                            // dom token list to array
                            current_class = [...current_class]

                            if (current_class.includes(color)) {
                                coin_good.push(current_coin)
                            } else {
                                // stop while
                                coin_good_flag = false
                            }
                        } else {
                            // stop while
                            coin_good_flag = false
                        }
                    }
                    return coin_good
                }
                //true -> add | false -> remove
                let operation = true
                let after_coin_good = check_coins(column_id, row_id, color, columns, operation)
                operation = false
                let before_coin_good = check_coins(column_id, row_id, color, columns, operation)

                // all value in array
                const coin_good = [...before_coin_good, ...after_coin_good]
                return coin_good
            }
            function check_south_west_to_north_east(column_id, row_id, color, columns) {
                function check_coins(column_id, row_id, color, columns, operation) {
                    const coin_good = []
                    let coin_good_flag = true
                    while (coin_good_flag) {
                        if (operation === true) {
                            row_id--
                            column_id++
                        } else {
                            row_id++
                            column_id--
                        }
                        //if column and coin existe
                        if (columns[column_id] && columns[column_id].children[row_id]) {
                            //get coin
                            let current_coin = columns[column_id].children[row_id]

                            // get next/befor coin class
                            let current_class = current_coin.classList

                            // dom token list to array
                            current_class = [...current_class]

                            if (current_class.includes(color)) {
                                coin_good.push(current_coin)
                            } else {
                                // stop while
                                coin_good_flag = false
                            }
                        } else {
                            // stop while
                            coin_good_flag = false
                        }
                    }
                    return coin_good
                }
                //true -> add | false -> remove
                let operation = true
                let after_coin_good = check_coins(column_id, row_id, color, columns, operation)
                operation = false
                let before_coin_good = check_coins(column_id, row_id, color, columns, operation)

                // all value in array
                const coin_good = [...before_coin_good, ...after_coin_good]
                return coin_good
            }

            let checked_raw = check_row(column_id, row_id, coin_color, columns)
            let checked_column = check_column(column_id, row_id, coin_color, columns)
            let checked_north_west_to_south_east = check_north_west_to_south_east(column_id, row_id, coin_color, columns)
            let checked_south_west_to_north_east = check_south_west_to_north_east(column_id, row_id, coin_color, columns)

            console.log("row good : " + (checked_raw.length + 1));
            console.log("column good : " + (checked_column.length + 1));
            console.log("north_west_to_south_east good : " + (checked_north_west_to_south_east.length + 1));
            console.log("south_west_to_north_east good: " + (checked_south_west_to_north_east.length + 1));

            //coin being puted
            let coin_good = [coin_info.coin]

            //if 3 coin good without the coin puted
            //add all coin to coin good
            if (checked_raw.length >= 3) {
                coin_good = [...coin_good, ...checked_raw]
            }
            if (checked_column.length >= 3) {
                coin_good = [...coin_good, ...checked_column]
            }
            if (checked_north_west_to_south_east.length >= 3) {
                coin_good = [...coin_good, ...checked_north_west_to_south_east]
            }
            if (checked_south_west_to_north_east.length >= 3) {
                coin_good = [...coin_good, ...checked_south_west_to_north_east]
            }

            //if four coin connect -> win
            if (coin_good.length >= 4) {
                return { win: true, color_win: coin_color, coins_win: coin_good }
            } else {
                return { win: false, color_win: null, coins_win: null }
            }
        }

        //stop action on board
        function stop_game() {
            //remove action on board 
            can_play.current = false

            //remove marker
            let marker_child = marker_containerRef.current.children
            for (let i = 0; i < marker_child.length; i++) {
                marker_child[i].style.display = "none"
            }

            //cursor default on each column
            let board_child = boardRef.current.children
            for (let i = 0; i < board_child.length; i++) {
                board_child[i].style.cursor = "default"
            }
        }

        //get all columns
        let columns = board_gameRef.current.children

        //verif win or draw
        let verify_draw = verif_draw(columns)
        let verify_win = verif_win(columns, coin_info)

        if (verify_win.win) {
            function win(color_win, coin_win) {
                stop_game()

                //display win bottom
                let board_bottom_child = board_bottomRef.current.children
                board_bottom_child[0].style.display = "none"
                board_bottom_child[1].style.display = "flex"

                //change bottom color and update nbr of win 
                if (color_win === "red") {
                    bottom_page.current.style.backgroundColor = color_p1
                    localStorage.setItem("player_one", parseInt(localStorage.getItem("player_one")) + 1)
                } else {
                    bottom_page.current.style.backgroundColor = color_p2
                    localStorage.setItem("player_two", parseInt(localStorage.getItem("player_two")) + 1)
                }

                setTimeout(() => {
                    for (let i = 0; i < coin_win.length; i++) {
                        //put circle on correct coin
                        coin_win[i].innerHTML += "<img src=/images/circle-dot-filled-svgrepo-com.svg alt=circle class=circle />"

                        //remove class to prevent animation play a new time when win
                        coin_win[i].firstElementChild.classList.value = ""
                    }
                }, 1100)
            }

            win(verify_win.color_win, verify_win.coins_win)
        } else if (verify_draw) {
            function draw() {

                stop_game()

                //display draw bottom
                let board_bottom_child = board_bottomRef.current.children
                board_bottom_child[0].style.display = "none"
                board_bottom_child[2].style.display = "flex"

                game_draw.current = true
            }

            draw()
        } else {
            setPlayer_turn(player_turn = !player_turn)
        }
    }

    return (
        <main id='Game'>

            <Menu color_p1={color_p1} />

            <Nav_bar color_p1={color_p1} color_p2={color_p2} player_turn={player_turn} game_draw={game_draw} />

            <div className='game'>

                <Player_one color_p1={color_p1} />

                <Player_two color_p2={color_p2} />

                <Marker_container color_p1={color_p1} color_p2={color_p2} player_turn={player_turn} ref_use={marker_containerRef} />

                <div className='board'>
                    <div className='column_for_marker' ref={boardRef}>
                        <div id='0' onClick={event => { if (can_play.current) { put_coin(event.target) } }} onMouseOver={event => { if (can_play.current) { display_marker(event.target) } }}></div>
                        <div id='1' onClick={event => { if (can_play.current) { put_coin(event.target) } }} onMouseOver={event => { if (can_play.current) { display_marker(event.target) } }}></div>
                        <div id='2' onClick={event => { if (can_play.current) { put_coin(event.target) } }} onMouseOver={event => { if (can_play.current) { display_marker(event.target) } }}></div>
                        <div id='3' onClick={event => { if (can_play.current) { put_coin(event.target) } }} onMouseOver={event => { if (can_play.current) { display_marker(event.target) } }}></div>
                        <div id='4' onClick={event => { if (can_play.current) { put_coin(event.target) } }} onMouseOver={event => { if (can_play.current) { display_marker(event.target) } }}></div>
                        <div id='5' onClick={event => { if (can_play.current) { put_coin(event.target) } }} onMouseOver={event => { if (can_play.current) { display_marker(event.target) } }}></div>
                        <div id='6' onClick={event => { if (can_play.current) { put_coin(event.target) } }} onMouseOver={event => { if (can_play.current) { display_marker(event.target) } }}></div>
                    </div>

                    <Board_white />

                    <div className='board_game' ref={board_gameRef}>

                        <Column />
                        <Column />
                        <Column />
                        <Column />
                        <Column />
                        <Column />
                        <Column />

                    </div>

                    <Board_black />

                    <Board_bottom color_p1={color_p1} color_p2={color_p2} player_turn={player_turn} game_draw={game_draw} ref_use={board_bottomRef} />
                </div>
            </div>

            <div className='bottom' ref={bottom_page}>
            </div>

        </main >
    )
}