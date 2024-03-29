import * as React from 'react';
import {
    Route,
    HashRouter,
    NavLink
} from 'react-router-dom';

import { Home } from './home/Home';
import { News } from './news/News';
import { RulesForms } from './rulesForms/RulesForms';
import Bookings from './bookings/Bookings';
import { Contact } from './contact/Contact';
import { BookingType } from '../models/BookingType';
import { render } from 'react-dom';

export const App = () =>
    <HashRouter>
        <div>
            <div className="w3-top">
                <div className="w3-bar w3-white w3-wide w3-padding w3-card my-top-bar">
                    <span className="w3-bar-item" style={{ textDecoration: 'none' }}>
                        <strong>Reflections Apartments</strong>
                    </span>

                    <div className="w3-right w3-hide-medium w3-hide-small">
                        <NavLink exact to="/" className="w3-bar-item w3-button">HOME</NavLink>
                        <NavLink to="/news" className="w3-bar-item w3-button">NEWS</NavLink>
                        <NavLink to="/rulesForms" className="w3-bar-item w3-button">RULES &amp; FORMS</NavLink>
                        <NavLink to="/bookings" className="w3-bar-item w3-button">BOOKINGS</NavLink>
                        <NavLink to="/contact" className="w3-bar-item w3-button">CONTACT</NavLink>
                    </div>
                </div>
            </div>

            <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/news" component={News} />
                <Route path="/rulesForms" component={RulesForms} />
                <Route path="/bookings" render={(routeProps) => (<Bookings bookingMode={BookingType.NA} />)} />
                <Route path="/contact" component={Contact} />
            </div>

            {/* Footer */}
            <footer className="w3-center w3-black w3-padding-16">
                <p>Copyright &copy; Reflections Apartments 2019</p>
            </footer>
            {/* Footer */}
        </div>
    </HashRouter>