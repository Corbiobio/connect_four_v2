import React, { useContext } from "react";
import { ColorContext } from "./ColorContext"

function HelpMenu() {
    const context = useContext(ColorContext)

    function update_color(num_color, event) {
        //get the element
        const item = event.target;
        localStorage.setItem("color_p" + num_color, item.value)

        //update color value
        context.UpdateColor()
    }

    return (
        <div className="help_menu">
            <div className="help_content">
                <div>
                    <label htmlFor="color_p1">Player 1 :</label>
                    <input type="color" id="color_p1" onChange={(event) => { update_color(1, event) }} value={context.ColorP1} />
                </div>
                <div>
                    <label htmlFor="color_p2">Player 2 :</label>
                    <input type="color" id="color_p2" onChange={(event) => { update_color(2, event) }} value={context.ColorP2} />
                </div>
            </div>
            <div className="help_btn">
                <img src="/images/info.svg" alt="coin" />
            </div>
        </div>
    )
}

export default HelpMenu;