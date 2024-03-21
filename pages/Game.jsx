import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import Column from './component/Column'
import Board_black from './component/Board_black'
import Board_white from './component/Board_white'
import Player_one from './component/Player_one'
import Player_two from './component/Player_two'
import Menu from './component/Menu'
import Marker_container from './component/Marker_container'
import Board_bottom from './component/Board_bottom'

export default function Game() {
    //get if color in local storage 
    let color_p1 = localStorage.getItem("color_p1") ? localStorage.getItem("color_p1") : localStorage.setItem("color_p1", "#FD6687")
    let color_p2 = localStorage.getItem("color_p2") ? localStorage.getItem("color_p2") : localStorage.setItem("color_p2", "#FFCE67")

    //if color is correct color ? true keep color : false default color
    color_p1 = CSS.supports("fill", color_p1) ? color_p1 : "#FD6687"
    color_p2 = CSS.supports("fill", color_p2) ? color_p2 : "#FFCE67"

    //true = p1 | false = p2
    let [player_turn, setPlayer_turn] = useState(true)
    //current color player
    let [player_color, setPlayer_color] = useState(color_p1)
    //amount of column
    let [amount_columns, setAmount_columns] = useState(7);

    let can_play = useRef(true)
    let game_draw = useRef(false)
    let game_win = useRef(false)
    let marker_containerRef = useRef(null)
    let board_gameRef = useRef(null)
    let boardRef = useRef(null)
    let coin_info = useRef({ coin: null, coin_color: null, index_column: null, index_row: null })
    let board_bottomRef = useRef(null)
    let bottom_page = useRef(null)

    function get_color(color_bool) {
        if (color_bool) {
            return "red"
        } else {
            return "yellow"
        }
    }

    //diplay marker on top of board
    function display_marker(column) {
        let column_id = parseInt(column.id)
        let marker_container_child = marker_containerRef.current.children

        //undisplay every marker
        for (let i = 0; i < marker_container_child.length; i++) {
            marker_container_child[i].children[0].style.display = "none"
        }

        //dislay correct marker
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
                <svg class="item_small coin" width="41px" height="46px" viewBox="0 0 41 46" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
                                        <use fill=${player_color} fill-rule="evenodd" xlink:href="#path-small-1"></use>
                                        <use fill="black" fill-opacity="1" filter="url(#filter-small-2)" xlink:href="#path-small-1"></use>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <svg class="item_large coin" width="70px" height="75px" viewBox="0 0 70 75" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
                                <use fill=${player_color} fill-rule="evenodd" xlink:href="#path-1"></use>
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
                marker_child[i].children[0].style.display = "none"
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
            function win(coin_win) {
                stop_game()

                //set state of game to win
                game_win.current = true

                //display win bottom
                let board_bottom_child = board_bottomRef.current.children
                board_bottom_child[0].style.display = "none"
                board_bottom_child[1].style.display = "flex"

                //update nbr of win 
                if (player_turn) {
                    localStorage.setItem("player_one", parseInt(localStorage.getItem("player_one")) + 1)
                } else {
                    localStorage.setItem("player_two", parseInt(localStorage.getItem("player_two")) + 1)
                }
                //change bottom color 
                bottom_page.current.style.backgroundColor = player_color

                for (let i = 0; i < coin_win.length; i++) {
                    //put circle on correct coin
                    coin_win[i].innerHTML += `
                    <svg class=circle width="800px" height="800px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <title>circle-dot-filled</title>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="drop" fill="#000000" transform="translate(42.666667, 42.666667)">
                                <path d="M213.333333,3.55271368e-14 C331.15408,3.55271368e-14 426.666667,95.5125867 426.666667,213.333333 C426.666667,331.15408 331.15408,426.666667 213.333333,426.666667 C95.5125867,426.666667 3.55271368e-14,331.15408 3.55271368e-14,213.333333 C3.55271368e-14,95.5125867 95.5125867,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,106.666667 C154.42296,106.666667 106.666667,154.42296 106.666667,213.333333 C106.666667,272.243707 154.42296,320 213.333333,320 C272.243707,320 320,272.243707 320,213.333333 C320,154.42296 272.243707,106.666667 213.333333,106.666667 Z" id="Combined-Shape">

                    </path>
                            </g>
                        </g>
                    </svg>`

                    //remove class to prevent animation play a new time when win
                    coin_win[i].firstElementChild.classList.value = ""
                }
            }

            win(verify_win.coins_win)
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
            //inverse player turn
            setPlayer_turn(player_turn = !player_turn)

            //set color for player 
            if (player_turn) {
                setPlayer_color(color_p1)
            } else {
                setPlayer_color(color_p2)
            }
        }
    }

    //give data to an array to make a .map for create each column
    function create_array(index) {
        const array = []
        for (let i = 0; i < index; i++) {
            array.push(i)
        }
        return array
    }

    // restart game
    function restart_game() {
        setAmount_columns(0);

        //if player 2 set turn to player 1
        if (!player_turn) {
            setPlayer_turn(true)
        }
        if (game_win || game_draw) {
            //display draw bottom
            let board_bottom_child = board_bottomRef.current.children
            board_bottom_child[0].style.display = "flex"
            board_bottom_child[1].style.display = "none"
            board_bottom_child[2].style.display = "none"
        }

        //set bottom color to default
        bottom_page.current.style.backgroundColor = "#5C2DD5"

        //set state of the game to default value
        can_play.current = true
        game_win.current = false
        game_draw.current = false

        //let react have time to execute the first setAmount_columns
        setTimeout(() => {
            setAmount_columns(7);
        }, 1)
    }

    //show menu
    function display_menu() {
        const menu = document.getElementById("menu")
        menu.style.display = "flex"
    }

    //create hover dynamically 
    function update_background_color(color, event) {
        //if game not draw
        if (!game_draw.current) {
            //put color
            event.target.style.backgroundColor = color
        }
    }

    //remove hover
    function resset_background_color(event) {
        //put color
        event.target.style.backgroundColor = "#5c2dd5"
    }

    return (
        <main id='Game'>

            <Menu color_p1={color_p1} />

            <nav>
                <button onMouseEnter={event => { update_background_color(player_color, event) }} onMouseLeave={resset_background_color} className='btn_nav' id='menu_btn' onClick={display_menu} >menu</button>
                <Link to="/connect_four_v2">
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
                <button onClick={restart_game} onMouseEnter={event => { update_background_color(player_color, event) }} onMouseLeave={resset_background_color} className='btn_nav'>restart</button>
            </nav>

            <div className='game'>

                <Player_one color_p1={color_p1} />

                <Player_two color_p2={color_p2} />

                <Marker_container player_color={player_color} ref_use={marker_containerRef} />

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
                        {
                            //get array with correct amount of columns
                            create_array(amount_columns).map((element, index) => (
                                <Column key={index} index={index} />
                            ))
                        }
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