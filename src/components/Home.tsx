import * as React from 'react';
import * as css from './Home.css';

const headerStyle = {
    maxWidth: 1500
};
const maxWidthStyle = {
    maxWidth: 1564
};
const fullWidthStyle = {
    width: '100%'
};
const cardContainerStyle = {
    width: '80%',
    margin: '30px auto 0 auto',
};
const cardHr = {
    width: 100,
    height: 4,
    margin: '0 auto 0 auto',
    backgroundColor: '#009688',
    border: 0
};
const cardP = {
    height: 4
};
const cardTitle = {
    fontSize: 18,
    margin: '10px auto 10px auto',
};
const cardBody = {
    margin: '30px auto 50px auto',
    color: '#999999',
};

export const Home = () =>
    <div>
        <header className="w3-display-container w3-content w3-wide" style={headerStyle}>
            <img className="w3-image" src="./images/architect.jpg" width={1500} height={800} alt="Architecture"></img>
            <div className="w3-display-middle w3-margin-top w3-center">
                <h1 className="w3-xxlarge w3-text-white">
                    <span className="w3-padding w3-black w3-opacity-min w3-round-medium">This is 108 Reflections</span>
                </h1>
            </div>
        </header>

        <div className="w3-content w3-padding" style={maxWidthStyle}>
            {/* Photos section */}
            <div className="w3-container w3-padding-32">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Photos</h3>
            </div>

            <div className="w3-row-padding">
                <div className="w3-col l4 m4 w3-margin-bottom">
                    <div className="w3-display-container">
                        <img src="./images/photo_01.jpg" alt="House" style={fullWidthStyle} />
                    </div>
                </div>
                <div className="w3-col l4 m4 w3-margin-bottom">
                    <div className="w3-display-container">
                        <img src="./images/photo_02.jpg" alt="House" style={fullWidthStyle} />
                    </div>
                </div>
                <div className="w3-col l4 m4 w3-margin-bottom">
                    <div className="w3-display-container">
                        <img src="./images/photo_03.jpg" alt="House" style={fullWidthStyle} />
                    </div>
                </div>
            </div>
            {/* Photos section */}

            {/* About section */}
            <div className="w3-container w3-padding-32">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Contact Us</h3>
                <div className="w3-col l4 m4 w3-margin-bottom">
                    <div className="w3-card-4" style={cardContainerStyle}>
                        <div className="w3-card">
                            <div className="w3-container">
                                <div className={css.cardHeader}><i className="fas fa-map-marked-alt w3-text-teal"></i></div>
                                <div className={css.cardTitle}>ADDRESS</div>
                                <div style={cardP}><hr style={cardHr} /></div>
                                <div className={css.cardBody}>108 Haines St, North Melbourne VIC 3051</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w3-col l4 m4 w3-margin-bottom">
                    <div className="w3-card-4" style={cardContainerStyle}>
                        <div className="w3-card">
                            <div className="w3-container">
                                <div className={css.cardHeader}><i className="fas fa-envelope w3-text-teal"></i></div>
                                <div className={css.cardTitle}>EMAIL</div>
                                <div style={cardP}><hr style={cardHr} /></div>
                                <div className={css.cardBody}>caretaker@108reflections.com.au</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w3-col l4 m4 w3-margin-bottom">
                    <div className="w3-card-4" style={cardContainerStyle}>
                        <div className="w3-card">
                            <div className="w3-container">
                                <div className={css.cardHeader}><i className="fas fa-mobile-alt w3-text-teal"></i></div>
                                <div className={css.cardTitle}>PHONE</div>
                                <div style={cardP}><hr style={cardHr} /></div>
                                <div className={css.cardBody}>03 1234 5678</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About section */}

            {/* Map section */}
            <div className="w3-row-padding">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Map</h3>
                <div className="w3-col l12 m12 s12">
                    <iframe width="600" height="500" frameBorder="0" src="https://maps.google.com/maps?q=108%20haines%20st%20north%20melbourne&t=&z=15&ie=UTF8&iwloc=&output=embed" scrolling="no"></iframe>
                </div>
            </div>
            {/* Map section */}
        </div>

        {/* Footer */}
        <footer className="w3-center w3-black w3-padding-16">
            <p>Copyright &copy; 108 Reflections 2018</p>
        </footer>
        {/* Footer */}
    </div>