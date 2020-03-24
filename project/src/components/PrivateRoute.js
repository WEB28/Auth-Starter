// Purpose --> replace teh <Route /> In our routing setup for any routes that should be rotected

import React from 'react';
import { Route, Redirect } from "react-router-dom";

/* 
    Private Route rules:
        1. It has the same API as <Route />
        2. It renders a <Route /> and passes all the props through to it.
        3. It checks if the user in authorized , id they are, it renders the "component" prop. Id not, it redirects the user to /login
*/

const PrivateRoute = ({ component: Component, ...rest}) => {
    // fancy JS to pull the component prop out of the props obj
    // use the ...rest operator (rest is a banana word, it pull the component out and then put all the other properties onto a rest property)
    // exact and path get captured by rest 
    // pulled the component out and then renamed it as Component in order to return further down
    // rename component to Component
    return (
        <Route {...rest} render={props => {
            if(localStorage.getItem('token')) {
                // user is authenticated
                return <Component {...props} />
            } else {
                // user not authorized, redirect to /login
                return <Redirect to="/login" />
            }
        }} />
    )
}

export default PrivateRoute;

// rest operator does this:
const someObj = {
    prop1: 'a',
    prop2: 'b',
    prop3: 'c',
    prop4: 'd',
    prop5: 'e'
};

// destructure someObj to pull out prop2
// use the ....rest operator to keep the other properties in a new object
const { prop2, ...rest } = someObj // rest is a banana term 🍌
console.log(someObj); // ==> original obj with all properties
console.log(rest); // ==> original obj with all properties except prop2
console.log(prop2); // ==> 'b'