import * as React from 'react';

const maxWidthStyle = {
    maxWidth: 1500
};

const maxHeightStyle = {
    maxHeight: 300
};

const fullWidthStyle = {
    width: '100%'
};

const iconImg = {
    borderRadius: '8pt',
    boxShadow: '5px 5px 5px rgba(100, 100, 100, .5)',
    height: '120px'
}

const rulesList = {
    lineHeight: '30px'
}

export const RulesForms = () =>
    <div>
        <header className="w3-display-container w3-content w3-wide" style={maxWidthStyle}>
            <img className="w3-image" style={maxHeightStyle} src="./images/rulesForms_title.jpg" width={1500} height={300} alt="Architecture"></img>
            <div className="w3-display-middle w3-margin-top w3-center">
                <h1 className="w3-xxlarge w3-text-white">
                    <img style={iconImg} src="./images/icon.jpg"></img>
                </h1>
            </div>
        </header>

        <div className="w3-content w3-padding" style={maxWidthStyle}>
            <div className="w3-padding w3-container">
                <h3 className="w3-padding-16">
                    <i className="fas fa-paste w3-text-teal"></i> Rules
                </h3>
            </div>

            <div className="w3-row-padding w3-border-bottom w3-border-light-grey">
                <div className="w3-col l12 m12 s12 w3-margin-bottom">
                    <div className="w3-display-container w3-left">
                        Please also observe the terms of any notice displayed in the mailroom, lifts, and any other part of the Common Property by authority of the Owners Corporation and comply with directions of the building manager.
                    </div>
                    <div className="w3-display-container w3-left">
                        <ul style={rulesList}>
                            <li><a href="../pdf/Owners_Corporation_Rules_Reflections.pdf" target="_blank">Owners Corporation Rules</a></li>
                            <li><a href="../pdf/Level_4_Terrace_Facilities_Rules.pdf" target="_blank">Level 4 Terrace Facilities Rules</a></li>
                            <li><a href="../pdf/New_Resident_Induction.pdf" target="_blank">New Resident Induction</a></li>
                            <li><a href="../pdf/Move_in_out_large_items.pdf" target="_blank">Moving in / out Large Items</a></li>
                            <li><a href="../pdf/Induction_Required_before_Parking_on_Car_Sliders_Stackers.pdf" target="_blank">Induction Required before Parking on Car Sliders/Stackers</a></li>
                            <li><a href="../pdf/Rules_about_After_Hours_Noise.pdf" target="_blank">Rules about After Hours Noise</a></li>
                            <li><a href="../pdf/No_Hard_Waste_Personal_Items_on_Common_Property.pdf" target="_blank">No Hard Waste / Personal Items on Common Property</a></li>
                            <li><a href="../pdf/How_to_Use_Chutes.pdf" target="_blank">How to Use Chutes</a></li>
                            <li><a href="../pdf/Objects_thrown_falling_off_balconies.pdf" target="_blank">Objects thrown/falling off balconies</a></li>
                            <li><a href="../pdf/Disposal_of_Electronic_Waste.pdf" target="_blank">Disposal of Electronic Waste (Requirement of New Victorian Legislation)</a></li>
                            <li><a href="../pdf/Animals_must_be_on_a_leash.pdf" target="_blank">Animals must be on a leash</a></li>
                            <li><a href="../pdf/Unauthorised_parking.pdf" target="_blank">Unauthorised parking</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="w3-content w3-padding" style={maxWidthStyle}>
            <div className="w3-container">
                <h3>
                    <i className="fas fa-paste w3-text-teal"></i> Forms
                </h3>
            </div>

            <div className="w3-row-padding w3-border-bottom w3-border-light-grey">
                <div className="w3-col l12 m12 s12 w3-margin-bottom">
                    <div className="w3-display-container w3-left">
                        <ul style={rulesList}>
                            <li><a href="../pdf/Fob_Remote_Order_Form_Aug_2018.pdf" target="_blank">Fob / Remote Order Form</a></li>
                            <li><a href="https://www.turnbullcook.com.au/apartment-key-request/" target="_blank">Apartment Key Order</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>