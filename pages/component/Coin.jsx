import React from "react";

function Coin({ coin_color, coin_is_win, index }) {
    return (
        <div className={"anim_coin_fall_" + index}>
            {
                //put circle on win
                coin_is_win ? (<svg className="circle" width="800px" height="800px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <title>circle-dot-filled</title>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="drop" fill={coin_color} transform="translate(42.666667, 42.666667)">
                            <path d="M213.333333,3.55271368e-14 C331.15408,3.55271368e-14 426.666667,95.5125867 426.666667,213.333333 C426.666667,331.15408 331.15408,426.666667 213.333333,426.666667 C95.5125867,426.666667 3.55271368e-14,331.15408 3.55271368e-14,213.333333 C3.55271368e-14,95.5125867 95.5125867,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,106.666667 C154.42296,106.666667 106.666667,154.42296 106.666667,213.333333 C106.666667,272.243707 154.42296,320 213.333333,320 C272.243707,320 320,272.243707 320,213.333333 C320,154.42296 272.243707,106.666667 213.333333,106.666667 Z" id="Combined-Shape"></path>
                        </g>
                    </g>
                </svg>) : false
            }

            <svg className="item_small coin" width="41px" height="46px" viewBox="0 0 41 46" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <title>counter-small</title>
                <defs>
                    <circle id="path-small-1" cx="19.9756098" cy="19.9756098" r="16.9756098"></circle>
                    <filter x="-7.4%" y="-7.4%" width="114.7%" height="114.7%" filterUnits="objectBoundingBox" id="filter-small-2">
                        <feOffset dx="0" dy="5" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
                        <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
                    </filter>
                </defs>
                <g id="Designs" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="assets" transform="translate(-231.000000, -744.000000)">
                        <g id="Group-24" transform="translate(211.000000, 160.000000)">
                            <g id="counter-small" transform="translate(20.975610, 584.975610)">
                                <circle id="Oval-Copy-49" fill="#000000" cx="20" cy="20" r="20"></circle>
                                <circle id="Oval-Copy-50" fill="#000000" cx="20" cy="25" r="20"></circle>
                                <g id="Oval-Copy-48">
                                    <use fill={coin_color} fillRule="evenodd" xlinkHref="#path-small-1"></use>
                                    <use fill="black" fillOpacity="1" filter="url(#filter-small-2)" xlinkHref="#path-small-1"></use>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <svg className="item_large coin" width="70px" height="75px" viewBox="0 0 70 75" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <title>counter-large</title>
                <defs>
                    <circle id="path-1" cx="35" cy="35" r="32"></circle>
                    <filter x="-3.9%" y="-3.9%" width="107.8%" height="107.8%" filterUnits="objectBoundingBox" id="filter-2">
                        <feOffset dx="0" dy="5" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
                        <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
                    </filter>
                </defs>
                <g id="Designs" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="counter-large">
                        <circle id="Oval-Copy-41" fill="#000000" cx="35" cy="35" r="35"></circle>
                        <circle id="Oval-Copy-42" fill="#000000" cx="35" cy="40" r="35"></circle>
                        <g id="Oval-Copy-43">
                            <use fill={coin_color} fillRule="evenodd" xlinkHref="#path-1"></use>
                            <use fill="black" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1"></use>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
}

export default Coin;
