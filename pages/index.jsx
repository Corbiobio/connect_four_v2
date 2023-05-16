import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home"
import Game from "./Game";
import Rules from "./Rules";

const router = createBrowserRouter([{
    path: "/", element:
        <Home />
}, {
    path: "game", element:
        <Game />
}, {

    path: "rules", element:
        <Rules />
}])
const root = createRoot(document.getElementById("root"));

root.render(
    <RouterProvider router={router}></RouterProvider>
);