import * as React from 'react';
import * as css from './Contact.css';

const maxWidthStyle = {
    maxWidth: 1500
};

const maxHeightStyle = {
    maxHeight: 300
};

const fullWidthStyle = {
    width: '100%'
};

export const Contact = () =>
<div>
    <header className="w3-display-container w3-content w3-wide" style={maxWidthStyle}>
        <img className="w3-image" style={maxHeightStyle} src="./images/contact_title.jpg" width={1500} height={300} alt="Architecture"></img>
        <div className="w3-display-middle w3-margin-top w3-center">
            <h1 className="w3-xxlarge w3-text-white">
                <span className="w3-padding w3-black w3-opacity-min w3-round-medium">Reflections Apartments</span>
            </h1>
        </div>
    </header>

    <div className="w3-content w3-padding" style={maxWidthStyle}>
        {/* News section */}
        <div className="w3-container w3-padding-32">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            <i className="far fa-address-card w3-text-teal"></i> Contact Us
            </h3>
        </div>

        <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
            <div className="w3-col l6 m12 s12 w3-margin-bottom">
                <h3 className="w3-text-teal"><i className="fas fa-phone-volume"></i> Phone</h3>
                <p>0404 573 762</p>
                <h3 className={`w3-text-teal ${css.supplier}`}><i className="fas fa-at"></i> Email</h3>
                <p><a href="mailto:caretaker@108reflections.com.au">caretaker@108reflections.com.au</a></p>
            </div>
            <div className="w3-col l6 m12 s12 w3-margin-bottom">
                <div className="w3-display-container">
                    <h3 className="w3-text-blue"><i className="fas fa-tint"></i> WATER SUPPLY</h3>
                    <p>CITY WEST WATER - 132 642</p>
                    <h3 className={`w3-text-blue ${css.supplier}`}><i className="fas fa-bolt"></i> ELECTRICITY/ HOT WATER / GAS COOKTOP</h3>
                    <p>OC ENERGY - 1300 494 080</p>
                    <h3 className={`w3-text-blue ${css.supplier}`}><i className="fas fa-wifi"></i> INTERNET PROVIDER</h3>
                    <p>LIGHTNING BROADBAND - 1800 477 333</p>
                    <h3 className={`w3-text-blue ${css.supplier}`}><i className="fas fa-parking"></i> CAR STACKER INDUCTION</h3>
                    <p><a href="mailto:admin@meiaus.com.au">admin@meiaus.com.au</a></p>
                    <h3 className={`w3-text-blue ${css.supplier}`}><i className="fas fa-car"></i> CAR SLIDER INDUCTION</h3>
                    <p>Contact Building Manager: <a href="mailto:caretaker@108reflections.com.au">caretaker@108reflections.com.au</a></p>
                </div>
            </div>
        </div>
    </div>
</div>