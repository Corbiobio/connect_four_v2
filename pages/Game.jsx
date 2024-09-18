import React, { useRef, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import { ColorContext } from "./component/ColorContext"
import Coin from './component/Coin'
import Logo from './component/Logo'
import Board_black from './component/Board_black'
import Board_white from './component/Board_white'
import Player_one from './component/Player_one'
import Player_two from './component/Player_two'
import Menu from './component/Menu'
import Marker_container from './component/Marker_container'
import Board_bottom from './component/Board_bottom'

export default function Game() {
    const colorContext = useContext(ColorContext);
    const color_p1 = colorContext.ColorP1;
    const color_p2 = colorContext.ColorP2;
    const default_board = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ]

    //true = player_1 | false = player_2
    let [player_turn, setPlayer_turn] = useState(true)
    //amount of column
    let [board, setBoard] = useState(default_board);

    let can_play = useRef(true)
    let game_draw = useRef(false)
    let game_win = useRef(false)
    let marker_containerRef = useRef(null)
    let board_gameRef = useRef(null)
    let boardRef = useRef(null)
    let board_bottomRef = useRef(null)
    let bottom_page = useRef(null)

    //get correct player color
    function get_curr_player_color(player_turn) {
        return player_turn ? color_p1 : color_p2
    }

    //update a coin to some coordinates
    function update_coin(x, y, new_value) {
        // update classic arr
        const nextBoard = board.map((column, index) => {
            if (index == x) {
                return column.map((coin, index_coin) => {
                    if (index_coin == y) {
                        return new_value
                    } else {
                        return coin
                    }
                })
            } else {
                return column
            }
        })

        //update state arr
        setBoard(b => b.map((column, index) => {
            if (index == x) {
                return column.map((coin, index_coin) => {
                    if (index_coin == y) {
                        return new_value
                    } else {
                        return coin
                    }
                })
            } else {
                return column
            }
        }))

        return nextBoard
    }

    //diplay marker on top of a column
    function display_marker(column) {
        const column_id = parseInt(column.id)
        const marker_container_child = marker_containerRef.current.children

        //undisplay every marker
        for (let i = 0; i < marker_container_child.length; i++) {
            marker_container_child[i].children[0].style.display = "none"
        }

        //dislay correct marker
        marker_container_child[column_id].children[0].style.display = "block"
    }

    function put_coin(column) {
        const column_id = parseInt(column.id)
        const curr_column = board[column_id]

        //if highest coin is empty, we can put coin
        if (curr_column[0] == 0) {

            //highest index 
            let i = curr_column.length - 1

            //get index of first coin empty
            while (i >= 0 && curr_column[i] != 0) {
                i--
            }

            const actual_board = update_coin(column_id, i, player_turn ? 1 : 2)
            // setBoard(actual_board)
            const curr_coin = { x: column_id, y: i, value: actual_board[column_id][i] }

            game_turn(actual_board, curr_coin)
        }
    }

    function game_turn(board, curr_coin) {

        //verif if each coin is empty | false -> not draw 
        function verif_draw(board) {
            let line_full = true
            for (let i = 0; i < board.length; i++) {

                //if coin empty (value = 0) game not drow  
                if (board[i][0] == 0) {
                    line_full = false;
                    break
                }
            }
            return line_full
        }

        function verif_win(board, curr_coin) {

            function check_coin(board, x, y, curr_coin) {
                //column exist and coin exist and coin same value ? true : false
                return board[x] && board[x][y] && board[x][y] == curr_coin.value ? true : false
            }
            function check_row(board, curr_coin) {
                //y never move
                const y = curr_coin.y
                const coins_good = []

                //check coin to the right
                //set x to check coin first coin to the right
                let x = curr_coin.x + 1
                while (check_coin(board, x, y, curr_coin)) {
                    coins_good.push({ x: x, y: y, value: board[x][y] })
                    x++
                }

                //check coin to the left
                //set x to check coin first coin to the left
                x = curr_coin.x - 1
                while (check_coin(board, x, y, curr_coin)) {
                    coins_good.push({ x: x, y: y, value: board[x][y] })
                    x--
                }

                return coins_good
            }
            function check_column(board, curr_coin) {
                //x never move
                const x = curr_coin.x
                const coins_good = []

                //check coin above
                //set y to check the upper coin
                let y = curr_coin.y + 1
                while (check_coin(board, x, y, curr_coin)) {
                    coins_good.push({ x: x, y: y, value: board[x][y] })
                    y++
                }

                return coins_good
            }
            function check_north_west_to_south_east(board, curr_coin) {
                const coins_good = []

                //check coin to the north west
                let x = curr_coin.x - 1
                let y = curr_coin.y - 1
                while (check_coin(board, x, y, curr_coin)) {
                    coins_good.push({ x: x, y: y, value: board[x][y] })
                    x--
                    y--
                }

                //check coin to the south east
                x = curr_coin.x + 1
                y = curr_coin.y + 1
                while (check_coin(board, x, y, curr_coin)) {
                    coins_good.push({ x: x, y: y, value: board[x][y] })
                    x++
                    y++
                }

                return coins_good
            }
            function check_north_east_to_south_west(board, curr_coin) {
                const coins_good = []

                //check coin to the north east
                let x = curr_coin.x + 1
                let y = curr_coin.y - 1
                while (check_coin(board, x, y, curr_coin)) {
                    coins_good.push({ x: x, y: y, value: board[x][y] })
                    x++
                    y--
                }

                //check coin to the south west
                x = curr_coin.x - 1
                y = curr_coin.y + 1
                while (check_coin(board, x, y, curr_coin)) {
                    coins_good.push({ x: x, y: y, value: board[x][y] })
                    x--
                    y++
                }

                return coins_good
            }

            const checked_row = check_row(board, curr_coin)
            const checked_column = check_column(board, curr_coin)
            const checked_north_west_to_south_east = check_north_west_to_south_east(board, curr_coin)
            const checked_north_east_to_south_west = check_north_east_to_south_west(board, curr_coin)

            //debug
            // console.log("row good : " + (checked_row.length + 1));
            // console.log("column good : " + (checked_column.length + 1));
            // console.log("north_west_to_south_east good : " + (checked_north_west_to_south_east.length + 1));
            // console.log("north_east_to_south_west good: " + (checked_north_east_to_south_west.length + 1));

            //last coin putted
            let coin_good = [curr_coin]

            //if 3 coin good without the last coin puted
            //add all coin to coin good
            if (checked_row.length >= 3) {
                coin_good = [...coin_good, ...checked_row]
            }
            if (checked_column.length >= 3) {
                coin_good = [...coin_good, ...checked_column]
            }
            if (checked_north_west_to_south_east.length >= 3) {
                coin_good = [...coin_good, ...checked_north_west_to_south_east]
            }
            if (checked_north_east_to_south_west.length >= 3) {
                coin_good = [...coin_good, ...checked_north_east_to_south_west]
            }

            //if four or more coin correct -> win
            return coin_good.length >= 4 ? { win: true, coins_win: coin_good } : { win: false, coins_win: null }
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

        //verif win or draw
        let verify_draw = verif_draw(board)
        let verify_win = verif_win(board, curr_coin)

        if (verify_win.win) {
            function win(coins_win) {
                stop_game()

                //set state of game to win
                game_win.current = true

                //display win bottom
                let board_bottom_child = board_bottomRef.current.children
                board_bottom_child[0].style.display = "none"
                board_bottom_child[1].style.display = "flex"

                //update nbr if p1 or p2
                player_turn ? localStorage.setItem("player_one", parseInt(localStorage.getItem("player_one")) + 1) : localStorage.setItem("player_two", parseInt(localStorage.getItem("player_two")) + 1)

                //change bottom color 
                bottom_page.current.style.backgroundColor = get_curr_player_color(player_turn)

                coins_win.forEach(coin => {
                    update_coin(coin.x, coin.y, coin.value * 3)
                });
            }

            win(verify_win.coins_win)
        } else if (verify_draw) {
            function draw() {

                stop_game()

                //display draw bottom
                const board_bottom_child = board_bottomRef.current.children
                board_bottom_child[0].style.display = "none"
                board_bottom_child[2].style.display = "flex"

                game_draw.current = true
            }

            draw()
        } else {
            //inverse player turn
            setPlayer_turn(player_turn = !player_turn)
        }
    }

    // restart game
    function restart_game() {
        setBoard(default_board)

        //if player 2 set turn to player 1
        if (!player_turn) {
            setPlayer_turn(true)
        }
        if (game_win || game_draw) {
            //display default bottom
            const board_bottom_child = board_bottomRef.current.children
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
    }

    //show menu
    function display_menu() {
        const menu = document.getElementById("menu")
        menu.style.display = "flex"
    }

    //create hover dynamically 
    function update_background_color(event) {
        //if game not draw
        if (!game_draw.current) {
            //put color of actual player
            event.target.style.backgroundColor = get_curr_player_color(player_turn)
        }
    }

    //remove hover
    function resset_background_color(event) {
        //put color
        event.target.style.backgroundColor = "#5c2dd5"
        return (
            <div>

            </div>
        )
    }

    return (
        <main id='Game'>

            <Menu restart_func={restart_game} />

            <nav>
                <button onMouseEnter={event => { update_background_color(event) }} onMouseLeave={resset_background_color} className='btn_nav' id='menu_btn' onClick={display_menu} >menu</button>
                <Link to="/connect_four_v2">
                    <Logo />
                </Link>
                <button onClick={restart_game} onMouseEnter={event => update_background_color(event)} onMouseLeave={resset_background_color} className='btn_nav'>restart</button>
            </nav>

            <div className='game'>

                <Player_one />

                <Player_two />

                <Marker_container player_color={get_curr_player_color(player_turn)} ref_use={marker_containerRef} />

                <div className='board'>
                    <div className='column_for_marker' ref={boardRef}>
                        {
                            //insert clickable div
                            board.map((element, index) => (
                                <div id={index} key={index} onClick={event => { if (can_play.current) { put_coin(event.target) } }} onMouseOver={event => { if (can_play.current) { display_marker(event.target) } }}></div>
                            ))
                        }
                    </div>

                    <Board_white />

                    <div className='board_game' ref={board_gameRef}>
                        {
                            //insert each column
                            board.map((column, index) => (
                                <div key={index} className='column' id={"column_" + index}>
                                    {
                                        //insert each coin
                                        column.map((coin, index_coin) => (
                                            <div key={index_coin} className={"item"}>
                                                {
                                                    //coin not empty (value > 0) ? place coin else nothing
                                                    coin > 0 ? <Coin coin_color={get_curr_player_color(coin == 1 || coin == 3 ? true : false)} coin_is_win={coin % 3 == 0 ? true : false} index={index_coin} /> : false
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>

                    <Board_black />

                    <Board_bottom player_turn={player_turn} game_draw={game_draw} ref_use={board_bottomRef} restart_func={restart_game}/>
                </div>
            </div>

            <div className='bottom' ref={bottom_page} id='bottom'>
            </div>

        </main >
    )
}