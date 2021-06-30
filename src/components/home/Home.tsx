import * as React from 'react';
import { Map } from '../map/Map';
import * as css from './Home.css';

const headerStyle = {
  maxWidth: 1500,
};
const maxWidthStyle = {
  maxWidth: 1500,
};
const fullWidthStyle = {
  width: '100%',
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
  border: 0,
};
const cardP = {
  height: 4,
};
const iconImg = {
  borderRadius: '8pt',
  boxShadow: '5px 5px 5px rgba(100, 100, 100, .5)',
};
const hrBorder = {
  borderTop: '1px solid #4CAF50',
};
const whatsNew = {
  fontSize: '18px',
};

export const Home = () => (
  <div>
    <header className='w3-display-container w3-content w3-wide' style={maxWidthStyle}>
      <img
        className='w3-image'
        src='./images/architect.jpg'
        width={1500}
        height={800}
        alt='Architecture'
      ></img>
      <div className='w3-display-middle w3-margin-top w3-center'>
        <h1 className='w3-xxlarge w3-text-white'>
          <img style={iconImg} src='./images/icon.jpg'></img>
        </h1>
      </div>
    </header>

    <div className='w3-content w3-padding' style={maxWidthStyle}>
      {/* Photos section */}
      <div className='w3-container w3-padding-32'></div>

      <div className='w3-row-padding'>
        <div className='w3-col l12 m12 w3-margin-bottom'>
          <div className='w3-display-container'>
            <h5>
              <strong>To Reflections Residents and Owners,</strong>
            </h5>
            <p>
              Welcome to the Reflections Building Management website! This website is created and
              maintained by your building manager to provide general information and updates to all
              residents and investment owners. We are endeavouring to make this site useful and
              informative to you.
            </p>
            <p>
              Yours sincerely,
              <br />
              Building Management Team
            </p>
          </div>
        </div>
      </div>
      {/* Photos section */}

      {/* About section */}
      <div className='w3-container w3-padding-32'>
        <h3 className='w3-border-bottom w3-border-light-grey w3-padding-16'>
          Building Manager Contact Details
        </h3>
        <div className='w3-col l4 m4 w3-margin-bottom'>
          <div className='w3-card-4' style={cardContainerStyle}>
            <div className='w3-card'>
              <div className='w3-container'>
                <div className={`w3-center ${css.cardHeader}`}>
                  <i className='fas fa-map-marked-alt w3-text-teal'></i>
                </div>
                <div className={`w3-center ${css.cardTitle}`}>ADDRESS</div>
                <div style={cardP}>
                  <hr style={cardHr} />
                </div>
                <div className={`w3-center ${css.cardBody}`}>
                  108 Haines St, North Melbourne VIC 3051
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w3-col l4 m4 w3-margin-bottom'>
          <div className='w3-card-4' style={cardContainerStyle}>
            <div className='w3-card'>
              <div className='w3-container'>
                <div className={`w3-center ${css.cardHeader}`}>
                  <i className='fas fa-envelope w3-text-teal'></i>
                </div>
                <div className={`w3-center ${css.cardTitle}`}>EMAIL</div>
                <div style={cardP}>
                  <hr style={cardHr} />
                </div>
                <div className={`w3-center ${css.cardBody}`}>bm@108reflections.com.au</div>
              </div>
            </div>
          </div>
        </div>
        <div className='w3-col l4 m4 w3-margin-bottom'>
          <div className='w3-card-4' style={cardContainerStyle}>
            <div className='w3-card'>
              <div className='w3-container'>
                <div className={`w3-center ${css.cardHeader}`}>
                  <i className='fas fa-mobile-alt w3-text-teal'></i>
                </div>
                <div className={`w3-center ${css.cardTitle}`}>PHONE</div>
                <div style={cardP}>
                  <hr style={cardHr} />
                </div>
                <div className={`w3-center ${css.cardBody}`}>
                  0404 573 762
                  <br />
                  0490 792 204
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About section */}

      {/* Map section */}
      <div className='w3-row-padding'>
        <h3 className='w3-border-bottom w3-border-light-grey w3-padding-16'>Location</h3>
        <div className='w3-col l12 m12 s12'>
          <Map />
        </div>
      </div>
      {/* Map section */}
    </div>
  </div>
);
