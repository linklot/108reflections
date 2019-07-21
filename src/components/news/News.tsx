import * as React from 'react';
import * as css from './News.css';

const maxWidthStyle = {
    maxWidth: 1500
};

const maxHeightStyle = {
    maxHeight: 300
};

const fullWidthStyle = {
    width: '100%'
};

export const News = () =>
    <div>
        <header className="w3-display-container w3-content w3-wide" style={maxWidthStyle}>
            <img className="w3-image" style={maxHeightStyle} src="./images/news_title.jpg" width={1500} height={300} alt="Architecture"></img>
            <div className="w3-display-middle w3-margin-top w3-center">
                <h1 className="w3-xxlarge w3-text-white">
                    <img className={css.iconImg} src="./images/icon.jpg"></img>
                </h1>
            </div>
        </header>

        <div className="w3-content w3-padding" style={maxWidthStyle}>
            {/* News section */}
            <div className="w3-container w3-padding-32">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
                    <i className="fas fa-bullhorn w3-text-teal"></i> News
                </h3>
            </div>

            <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
                <div className="w3-col l3 m3 s12 w3-margin-bottom">
                    <div className="w3-display-container">
                        <img src="./images/safety_first.jpg" alt="House" style={fullWidthStyle} />
                    </div>
                </div>
                <div className="w3-col l9 m9 s12 w3-margin-bottom">
                    <div className="w3-display-container">
                        <h4 className={css.news_title}>Police Officer Site Visit</h4>
                        <p className={css.news_paragraph}>Nick, Community Liaison Officer from Victoria Police, came to inspect our building for safety audit and discussed with some of our committee members and residents about security issues. He recommended measures for residents to take to increase the security of the building.</p>
                        <p className={css.news_paragraph}>Residents are recommended to use stronger bike locks such as the typical D-shape bicycle lock. For above bonnet storage cages, residents are recommended to use a length of chain/padlock and wrap the chain through the bottom frame of the gate and bottom horizontal bar of the cage to reduce the opening area of the gates. Residents are encouraged to call 000 should they see anything suspicious or observe a non-resident enter the car park particularly on foot. It is also suggested that residents never leave valuables in vehicles and always lock their vehicles even whilst in the car park.</p>
                        <p className={css.news_paragraph}>He also made recommendations on security measures on the common property which have been passed to the Owners Corporation Committee to consider. </p>
                    </div>
                </div>
            </div>

            <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
                <div className="w3-col l3 m3 s12 w3-margin-bottom">
                    <div className="w3-display-container">
                        <img src="./images/fire-alarm.jpg" alt="House" style={fullWidthStyle} />
                    </div>
                </div>
                <div className="w3-col l9 m9 s12 w3-margin-bottom">
                    <div className="w3-display-container">
                        <h4 className={css.news_title}>Fire alarm incident</h4>
                        <p className={css.news_paragraph}>The fire alarm in the building went off on Sunday night 30/06/2019 and two MFB trucks attended. The alarm was activated by a smoke detector sensing someone smoking on a certain level in the stairwell.</p>
                        <p className={css.news_paragraph}>We would like to remind all residents that, according to the Owners Corporation Rules,</p>
                        <p className={css.news_paragraph}>
                            <ul>
                                <li>Smoking is expressly prohibited in the stairwells, lifts, foyers, car park, and other designated parts of the Common Property</li>
                                <li>Owners or occupiers responsible for the incident may be imposed charges incurred to the Owners Corporation for the MFB attendance</li>
                            </ul>
                        </p>
                        <p className={css.news_paragraph}>If you smell or notice anything suspicious, please report to Building Manager for investigation.</p>
                        <p className={css.news_paragraph}><strong>Note:</strong> Monthly fire system speaker testing is always conducted during normal hours and accompanied with the message that it is testing only, and no action required.</p>
                        <p className={css.news_paragraph}>Whenever you hear the evacuation announcement after hours asking you to evacuate immediately please follow the evacuation plan (available in the lift lobby on every level) and use the fire stairwells to make your way out of the building without delay.</p>
                    </div>
                </div>
            </div>

            <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
                <div className="w3-col l3 m3 s12 w3-margin-bottom">
                    <div className="w3-display-container">
                        <img src="./images/news_003.jpg" alt="House" style={fullWidthStyle} />
                    </div>
                </div>
                <div className="w3-col l9 m9 s12 w3-margin-bottom">
                    <div className="w3-display-container">
                        <h4 className={css.news_title}>Gardiner Reserve Park Expansion</h4>
                        <p className={css.news_paragraph}>The improved Gardiner Reserve Park across Haines Street has been open for the public to enjoy since April 2019.</p>
                        <p className={css.news_paragraph}>After the expansion Gardiner Reserve Park will provide 1) more street parking spaces; 2) BBQ and playground facilities; 3) bigger park and more plants.</p>
                    </div>
                </div>
            </div>

            <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
                <div className="w3-col l3 m3 s12 w3-margin-bottom">
                    <div className="w3-display-container">
                        <img src="./images/New_facilities_marked.png" alt="House" style={fullWidthStyle} />
                    </div>
                </div>
                <div className="w3-col l9 m9 s12 w3-margin-bottom">
                    <div className="w3-display-container">
                        <h4 className={css.news_title}>New North Melbourne Station is on the way</h4>
                        <p className={css.news_paragraph}>A new underground North Melbourne Station will be located near the corner of Arden and Laurens Streets about 450 metres walking distance from our building. It is estimated that work will take around eight years. Excavation at the site is underway and will continue until mid-2019.</p>
                    </div>
                </div>
            </div>

            <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
                <div className="w3-col l3 m3 s12 w3-margin-bottom">
                    <div className="w3-display-container">
                        <img src="./images/News_new_woolworths_supermarket.jpg" alt="woolworths" style={fullWidthStyle}></img>
                    </div>
                </div>
                <div className="w3-col l9 m9 s12 w3-margin-bottom">
                    <div className="w3-display-container">
                        <h4 className={css.news_title}>New Woolworths supermarket in Arden Gardens</h4>
                        <p className={css.news_paragraph}>Woolworths Arden Gardens store has been open since February 2019. The new store is only about 450 metres from our building.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>