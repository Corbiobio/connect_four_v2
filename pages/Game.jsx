import React from 'react'
import { Link } from 'react-router-dom'

export default function Game() {
    return (
        <main id='Game'>

            {/* <div className='menu'>
                <div className='menu_btn_container'>
                    <p>pause</p>
                    <div className='btn_menu'>continue game</div>
                    <div className='btn_menu'>restart</div>
                    <Link className='btn_menu btn_menu_pink' to="/">quit game</Link>
                </div>
            </div> */}

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
                    <div className='column_for_marker'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <img src="/images/board-layer-white-small.svg" alt="board" />
                    <div className='board_game'>
                        <div className='column'>
                            <div className="item"><img src="/images/counter-yellow-small.svg" alt="" /></div>
                            <div className="item"><img src="/images/counter-yellow-small.svg" alt="" /></div>
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
                    <img src="/images/board-layer-black-small.svg" alt="board" />
                    <div className='board_bottom'>
                        <img src="/images/turn-background-red.svg" alt="red triangle" />
                        <div>
                            <p>player 2's turn</p>
                            <strong>0<span>s</span></strong>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom'>
            </div>
        </main >
    )
}
