import React from "react";
// eslint-disable-next-line
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Settings from "./private/Settings/Settings";
import Login from "./public/Login/Login";

function Routes(){

    function PrivateRoute({children, ...rest}){
        return (
            <Route {...rest} render={() =>{
                return localStorage.getItem('token')
                ? children
                : <Redirect to="/" />
            }}/>
        )
    }


    return (
        <BrowserRouter>
            <Route path="/" exact>
                <Login />
            </Route>
            <PrivateRoute path="/settings">
                <Settings />
            </PrivateRoute>
        </BrowserRouter>
    )

}

export default Routes;