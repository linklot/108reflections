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

export const Contact = () =>
<div>
    <header className="w3-display-container w3-content w3-wide" style={maxWidthStyle}>
        <img className="w3-image" style={maxHeightStyle} src="./images/contact_title.jpg" width={1500} height={300} alt="Architecture"></img>
        <div className="w3-display-middle w3-margin-top w3-center">
            <h1 className="w3-xxlarge w3-text-white">
                <span className="w3-padding w3-black w3-opacity-min w3-round-medium">This is 108 Reflections</span>
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
            <div className="w3-col l3 m3 s12 w3-margin-bottom">
                <div className="w3-display-container">
                    <img src="./images/photo_01.jpg" alt="House" style={fullWidthStyle} />
                </div>
            </div>
            <div className="w3-col l9 m9 s12 w3-margin-bottom">
                <div className="w3-display-container">
                    <p>Considered an invitation do introduced sufficient understood instrument it. Of decisively friendship in as collecting at. No affixed be husband ye females brother garrets proceed. Least child who seven happy yet balls young. Discovery sweetness principle discourse shameless bed one excellent. Sentiments of surrounded friendship dispatched connection is he. Me or produce besides hastily up as pleased. Bore less when had and john shed hope. </p>
                    <p>Sex reached suppose our whether. Oh really by an manner sister so. One sportsman tolerably him extensive put she immediate. He abroad of cannot looked in. Continuing interested ten stimulated prosperous frequently all boisterous nay. Of oh really he extent horses wicket. </p>
                </div>
            </div>
        </div>
    </div>
</div>