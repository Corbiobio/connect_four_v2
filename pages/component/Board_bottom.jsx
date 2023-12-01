import React, { useRef } from 'react'

export default function Board_bottom({ turn, src_img, ref_use }) {

    let turn_player = useRef(1)

    if (turn) {
        turn_player.current = 1
    } else {
        turn_player.current = 2
    }

    return (
        <div className='board_bottom' ref={ref_use}>
            <div className='bottom_game_turn'>
                <img src={src_img} alt="triangle with score" />
                <div>
                    <p>player {turn_player.current}'s turn</p>
                    <strong>0<span>s</span></strong>
                </div>
            </div>
            <div className='bottom_game_finish'>
                <p>player {turn_player.current}</p>
                <strong>wins</strong>
                <a className='btn_hover_red' href='/game'>play again</a>
            </div>
            <div className='bottom_game_finish'>
                <strong>Draw</strong>
                <a className='btn_hover_red' href='/game'>play again</a>
            </div>
        </div>
    )
}
