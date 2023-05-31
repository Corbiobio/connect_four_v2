import React, { useRef, useState } from 'react'

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
        let current_column_position = parseInt(element.id)
        let marker_container_child = marker_containerRef.current.children

        for (let i = 0; i < marker_container_child.length; i++) {
            marker_container_child[i].children[0].style.display = "none"
            console.log(marker_container_child[i]);
        }
        marker_container_child[current_column_position].children[0].style.display = "block"
    }

    function put_coin(element) {
        // const board_game = document.getElementById("board_game")
        const column_click = board_game.children[element.id[element.id.length - 1]]

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

    let marker_containerRef = useRef(null)

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