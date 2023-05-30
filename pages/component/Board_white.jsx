import React from "react";

function Board_white() {
    return (
        <picture className='board_white' >
            <source media="(min-width:750px)" srcSet="/images/board-layer-white-large.svg" />
            <img src="/images/board-layer-white-small.svg" alt="board" />
        </picture>
    )
}
export default Board_white;