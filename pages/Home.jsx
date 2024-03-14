import React from 'react'
import { Link } from 'react-router-dom'

export default function App() {

    //get if color in local storage 
    let color_p1 = localStorage.getItem("color_p1") ? localStorage.getItem("color_p1") : localStorage.setItem("color_p1", "#FD6687")
    let color_p2 = localStorage.getItem("color_p2") ? localStorage.getItem("color_p2") : localStorage.setItem("color_p2", "#FFCE67")

    //if color is correct color ? true keep color : false default color
    color_p1 = CSS.supports("fill", color_p1) ? color_p1 : "#FD6687"
    color_p2 = CSS.supports("fill", color_p2) ? color_p2 : "#FFCE67"

    return (
        <main id='Home'>
            <nav>
                <svg width="58px" height="61px" viewBox="0 0 58 61" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <title>logo</title>
                    <g id="Designs" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="assets" transform="translate(-432.000000, -742.000000)">
                            <g id="Group-24" transform="translate(211.000000, 160.000000)">
                                <g id="logo" transform="translate(221.000000, 582.000000)">
                                    <g id="Group-23" fill="#000000">
                                        <circle id="Oval-Copy-47" cx="13" cy="13" r="13"></circle>
                                        <circle id="Oval-Copy-51" cx="45" cy="13" r="13"></circle>
                                        <circle id="Oval-Copy-53" cx="13" cy="45" r="13"></circle>
                                        <circle id="Oval-Copy-52" cx="45" cy="45" r="13"></circle>
                                    </g>
                                    <g id="Group-23-Copy" transform="translate(0.000000, 3.000000)" fill="#000000">
                                        <circle id="Oval-Copy-47" cx="13" cy="13" r="13"></circle>
                                        <circle id="Oval-Copy-51" cx="45" cy="13" r="13"></circle>
                                        <circle id="Oval-Copy-53" cx="13" cy="45" r="13"></circle>
                                        <circle id="Oval-Copy-52" cx="45" cy="45" r="13"></circle>
                                    </g>
                                    <circle id="Oval-Copy-11" fill={color_p1} cx="13" cy="13" r="10"></circle>
                                    <circle id="Oval-Copy-25" fill={color_p1} cx="45" cy="45" r="10"></circle>
                                    <circle id="Oval-Copy-23" fill={color_p2} cx="45" cy="13" r="10"></circle>
                                    <circle id="Oval-Copy-24" fill={color_p2} cx="13" cy="45" r="10"></circle>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>

                <div>
                    <Link to="/connect_four_v2/game" className='btn' style={{ backgroundColor: color_p1 }}>
                        Player vs PLayer
                        <svg width="82px" height="46px" viewBox="0 0 82 46" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>player-vs-player</title>
                            <g id="Designs" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="player-vs-player">
                                    <circle id="Oval-Copy-17" fill="#000000" cx="59" cy="23" r="23"></circle>
                                    <circle id="Oval-Copy-11" fill={color_p1} cx="59" cy="23" r="20"></circle>
                                    <g id="Group-8" transform="translate(52.333333, 14.666667)" stroke="#000000" strokeWidth="3">
                                        <path d="M5,22.2916667 C10.5228475,22.2916667 15,17.8145142 15,12.2916667 C15,6.76881917 10.5228475,2.29166667 5,2.29166667" id="Oval-Copy-11" transform="translate(10.000000, 12.291667) rotate(90.000000) translate(-10.000000, -12.291667) "></path>
                                        <g id="Group-7" transform="translate(8.125000, -0.000000)">
                                            <line x1="0.416666667" y1="0" x2="0.416666667" y2="4.98700291" id="Path"></line>
                                            <line x1="8.75" y1="0" x2="8.75" y2="4.98700291" id="Path-Copy"></line>
                                        </g>
                                    </g>
                                    <circle id="Oval-Copy-18" fill="#000000" cx="23" cy="23" r="23"></circle>
                                    <g id="Group-2" transform="translate(3.000000, 3.000000)">
                                        <circle id="Oval-Copy-11" fill={color_p1} cx="20" cy="20" r="20"></circle>
                                        <g id="Group-8" transform="translate(13.333333, 11.666667)" stroke="#000000" strokeWidth="3">
                                            <path d="M5,22.2916667 C10.5228475,22.2916667 15,17.8145142 15,12.2916667 C15,6.76881917 10.5228475,2.29166667 5,2.29166667" id="Oval-Copy-11" transform="translate(10.000000, 12.291667) rotate(90.000000) translate(-10.000000, -12.291667) "></path>
                                            <g id="Group-7" transform="translate(8.125000, 0.000000)">
                                                <line x1="0.416666667" y1="0" x2="0.416666667" y2="4.98700291" id="Path"></line>
                                                <line x1="8.75" y1="0" x2="8.75" y2="4.98700291" id="Path-Copy"></line>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Link>
                    <Link to="/connect_four_v2/rules" className='btn'>Game rules</Link>
                </div>
            </nav>
        </main >
    )
}
