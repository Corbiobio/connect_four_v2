import React, { useReducer, useRef, useState } from 'react'

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

    //true = red | false = yellow
    let [turn_color, setTurn_color] = useState(true)

    let marker_containerRef = useRef(null)
    let board_gameRef = useRef(null)
    let last_coin = useRef({ coin: null, index_column: null, index_coin: null })

    const [{ turn_for_bottom, img_bottom }, dispatch_Img_bottom] = useReducer(reducer_Img_bottom, { turn: false, img_bottom: "/images/turn-background-red.svg" })
    const [{ turn_for_marker, img_marker }, dispatch_Img_marker] = useReducer(reducer_Img_marker, { turn: false, img_marker: "/images/marker-red.svg" })

    function reducer_Img_marker({ turn, img_marker }, action) {
        let red_img_marker = "/images/marker-red.svg";
        let yellow_img_marker = "/images/marker-yellow.svg";

        switch (turn) {
            case true:
                return { turn: !turn, img_marker: red_img_marker }
            case false:
                return { turn: !turn, img_marker: yellow_img_marker }
            default:
                return { turn: turn, img_marker: red_img_marker }
        }
    }


    function reducer_Img_bottom({ turn, img_bottom }, action) {
        let red_img_bottom = "/images/turn-background-red.svg";
        let yellow_img_bottom = "/images/turn-background-yellow.svg";

        switch (turn) {
            case true:
                return { turn: !turn, img_bottom: red_img_bottom }
            case false:
                return { turn: !turn, img_bottom: yellow_img_bottom }
            default:
                return { turn: turn, img_bottom: red_img_bottom }
        }
    }


    function display_marker(element) {
        let current_column_position = parseInt(element.id)
        let marker_container_child = marker_containerRef.current.children

        for (let i = 0; i < marker_container_child.length; i++) {
            marker_container_child[i].children[0].style.display = "none"
        }

        marker_container_child[current_column_position].children[0].style.display = "block"

    }

    function put_coin(element) {
        let column_id = parseInt(element.id)
        let board_current_column = board_gameRef.current.children[column_id]

        //if first coin is empty
        if (board_current_column.children[0].classList[0] === "empty") {

            let i = board_current_column.children.length - 1

            //get index of first coin empty
            while (i >= 0 && board_current_column.children[i].classList[0] !== "empty") {
                i--
            }
            if (turn_color) {
                board_current_column.children[i].className = "red item"
                board_current_column.children[i].innerHTML = "<picture><source media= \"(min-width:750px)\" srcSet = \'/images/counter-red-large.svg\' /><img src=\"/images/counter-red-small.svg\" alt=\"coin\" /></picture >"
            } else {
                board_current_column.children[i].className = "yellow item"
                board_current_column.children[i].innerHTML = "<picture><source media= \"(min-width:750px)\" srcSet = \'/images/counter-yellow-large.svg\' /><img src=\"/images/counter-yellow-small.svg\" alt=\"coin\" /></picture >"
            }

            last_coin = { coin: board_current_column.children[i], index_column: column_id, index_coin: i }
            game_turn()
        }
    }

    function game_turn() {
        dispatch_Img_marker(turn_for_marker)
        dispatch_Img_bottom(turn_for_bottom)
        setTurn_color(turn_color = !turn_color)
        if (verif_turn()) {
            //function win
        }

    }


    function verif_turn() {
        let columns = board_gameRef.current.children

        const color_coin = last_coin.coin.classList[0]
        const coin_index_row = last_coin.index_coin
        const column_id = last_coin.index_column

        function check_row_coin(color, current_column, coin_row, columns) {
            function check_coin(color, column_id_to_check, coin_row, columns) {
                if (columns[column_id_to_check]) {
                    if (columns[column_id_to_check].children[coin_row].classList[0] === color) {
                        return true
                    } else {
                        return false
                    }
                }
            }

            let coin_good = 1

            let column_check_back = current_column
            column_check_back--

            while (check_coin(color, column_check_back, coin_row, columns)) {
                coin_good++
                column_check_back--
            }

            let column_check_front = current_column
            column_check_front++

            while (check_coin(color, column_check_front, coin_row, columns)) {
                coin_good++
                column_check_front++
            }
            return coin_good
        }

        function check_column_coin(color_coin, column_id, coin_index_row, columns) {
            function check_coin(color, row_to_check, column) {
                if (column.children[row_to_check]) {
                    if (column.children[row_to_check].classList[0] === color) {
                        return true
                    } else {
                        return false
                    }
                }
            }

            let coin_good = 1

            let row_down = coin_index_row
            row_down++
            while (check_coin(color_coin, row_down, columns[column_id])) {
                coin_good++
                row_down++
            }
            return coin_good
        }

        function check_diagonal_TopleftFromBottomright_coin(color, current_column, current_row, columns) {
            function check_coin(color, column_id_to_check, coin_row, row_check, columns) {
                if (columns[column_id_to_check] && columns[column_id_to_check].children[row_check]) {
                    if (columns[column_id_to_check].children[row_check].classList[0] === color) {
                        return true
                    } else {
                        return false
                    }
                }
            }

            let coin_good = 1

            let row_back = current_row
            let column_check_back = current_column
            column_check_back--
            row_back--

            while (check_coin(color, column_check_back, current_row, row_back, columns)) {
                coin_good++
                column_check_back--
                row_back--
            }

            let row_front = current_row
            let column_check_front = current_column
            column_check_front++
            row_front++

            while (check_coin(color, column_check_front, current_row, row_front, columns)) {
                coin_good++
                column_check_front++
                row_front++
            }
            return coin_good
        }
        function check_diagonal_ToprightFromBottomleft_coin(color, current_column, current_row, columns) {
            function check_coin(color, column_id_to_check, coin_row, row_check, columns) {
                if (columns[column_id_to_check] && columns[column_id_to_check].children[row_check]) {
                    if (columns[column_id_to_check].children[row_check].classList[0] === color) {
                        return true
                    } else {
                        return false
                    }
                }
            }

            let coin_good = 1

            let row_back = current_row
            let column_check_back = current_column
            column_check_back++
            row_back--

            while (check_coin(color, column_check_back, current_row, row_back, columns)) {
                coin_good++
                column_check_back++
                row_back--
            }

            let row_front = current_row
            let column_check_front = current_column
            column_check_front--
            row_front++

            while (check_coin(color, column_check_front, current_row, row_front, columns)) {
                coin_good++
                column_check_front--
                row_front++
            }
            return coin_good
        }
        console.log("row good : " + check_row_coin(color_coin, column_id, coin_index_row, columns));
        console.log("column good : " + check_column_coin(color_coin, column_id, coin_index_row, columns));
        console.log("diagonal_top_left good : " + check_diagonal_TopleftFromBottomright_coin(color_coin, column_id, coin_index_row, columns));
        console.log("diagonal_top_right good : " + check_diagonal_ToprightFromBottomleft_coin(color_coin, column_id, coin_index_row, columns));
        if (check_row_coin(color_coin, column_id, coin_index_row, columns) >= 4) {
            return true
        } else if (check_column_coin(color_coin, column_id, coin_index_row, columns) >= 4) {
            return true
        } else if (check_diagonal_TopleftFromBottomright_coin(color_coin, column_id, coin_index_row, columns) >= 4) {
            return true
        } else if (check_diagonal_ToprightFromBottomleft_coin(color_coin, column_id, coin_index_row, columns) >= 4) {
            return true
        } else {
            return false
        }
    }
    return (
        <main id='Game'>

            <Menu />

            <Nav_bar />

            <div className='game'>

                <Player_one />

                <Player_two />

                <Marker_container src_img={img_marker} ref_use={marker_containerRef} />

                <div className='board'>
                    <div className='column_for_marker'>
                        <div id='0' onClick={event => { put_coin(event.target) }} onMouseOver={event => { display_marker(event.target) }}></div>
                        <div id='1' onClick={event => { put_coin(event.target) }} onMouseOver={event => { display_marker(event.target) }}></div>
                        <div id='2' onClick={event => { put_coin(event.target) }} onMouseOver={event => { display_marker(event.target) }}></div>
                        <div id='3' onClick={event => { put_coin(event.target) }} onMouseOver={event => { display_marker(event.target) }}></div>
                        <div id='4' onClick={event => { put_coin(event.target) }} onMouseOver={event => { display_marker(event.target) }}></div>
                        <div id='5' onClick={event => { put_coin(event.target) }} onMouseOver={event => { display_marker(event.target) }}></div>
                        <div id='6' onClick={event => { put_coin(event.target) }} onMouseOver={event => { display_marker(event.target) }}></div>
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

                    <Board_bottom src_img={img_bottom} />
                </div>
            </div>

            <div className='bottom'>
            </div>

        </main >
    )
}