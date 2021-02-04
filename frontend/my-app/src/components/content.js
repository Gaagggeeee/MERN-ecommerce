import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mainpage from './mainpage';
import AdminPage from './adminpage';
import Addstock from './addstock';
import Product from './product';



function Content() {
    return (
        <>
            <Switch>
                <Route path='/'>
                    <Mainpage />
                </Route>
                <Route path='/admin'>
                    <AdminPage />
                </Route>
                <Route path='/addstock'>
                    <Addstock />
                </Route>
            </Switch>
        </>
    );
}

export default Content;
