import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home"
import Game from "./Game";
import Rules from "./Rules";
import HelpMenu from "./component/HelpMenu";
import { ColorProvider } from "./component/ColorContext";

const router = createBrowserRouter([{
    path: "/connect_four_v2",
    element: <Home />
}, {
    path: "/connect_four_v2/game",
    element: <Game />
}, {
    path: "/connect_four_v2/rules",
    element: <Rules />
}, {
    path: "*",
    element: <Home />
}])
const root = createRoot(document.getElementById("root"));

root.render(
    <ColorProvider>
        <HelpMenu />
        <RouterProvider router={router}></RouterProvider>
    </ColorProvider>
);