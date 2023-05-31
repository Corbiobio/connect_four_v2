import React from 'react'

export default function Board_bottom({ src_img }) {
    return (
        <div className='board_bottom'>
            <img src={src_img} alt="triangle with score" />
            <div>
                <p>player 2's turn</p>
                <strong>0<span>s</span></strong>
            </div>
        </div>)
}
