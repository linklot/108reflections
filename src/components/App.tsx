import React, { Component } from 'react';
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

export default class App extends Component<any, any> {
    state: {
        showSideMenu: boolean,
    }

    constructor(props: any) {
        super(props);
        this.state = {
            showSideMenu: false,
        }
    }

    displaySideMenu = () => {
        this.setState({
            showSideMenu: true,
        })
    }

    hideSideMenu = () => {
        this.setState({
            showSideMenu: false,
        });
    }

    public render() {
        return (<HashRouter>
            <div>
                {/* Side Menu */}
                <nav id="sideMenu" className="w3-sidebar w3-right w3-bar-block w3-collapse w3-animate-left w3-card w3-hide-large"
                    style={{ zIndex: 1, width: '90%', display: this.state.showSideMenu ? 'block' : 'none' }}>
                    <a className="w3-bar-item w3-button w3-hide-large w3-large" onClick={this.hideSideMenu}>
                        Close <i className="fas fa-times"></i>
                    </a>
                    <NavLink exact to="/" className="w3-bar-item w3-button" onClick={this.hideSideMenu}>HOME</NavLink>
                    <NavLink to="/news" className="w3-bar-item w3-button" onClick={this.hideSideMenu}>NEWS</NavLink>
                    <NavLink to="/rulesForms" className="w3-bar-item w3-button" onClick={this.hideSideMenu}>RULES &amp; FORMS</NavLink>
                    <NavLink to="/bookings" className="w3-bar-item w3-button" onClick={this.hideSideMenu}>BOOKINGS</NavLink>
                    <NavLink to="/contact" className="w3-bar-item w3-button" onClick={this.hideSideMenu}>CONTACT</NavLink>
                </nav>
                {/* Side Menu */}

                <div className="w3-top">
                    <div className="w3-bar w3-white w3-wide w3-padding w3-card my-top-bar">
                        <div className="w3-hide-large">
                            <a onClick={this.displaySideMenu}><i className="w3-bar-item fa fa-bars" style={{ marginTop: 4 }}></i></a>
                        </div>

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
                    <p>Copyright &copy; Reflections Building Manager 2019</p>
                </footer>
                {/* Footer */}
            </div>
        </HashRouter>)
    }
}