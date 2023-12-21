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

    let can_play = useRef(true)
    let marker_containerRef = useRef(null)
    let board_gameRef = useRef(null)
    let boardRef = useRef(null)
    let coin_info = useRef({ coin: null,coin_color: null, index_column: null, index_row: null })
    let board_bottomRef = useRef(null)
    let bottom_page = useRef(null)

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

    function get_color(color_bool){
        if(color_bool){
            return "red"
        }else{
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
            
            let color = get_color(turn_color)

            columnn_child[i].className = `${color} item`
            columnn_child[i].innerHTML = `<picture class=anim_coin_fall_${i}><source media= \"(min-width:750px)\" srcSet = \'/images/counter-${color}-large.svg\' /><img src=\"/images/counter-${color}-small.svg\" alt=\"coin\" /></picture >`

            coin_info = { coin: columnn_child[i],coin_color: get_color(turn_color) , index_column: column_id, index_row: i }
            game_turn(coin_info)
        }
    }

    function game_turn(coin_info) {

        function verif_draw(columns) {
            let line_full = true
            for (let i = 0; i < columns.length; i++) {
                //get first class of the highest coin of each column | value : red yellow or empty
                if(columns[i].children[0].classList[0] === "empty"){
                    line_full = false;
                    break 
                }
            }
            return line_full
        }
    
        function verif_win(columns,coin_info) {

            const coin_color = coin_info.coin_color
            const row_id = coin_info.index_row
            const column_id = coin_info.index_column
    
            function check_row(column_id,row_id,color,columns){
                function check_coins(column_id,row_id,color,columns,operation){
                    const coin_good = []
                    
                    let coin_good_flag = true
                    while (coin_good_flag) {
                        if (operation === true) {
                            column_id ++
                        }else{
                            column_id --
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
                            }else{
                                // stop while
                                coin_good_flag = false
                            }
                        }else{
                        // stop while
                        coin_good_flag = false
                        }
                    }
                    return coin_good
                }
                //true -> add | false -> remove
                let operation = true
                let after_coin_good = check_coins(column_id,row_id,color,columns,operation)
                operation = false
                let before_coin_good = check_coins(column_id,row_id,color,columns,operation)

                // all value in array
                const coin_good = [...before_coin_good,...after_coin_good]
                return coin_good
            }
            function check_column(column_id,row_id,color,columns){
                function check_coins(column_id,row_id,color,columns,operation){
                    const coin_good = []
                    
                    let coin_good_flag = true
                    while (coin_good_flag) {
                        if (operation === true) {
                            row_id ++
                        }else{
                            row_id --
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
                            }else{
                                // stop while
                                coin_good_flag = false
                            }
                        }else{
                        // stop while
                        coin_good_flag = false
                    }
                    }
                    return coin_good
                }
                //true -> add | false -> remove
                let operation = true
                let after_coin_good = check_coins(column_id,row_id,color,columns,operation)
                operation = false
                let before_coin_good = check_coins(column_id,row_id,color,columns,operation)

                // all value in array
                const coin_good = [...before_coin_good,...after_coin_good]
                return coin_good
            }
            function check_diagonal_TopleftFromBottomright_coin(color, current_column, current_row, columns) {
                function check_coin(color, column_id_to_check, coin_row, row_check, columns) {
                    if (columns[column_id_to_check] && columns[column_id_to_check].children[row_check]) {
                        if (columns[column_id_to_check].children[row_check].classList[0] === color) {
                            coin_verified.push(columns[column_id_to_check].children[row_check])
                            return true
                        } else {
                            return false
                        }
                    }
                }
    
                let coin_good = 1
                let coin_verified = [coin_info.coin]
    
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
                return { coin_good: coin_good, coin_wined: coin_verified }
            }
            function check_diagonal_ToprightFromBottomleft_coin(color, current_column, current_row, columns) {
                function check_coin(color, column_id_to_check, coin_row, row_check, columns) {
                    if (columns[column_id_to_check] && columns[column_id_to_check].children[row_check]) {
                        if (columns[column_id_to_check].children[row_check].classList[0] === color) {
                            coin_verified.push(columns[column_id_to_check].children[row_check])
                            return true
                        } else {
                            return false
                        }
                    }
                }
    
                let coin_good = 1
                let coin_verified = [coin_info.coin]
    
    
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
                return { coin_good: coin_good, coin_wined: coin_verified }
            }
    
            let checked_raw = check_row(column_id,row_id,coin_color,columns)
            let checked_column = check_column(column_id,row_id,coin_color,columns)
            let diagonal_TopleftFromBottomright_verif = check_diagonal_TopleftFromBottomright_coin(coin_color, column_id, row_id, columns)
            let diagonal_ToprightFromBottomleft_verif = check_diagonal_ToprightFromBottomleft_coin(coin_color, column_id, row_id, columns)
    
            console.log("row good : " + (checked_raw.length+1));
            console.log("column good : " + (checked_column.length + 1));
            // console.log("diagonal_top_left good : " + diagonal_TopleftFromBottomright_verif.coin_good);
            // console.log("diagonal_top_right good : " + diagonal_ToprightFromBottomleft_verif.coin_good);
    
            if (checked_raw.length + 1 >= 4) {
                return { win: true, color_win: coin_color, coins_win: checked_raw }
            } else if (checked_column.length + 1 >= 4) {
                return { win: true, color_win: coin_color, coins_win: checked_column }
            } else if (diagonal_TopleftFromBottomright_verif.coin_good >= 4) {
                return { win: true, color_win: coin_color, coins_win: diagonal_TopleftFromBottomright_verif.coin_wined }
            } else if (diagonal_ToprightFromBottomleft_verif.coin_good >= 4) {
                return { win: true, color_win: coin_color, coins_win: diagonal_ToprightFromBottomleft_verif.coin_wined }
            } else {
                return { win: false, color_win: null, coins_win: null }
            }
        }

        //stop action on board
        function stop_game(){
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

        //change class for btn
        function change_class_small_btn(color_status) {

            let main_color = get_color(color_status);
            let second_color = main_color === "red" ? "yellow" : "red"

            let btn = document.getElementsByClassName("btn_hover_" + main_color)
            //replace html collection by arr
            btn = [...btn]

            //replace class by other one
            btn.map((btn)=>{
                btn.classList.replace("btn_hover_" + main_color,"btn_hover_" + second_color)
            })
        }

        //get all columns
        let columns = board_gameRef.current.children

        //verif win or draw
        let verify_draw = verif_draw(columns)
        let verify_win = verif_win(columns,coin_info)

        if (verify_win.win) {
            function win(color_win, coin_win) {
                stop_game()

                //display win bottom
                let board_bottom_child = board_bottomRef.current.children
                board_bottom_child[0].style.display = "none"
                board_bottom_child[1].style.display = "flex"

                //change bottom color
                //update nbr of win 
                if (color_win === "red") {
                    bottom_page.current.style.backgroundColor = "#FD6687"
                    localStorage.setItem("player_one",parseInt(localStorage.getItem("player_one"))+1)
                } else {
                    bottom_page.current.style.backgroundColor = "#FFCE67"
                    localStorage.setItem("player_two",parseInt(localStorage.getItem("player_two"))+1)
                }

                for (let i = 0; i < coin_win.length; i++) {
                    //put circle on correct coin
                    coin_win[i].innerHTML += "<img src=\"/images/circle-dot-filled-svgrepo-com.svg\" alt=\"circle\" class=\"circle\" />"
                    //remove class because animation play a new time when win
                    coin_win[i].firstElementChild.className = ""
                }
            }

            win(verify_win.color_win, verify_win.coins_win)
        }else if (verify_draw){
            function draw(){

                stop_game()

                //display draw bottom
                let board_bottom_child = board_bottomRef.current.children
                board_bottom_child[0].style.display = "none"
                board_bottom_child[2].style.display = "flex"

                // remove hover color on small btn
                
                let color = get_color(turn_color)

                let btn = document.getElementsByClassName("btn_hover_" + color)
                //replace html collection by arr
                btn = [...btn]
                //remove class
                btn.map((btn)=>{
                    btn.classList.remove("btn_hover_" + color)
                })
            }

            draw()

        } else {
            //change color of marker and bottom div for each turn
            dispatch_Img_marker(turn_for_marker)
            dispatch_Img_bottom(turn_for_bottom)

            //change hover color on small btn
            change_class_small_btn(turn_color)
            
            setTurn_color(turn_color = !turn_color)
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

                    <Board_bottom turn={turn_color} src_img={img_bottom} ref_use={board_bottomRef} />
                </div>
            </div>

            <div className='bottom' ref={bottom_page}>
            </div>

        </main >
    )
}