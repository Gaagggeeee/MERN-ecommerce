import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mainpage from './mainpage';


function Content() {
    return (
        <>
            <Switch>
                <Route path='/'>
                    <Mainpage />
                </Route>
            </Switch>
        </>
    );
}

export default Content;
