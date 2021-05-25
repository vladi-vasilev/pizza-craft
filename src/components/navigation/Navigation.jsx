import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../home/Home';
import Order from '../order/Order';
import Restorants from '../restorants/Restorants';
import About from '../about/About';
import './navigation.css';
import ErrorPage from '../errorPage/ErrorPage';

const Navigation = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/order">Order a Pizza</Link></li>
                        <li><Link to="/restorants">Restorants</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/order">
                        <Order />
                    </Route>
                    <Route path="/restorants">
                        <Restorants />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="*">
                        <ErrorPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Navigation;
