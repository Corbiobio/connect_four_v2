import React, { createContext, useState } from "react";

export const ColorContext = createContext()

export const ColorProvider = ({ children }) => {

    function verifColor(num_color) {
        const color_name = "color_p" + num_color
        let color = localStorage.getItem(color_name)

        //if nothing in localstorage or uncorrect fil value -> put default value
        if (!color || !CSS.supports("fill", color)) {
            //set good default value
            localStorage.setItem(color_name, num_color === 1 ? "#FD6687" : "#FFCE67")
            color = localStorage.getItem(color_name)
        }

        return color
    }

    //default value
    const [ColorP1, setColorP1] = useState(verifColor(1))
    const [ColorP2, setColorP2] = useState(verifColor(2))

    //update function
    const UpdateColor = () => {
        setColorP1(verifColor(1))
        setColorP2(verifColor(2))
    }

    return (
        <ColorContext.Provider value={{ ColorP1, ColorP2, UpdateColor }}>
            {children}
        </ColorContext.Provider>
    )
}