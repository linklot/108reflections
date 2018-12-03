import * as React from 'react';
import { supplier } from '../contact/Contact.css';

const maxWidthStyle = {
    maxWidth: 1500
};

const maxHeightStyle = {
    maxHeight: 300
};

const fullWidthStyle = {
    width: '100%'
};

export const RulesForms = () =>
    <div>
        <header className="w3-display-container w3-content w3-wide" style={maxWidthStyle}>
            <img className="w3-image" style={maxHeightStyle} src="./images/rulesForms_title.jpg" width={1500} height={300} alt="Architecture"></img>
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
                <i className="fas fa-paste w3-text-teal"></i> Rules &amp; Forms
                </h3>
            </div>

            <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
                <div className="w3-col l5 m12 s12 w3-margin-bottom">
                    <div className="w3-display-container w3-center">
                        <div className="w3-panel w3-teal w3-round-large">
                            <h2><a href="/pdf/Owners_Corporation_Rules_Reflections.pdf" target="_blank">Owners Corporation Rules</a></h2>
                        </div>
                    </div>
                </div>
                <div className="w3-col l2 m12 s12 w3-margin-bottom"></div>
                <div className="w3-col l5 m12 s12 w3-margin-bottom">
                    <div className="w3-display-container w3-center">
                        <div className="w3-panel w3-green w3-round-large">
                            <h2><a href="/pdf/Level_4_Terrace_Facilities_Rules.pdf" target="_blank">Level 4 Terrace Facilities Rules</a></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>