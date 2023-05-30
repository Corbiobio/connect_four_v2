import React from "react";

function Board_black() {
    return (
        <picture className='board_black' >
            <source media="(min-width:750px)" srcSet="/images/board-layer-black-large.svg" />
            <img src="/images/board-layer-black-small.svg" alt="board" />
        </picture>
    )
}
export default Board_black;