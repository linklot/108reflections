import * as React from 'react';
import {
    Route,
    HashRouter,
    NavLink
} from 'react-router-dom';

import { Home } from './Home';
import { News } from './News';
import { RulesForms } from './RulesForms';
import { Bookings } from './Bookings';
import { Contact } from './Contact';

export const App = () =>
    <HashRouter>
        <div>
            <div className="w3-top">
                <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                    <a href="/" className="w3-bar-item w3-button"><strong>108</strong> Reflections</a>

                    <div className="w3-right w3-hide-small">
                        <NavLink exact to="/" className="w3-bar-item w3-button">HOME</NavLink>
                        <NavLink to="/news" className="w3-bar-item w3-button">NEWS</NavLink>
                        <NavLink to="/rulesForms" className="w3-bar-item w3-button">RULES &amp; FORMS</NavLink>
                        <NavLink to="/bookings" className="w3-bar-item w3-button">BOOKINGS</NavLink>
                        <NavLink to="/contact" className="w3-bar-item w3-button">CONTACT US</NavLink>
                    </div>
                </div>
            </div>
            <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/news" component={News} />
                <Route path="/rulesForms" component={RulesForms} />
                <Route path="/bookings" component={Bookings} />
                <Route path="/contact" component={Contact} />
            </div>
        </div>
    </HashRouter>