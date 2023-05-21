import React from 'react'

export default function Game() {
    return (
        <main id='Game'>
            <nav>
                <button className='btn_nav'>menu</button>
                <img src="/images/logo.svg" alt="logo" />
                <a href="/game" className='btn_nav'>restart</a>
            </nav>
        </main >
    )
}
