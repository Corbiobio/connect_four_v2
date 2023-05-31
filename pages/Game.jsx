import React, { useState } from 'react'

import Column from './component/Column'
import Board_black from './component/Board_black'
import Board_white from './component/Board_white'
import Player_one from './component/Player_one'
import Player_two from './component/Player_two'
import Nav_bar from './component/Nav_bar'
import Menu from './component/Menu'
import Marker_container from './component/Marker_container'
import Board_bottom from './Board_bottom'

export default function Game() {

    function display_marker(element) {
        const marker_container = document.getElementById("marker_container")
        let current_marker_position = parseInt(element.id[element.id.length - 1] - 1)
        const marker_column = marker_container.children
        console.log(marker_container);
        const current_marker_column = marker_container.children[current_marker_position]
        console.log(current_marker_column);

        for (let i = 0; i < marker_column.length; i++) {
            marker_column[i].children[0].style.display = "none"
        }
        current_marker_column.children[0].style.display = "block"
    }

    function put_coin(element) {
        // const board_game = document.getElementById("board_game")
        const column_click = board_game.children[element.id[element.id.length - 1] - 1]

        //if first coin is empty
        if (column_click.children[0].classList[0] === "empty") {
            let i = column_click.children.length - 1
            //get index of first coin empty
            while (i >= 0 && column_click.children[i].classList[0] !== "empty") {
                i--
            }
            if (turn_color === true) {
                column_click.children[i].className = "red item"
                column_click.children[i].innerHTML = "<picture><source media= \"(min-width:750px)\" srcSet = \'/images/counter-red-large.svg\' /><img src=\"/images/counter-red-small.svg\" alt=\"coin\" /></picture >"
            } else {
                column_click.children[i].className = "yellow item"
                column_click.children[i].innerHTML = "<picture><source media= \"(min-width:750px)\" srcSet = \'/images/counter-yellow-large.svg\' /><img src=\"/images/counter-yellow-small.svg\" alt=\"coin\" /></picture >"
            }
            game_turn()
        }
    }


    let [img_bottom, setImg_bottom] = useState("/images/turn-background-red.svg")
    let [img_marker, setImg_marker] = useState("/images/marker-red.svg")


    //true = red | false = yellow
    let turn_color = true

    function game_turn() {
        let red_img_bottom = "/images/turn-background-red.svg"
        let yellow_img_bottom = "/images/turn-background-yellow.svg"

        let red_img_marker = "/images/marker-red.svg"
        let yellow_img_marker = "/images/marker-yellow.svg"

        if (turn_color) {
            setImg_bottom(img_bottom = red_img_bottom)
            setImg_marker(img_marker = red_img_marker)
        } else {
            setImg_bottom(img_bottom = yellow_img_bottom)
            setImg_marker(img_marker = yellow_img_marker)
        }
        console.log(turn_color);
        turn_color = !turn_color
    }

    return (
        <main id='Game'>

            <Menu />

            <Nav_bar />
            <div className='game'>

                <Player_one />

                <Player_two />

                <Marker_container src_img={img_marker} />

                <div className='board'>
                    <div className='column_for_marker'>
                        <div id='marker1' onClick={element => { put_coin(element.target) }} onMouseOver={element => { display_marker(element.target) }}></div>
                        <div id='marker2' onClick={element => { put_coin(element.target) }} onMouseOver={element => { display_marker(element.target) }}></div>
                        <div id='marker3' onClick={element => { put_coin(element.target) }} onMouseOver={element => { display_marker(element.target) }}></div>
                        <div id='marker4' onClick={element => { put_coin(element.target) }} onMouseOver={element => { display_marker(element.target) }}></div>
                        <div id='marker5' onClick={element => { put_coin(element.target) }} onMouseOver={element => { display_marker(element.target) }}></div>
                        <div id='marker6' onClick={element => { put_coin(element.target) }} onMouseOver={element => { display_marker(element.target) }}></div>
                        <div id='marker7' onClick={element => { put_coin(element.target) }} onMouseOver={element => { display_marker(element.target) }}></div>
                    </div>

                    <Board_white />

                    <div className='board_game' id='board_game'>

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