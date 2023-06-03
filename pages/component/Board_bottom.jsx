import React from 'react'

export default function Board_bottom({ src_img, ref_use }) {
    return (
        <div className='board_bottom' ref={ref_use}>
            <div className='bottom_turn'>
                <img src={src_img} alt="triangle with score" />
                <div>
                    <p>player 2's turn</p>
                    <strong>0<span>s</span></strong>
                </div>
            </div>
            <div className='bottom_win'>
                <p>player 2</p>
                <strong>wins</strong>
                <button>play again</button>
            </div>
        </div>
    )
}
