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
                    <span className="w3-padding w3-black w3-opacity-min w3-round-medium">Reflections Apartments</span>
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
                <div className="w3-col l3 m12 s12 w3-margin-bottom">
                    <div className="w3-display-container">
                        <img src="./images/news_003.jpg" alt="House" style={fullWidthStyle} />
                    </div>
                </div>
                <div className="w3-col l9 m12 s12 w3-margin-bottom">
                    <div className="w3-display-container">
                        <h4 className={css.news_title}>Gardiner Reserve Park Expansion</h4>
                        <p className={css.news_paragraph}>The Gardiner Reserve Park across Haines Street is under expansion construction.</p>
                        <p className={css.news_paragraph}>The construction started in August this year and, although the signs around the park say it will be completed in February next year, their site foreman told us they are trying to finish it before Christmas.</p>
                        <p className={css.news_paragraph}>After the expansion Gardiner Reserve Park will provide 1) more street parking spaces; 2) BBQ and playground facilities; 3) bigger park and more plants – which will potentially increase the property value of our building.</p>
                    </div>
                </div>
            </div>

            <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
                <div className="w3-col l3 m12 s12 w3-margin-bottom">
                    <div className="w3-display-container">
                        <img src="./images/New_facilities_marked.png" alt="House" style={fullWidthStyle} />
                    </div>
                </div>
                <div className="w3-col l9 m12 s12 w3-margin-bottom">
                    <div className="w3-display-container">
                        <h4 className={css.news_title}>New North Melbourne Station is on the way</h4>
                        <p className={css.news_paragraph}>A new underground North Melbourne Station will be located near the corner of Arden and Laurens Streets about 450 metres walking distance from our building. It is estimated that work will take around eight years. Excavation at the site is underway and will continue until mid-2019.</p>
                    </div>
                </div>
            </div>

            <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
                <div className="w3-col l3 m12 s12 w3-margin-bottom">
                    <div className="w3-display-container">
                    </div>
                </div>
                <div className="w3-col l9 m12 s12 w3-margin-bottom">
                    <div className="w3-display-container">
                        <h4 className={css.news_title}>New Woolworths supermarket in Arden Gardens</h4>
                        <p className={css.news_paragraph}>A new Woolworths store will open on Macaulay Road next year. </p>
                        <p className={css.news_paragraph}>The development site is only about 450 metres from our building. The construction began in July 2017 and is expected to finish in February 2019.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>