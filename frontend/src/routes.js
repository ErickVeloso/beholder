import React from "react";
// eslint-disable-next-line
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Settings from "./private/Settings/Settings";
import Login from "./public/Login/Login";

function Routes(){

    return (
        <BrowserRouter>
            <Route path="/" exact>
                <Login />
            </Route>
            <Route path="/settings">
                <Settings />
            </Route>
        </BrowserRouter>
    )

}

export default Routes;