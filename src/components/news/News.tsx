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
                        <svg height="180" viewBox="0 0 103 127"><defs><linearGradient id="mobile-nav" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#FF373C"></stop><stop offset="100%" stopColor="#FFC72C"></stop></linearGradient></defs><g fill="none" fillRule="evenodd"><path fill="#FF373C" d="M69.484 102.05v-9.511h-4.823v1.064a.116.116 0 0 0-.037-.028 10.243 10.243 0 0 0-5.212-1.398c-5.573 0-10.035 4.376-10.035 9.873a9.815 9.815 0 0 0 3.537 7.54 9.74 9.74 0 0 0-3.537 7.531c0 5.45 4.462 9.91 10.035 9.91 5.61 0 10.072-4.46 10.072-9.91a9.724 9.724 0 0 0-3.536-7.531 9.785 9.785 0 0 0 3.536-7.54zm-15.284 0c0-2.785 2.342-5.172 5.212-5.172 2.703 0 4.916 2.063 5.212 4.59.028.193.037.387.037.582 0 .194-.009.397-.037.583-.296 2.563-2.509 4.626-5.212 4.626-2.87 0-5.212-2.387-5.212-5.21zm10.424 15.663c-.296 2.564-2.509 4.626-5.212 4.626-2.87 0-5.212-2.386-5.212-5.218 0-2.784 2.342-5.171 5.212-5.171 2.703 0 4.916 2.063 5.212 4.589.028.194.037.388.037.582 0 .204-.009.399-.037.592zm33.449-16.385c0-3.66-1.95-4.456-3.901-4.456-1.95 0-3.902.756-3.902 4.377v10.184h-4.895V92.536h4.895v1.392c1.075-.796 2.389-1.75 4.976-1.75 4.14 0 7.722 2.426 7.722 8.354v10.901h-4.895v-10.105zm-23.207 10.105h4.896V92.536h-4.896v18.897zm-34.98 0h4.895V92.536h-4.895v18.897zM24.083 92.536h4.896v1.392c1.831-1.353 3.623-1.75 7.285-1.75v4.694c-6.25 0-7.285 1.75-7.285 5.012v9.549h-4.896V92.536zM10.031 111.95C4.458 111.95 0 107.494 0 102.044c0-5.49 4.458-9.867 10.03-9.867 5.614 0 10.072 4.376 10.072 9.867 0 5.45-4.458 9.906-10.071 9.906zm0-15.078c-2.866 0-5.215 2.387-5.215 5.172 0 2.824 2.349 5.211 5.215 5.211 2.906 0 5.254-2.387 5.254-5.211 0-2.785-2.348-5.172-5.254-5.172z"></path><path fill="url(#mobile-nav)" fillRule="nonzero" d="M43 0C24.41-.016 7.92 11.83 2.135 29.356-3.649 46.88 2.587 66.108 17.587 77c15.125-11.008 35.701-11.008 50.826 0 15-10.892 21.236-30.12 15.452-47.644C78.08 11.83 61.59-.016 43 0zm0 64.39c-12.109-.01-21.919-9.752-21.916-21.764.004-12.011 9.82-21.748 21.928-21.75 12.11-.004 21.93 9.727 21.94 21.738a21.669 21.669 0 0 1-6.424 15.403A22.024 22.024 0 0 1 43 64.39z" transform="translate(8.583)"></path></g></svg>
                    </div>
                </div>
                <div className="w3-col l9 m9 s12 w3-margin-bottom">
                    <div className="w3-display-container">
                        <h4 className={css.news_title}>Energy Supplier Changed: from OC Energy to Origin Energy</h4>
                        <p className={css.news_paragraph}>Electricity supplier for the building has changed from OC Energy to Origin Energy. </p>
                        <p className={css.news_paragraph}>On the 1st of March, Origin Energy completed the purchase of OC Energy. As part of this change, individual OC Energy customers (including the common areas customers) are being moved onto Origin Energy’s billing system, rates, and terms and conditions.</p>
                        <p className={css.news_paragraph}>After following up with Origin Energy, we were advised this will happen towards the end of September 2019 but, being a complex job involving the migration of thousands of customers, it is possible this date may change. Origin Energy also suggested that lower electricity rates will apply to residential customers and common areas after the transition.</p>
                    </div>
                </div>
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
                        <p className={css.news_paragraph}>Community Liaison Officer from Victoria Police was invited by us to come and inspect our building for safety audit on 10/07/2019. The officer discussed with some of our committee members and residents about security issues. He recommended measures for residents to take to increase the security of the building.</p>
                        <p className={css.news_paragraph}>Residents are recommended to use stronger bike locks such as the typical D-shape bicycle lock. For above bonnet storage cages, residents are recommended to use a length of chain/padlock and wrap the chain through the bottom frame of the gate and bottom horizontal bar of the cage to reduce the opening area of the gates. Residents are encouraged to call 000 should they see anything suspicious or observe a non-resident enter the car park particularly on foot. It is also suggested that residents never leave valuables in vehicles and always lock their vehicles even whilst in the car park.</p>
                        <p className={css.news_paragraph}>He also made recommendations on security measures on the common property which have been passed to the Owners Corporation Committee to consider. Full report from this site visit is available upon request.</p>
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
                            <span><ul>
                                <li>Smoking is expressly prohibited in the stairwells, lifts, foyers, car park, and other designated parts of the Common Property</li>
                                <li>Owners or occupiers responsible for the incident may be imposed charges incurred to the Owners Corporation for the MFB attendance</li>
                            </ul>
                            </span>
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
                        <p className={css.news_paragraph}>After the expansion Gardiner Reserve Park provides 1) more street parking spaces; 2) BBQ and playground facilities; 3) bigger park and more plants.</p>
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
                        <p className={css.news_paragraph}>A new underground North Melbourne Station will be located near the corner of Arden and Laurens Streets about 450 metres walking distance from our building. It is estimated that work will take around eight years. Excavation at the site is underway and will continue until mid-2019. Major construction of the Metro Tunnel is continuing in and around the site of the new North Melbourne Station.</p>
                        <p className={css.news_paragraph}>Updates on the Metro Tunnel Construction - North Melbourne Station are available on</p>
                        <p><a href="https://metrotunnel.vic.gov.au/construction/north-melbourne" target="_blank">https://metrotunnel.vic.gov.au/construction/north-melbourne</a></p>
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
                        <p className={css.news_paragraph}>Woolworths Arden Gardens store has been open since February 2019. The new store is only about 450 metres from our building. There are now more retail shops available in Arden Gardens Plaza for local residents incl Australian Post Office, Café, Beauty &amp; Spa shop, Asian Grocery, etc.</p>
                        <p>Arden Gardens Plaza address: 168 Macaulay Rd, North Melbourne VIC 3051</p>
                    </div>
                </div>
            </div>
        </div>
    </div>