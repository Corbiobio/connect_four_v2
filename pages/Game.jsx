import React from 'react'

export default function Game() {
    return (
        <main id='Game'>
            <nav>
                <button className='btn_nav'>menu</button>
                <img src="/images/logo.svg" alt="logo" />
                <a href="/game" className='btn_nav'>restart</a>
            </nav>
            <div className='game'>
                <div className='player_one player'>
                    <p>player 1</p>
                    <strong>0</strong>
                    <img src="/images/player-one.svg" alt="smiling face" />
                </div>

                <div className='player_two player'>
                    <p>player 2</p>
                    <strong>0</strong>
                    <img src="/images/player-two.svg" alt="smiling face" />
                </div>
                <div className='marker_container'>
                    <div className='column_marker'><img src="/images/marker-red.svg" alt="" /></div>
                    <div className='column_marker'><img src="/images/marker-red.svg" alt="" /></div>
                    <div className='column_marker'><img src="/images/marker-red.svg" alt="" /></div>
                    <div className='column_marker'><img src="/images/marker-red.svg" alt="" /></div>
                    <div className='column_marker'><img src="/images/marker-red.svg" alt="" /></div>
                    <div className='column_marker'><img src="/images/marker-red.svg" alt="" /></div>
                    <div className='column_marker'><img src="/images/marker-red.svg" alt="" /></div>
                </div>
                <div className='board'>
                    <img src="/images/board-layer-white-small.svg" alt="board" />
                    <img src="/images/board-layer-black-small.svg" alt="board" />
                    <div className='board_game'>
                        <div className='column'>
                            <div className="item"><img src="/images/counter-yellow-small.svg" alt="" /></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                        </div>
                        <div className='column'>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                        </div>
                        <div className='column'>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                        </div>
                        <div className='column'>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                        </div>
                        <div className='column'>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                        </div>
                        <div className='column'>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                        </div>
                        <div className='column'>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom'>

            </div>
        </main >
    )
}
