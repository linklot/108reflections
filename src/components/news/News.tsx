import * as React from "react";
import * as css from "./News.css";

const maxWidthStyle = {
  maxWidth: 1500,
};

const maxHeightStyle = {
  maxHeight: 300,
};

const fullWidthStyle = {
  width: "100%",
};

const indent = {
  paddingLeft: "40px",
};

export const News = () => (
  <div>
    <header
      className="w3-display-container w3-content w3-wide"
      style={maxWidthStyle}
    >
      <img
        className="w3-image"
        style={maxHeightStyle}
        src="./images/news_title.jpg"
        width={1500}
        height={300}
        alt="Architecture"
      ></img>
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
            <img
              src="./images/news/2023-09-28.png"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 28/09/2023</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>Annual Pest Control Treatment</h4>
            <p>
              Subject to the weather conditions on the day, pest control treatment will be carried out on Friday 06/10/2022 between 8 am and 12 pm.
            </p>
            <p>
              Treatment Areas:
            </p>
            <p>
              <div style={indent}>Building perimeter, garden beds on Level 4, external rock path on Level 10, and Bin room areas in the car park</div>
            </p>
            <p>
              It is advised by the pest control contractor as a precaution that residents:
            </p>
            <p>
              <ul>
                <li>Do not walk on or touch treated areas until dry</li>
                <li>Keep any pets away from treated areas during and after treatment for approximately 3 hours</li>
                <li>Do not leave pets on the balcony of any apartment on Ground Level and Level 1, or on any balcony on Level 4 facing the communal terrace, during and after treatment for approximately 3 hours</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2023-09-08.png"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 08/09/2023</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>Cladding and Lower Front Windows Cleaning</h4>
            <p>
              Subject to weather conditions, maintenance cleaning for the front cladding will be carried out on <strong>Wednesday 13/09/2022</strong> starting at <strong>8:00am</strong>.
            </p>
            <p>
              Cleaning contractors will be using extension water fed poles to clean the front cladding of the building. Windows and balustrades in the area will also be cleaned at the same time to remove water marks coming from the process.
            </p>
            <p>
            If your apartment is on Level 1, 2, or 3 and facing Haines Street, please ensure your windows are closed for the day.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2023-02-01.jpg"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 01/02/2023</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>External Windows Cleaning</h4>
            <p>
              Building external window cleaning has been scheduled for from <strong>Monday 06/02/2023</strong> to <strong>Thursday 09/02/2023</strong> starting at 8am every day subject to weather conditions.
            </p>
            <p>
              Cleaning contractors will abseil down and clean the windows and balustrades starting on the southwest side of the building (facing Macaulay Rd), northwest side (facing neighbouring car park), northeast side (facing Shiel St), then southeast side (facing Haines St). The arrangements may be adjusted according to wind conditions.
            </p>
            <p>
              You may wish to close your blinds during the time to ensure privacy within your apartments.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2023-01-30.png"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 30/01/2023</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>Magpie-lark swooping at front entry</h4>
            <p>
              Recently a magpie-lark is seen swooping towards our front sliding door repeatedly and attacking windows of cars parked in front of the building.
            </p>
            <p>
              Tips about stopping birds from attacking car windows can be found on the following RSPCA website link.
            </p>
            <p>
            <a href="https://kb.rspca.org.au/knowledge-base/how-can-i-stop-birds-flying-into-my-windows-or-attacking-my-car" target="_blank">https://kb.rspca.org.au/knowledge-base/how-can-i-stop-birds-flying-into-my-windows-or-attacking-my-car</a>
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2023-01-10.jpg"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 10/01/2023</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>Tile Maintenance</h4>
            <p>
            Maintenance work for tiles on residential levels and in the lifts will be carried out on weekdays starting on <strong>Thursday 12/01/2023</strong> this week and finishing on <strong>Thursday 19/01/2023</strong> next week. 
            </p>
            <p>
            Planned working hours are between <strong>8 am and 5 pm</strong>. Power tools will not be used before 8:30 am.
            </p>
            <p>
            We will work with the contractor to ensure minimal inconvenience and disruption to the traffic.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2022-11-09.jpg"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 09/11/2022</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>Chute Cleaning</h4>
            <p>
              Chute cleaning has been scheduled for Tuesday 15/11/2022 between{" "}
              <strong>8:30am and 2pm</strong>.
            </p>
            <p>
              Cleaners will access and work in chute rooms on all levels and the
              bin room on Ground Level.
            </p>
            <p>
              Please do not use the chutes on your level during those hours. If
              you need to dispose of waste, please take to the bin room on
              Ground Level in the car park directly.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2022-09-16_1.png"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 16/09/2022</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>Annual Pest Control Treatment</h4>
            <p>
              Subject to the weather conditions on the day, pest control
              treatment will be carried out on{" "}
              <strong>Monday 03/10/2022 between 8 am and 12 pm</strong>.
            </p>
            <p>
              <strong>Treatment Areas:</strong>
            </p>
            <p>
              Building perimeter, garden beds on Level 4, external rock path on
              Level 10, and Bin room areas in the car park.
            </p>
            <p>
              It is advised by the pest control contractor as a precaution that
              residents:
            </p>
            <p>
              <ul>
                <li>Do not walk on or touch treated areas until dry</li>
                <li>
                  Keep any pets away from treated areas during and after
                  treatment for approximately 3 hours
                </li>
                <li>
                  Do not leave pets on the balcony of any apartment on Ground
                  Level and Level 1, or on any balcony on Level 4 facing the
                  communal terrace, during and after treatment for approximately
                  3 hours
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2022-09-16_2.jpg"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 16/09/2022</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>
              Cladding and Lower Front Windows Cleaning
            </h4>
            <p>
              Maintenance cleaning for the front cladding will be carried out on{" "}
              <strong>Wednesday 28/09/2020 starting at 8 am</strong>.
            </p>
            <p>
              Cleaning contractors will be using extension water fed poles to
              clean the front cladding of the building. Windows and balustrades
              in the area will also be cleaned at the same time to remove water
              marks coming from the process.
            </p>
            <p>
              If your apartment is on Level 1, 2, or 3 and facing Haines Street,
              please ensure your windows are closed for the day.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2022-04-26.jpg"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 26/04/2022</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>
              [Rescheduled] Carpet Professional Cleaning
            </h4>
            <p>
              Professional cleaning of common area carpets has been rescheduled
              for <strong>Friday 27/05/2022</strong>.
            </p>
            <p>
              Carpets in the corridors from Level 1 to Level 12 will be cleaned.
              Planned working hours are between <strong>9:30 am</strong> and{" "}
              <strong>3 pm</strong>.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2022-02-11.jpg"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 11/02/2022</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>External Windows Cleaning</h4>
            <p>
              Building external window cleaning has been scheduled to be carried
              out from Wednesday 16/02/2022 to Friday 18/02/2022 starting at 8am
              every day.
            </p>
            <p>
              Cleaning contractors will abseil down and clean the windows and
              balustrades starting on the southwest side of the building (facing
              Macaulay Rd), northwest side (facing neighbouring car park),
              northeast side (facing Shiel St), then southeast side (facing
              Haines St). The arrangements may be adjusted according to wind
              conditions.
            </p>
            <p>
              You may wish to close your blinds during the time to ensure
              privacy within your apartments.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2022-01-17-1.jpg"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 17/01/2022</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>
              Tile Maintenance – Ground Floor and Lifts
            </h4>
            <p>
              Maintenance work for tiles on Ground floor and in the lifts has
              been scheduled for Tuesday 25/01/2022.
            </p>
            <p>
              Planned working hours are between 8 am and 5 pm. Power tools will
              not be used before 8:30 am.
            </p>
            <p>
              We will work with the contractor to ensure minimal inconvenience
              and disruption to the traffic on Ground floor.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2021-10-27.jpg"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 27/10/2021</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>Annual Pest Control Treatment</h4>
            <p className={css.news_paragraph}>
              Subject to the weather conditions on the day, pest control
              treatment will be carried out on{" "}
              <strong>Monday 01/11/2021 between 8 am and 12 pm</strong>.
            </p>
            <p>
              <strong>Treatment Areas:</strong>
            </p>
            <p>
              Building perimeter, garden beds on Level 4, and Bin room areas in
              the car park
            </p>
            <p>
              It is advised by the pest control contractor as a precaution that
              residents
              <ul>
                <li>Do not walk on or touch treated areas until dry</li>
                <li>
                  Keep any pets away from treated areas during and after
                  treatment for approximately 3 hours
                </li>
                <li>
                  Do not leave pets on the balcony of any apartment on Ground
                  Level and Level 1, or on any balcony on Level 4 facing the
                  communal terrace, during and after treatment for approximately
                  3 hours
                </li>
              </ul>
            </p>
            <p>
              Please contact Building Manager on 0404 573 762 / 0490 792 204
              during business hours or email to bm@108reflections.com.au if you
              have any further questions or concerns.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2021-10-11.png"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 11/10/2021</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>Wet paint</h4>
            <p className={css.news_paragraph}>
              Scratches on common area walls will be patched up on Thursday
              14/10/2021. After that, “Wet Paint” stickers will be displayed
              around the area to remind residents to avoid touching the areas
              until the stickers are removed.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2021-09-20.png"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 20/09/2021</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>
              Terrace heaters are now ready for residents to use
            </h4>
            <p className={css.news_paragraph}>
              As approved by the OC committee, heaters have been installed on
              Level 4 terrace. Residents can now use the heaters following the
              operation instructions displayed on the wall.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2021-09-23.jpg"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 20/09/2021</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>
              Re: Cladding and Lower Front Windows Cleaning
            </h4>
            <p className={css.news_paragraph}>
              Maintenance cleaning for the front cladding will be carried out on{" "}
              <strong>Thursday 23/09/2020</strong> starting at{" "}
              <strong>8:00am</strong>.
            </p>
            <p className={css.news_paragraph}>
              Cleaning contractors will be using extension water fed poles to
              clean the front cladding of the building. Windows and balustrades
              in the area will also be cleaned at the same time to remove water
              marks coming from the process.
            </p>
            <p className={css.news_paragraph}>
              If your apartment is on Level 1, 2, or 3 and facing Haines Street,
              please ensure your windows are closed for the day.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2021-07-13.png"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 13/07/2021</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>Hard waste & e waste</h4>
            <p className={css.news_paragraph}>
              Hard waste, including chairs, tables, and storage cabinets, should
              not be left in the bins, in the bin room, or any other common
              areas. Electronic waste items that can not fit in the e-waste bin
              should be disposed of in the hard waste collection. Please check
              out the notice for hard waste collection in the mailroom.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2021-06-11.jpg"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 11/06/2021</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>Re: Spills on the tiles</h4>
            <p className={css.news_paragraph}>
              Please note all common area tiles are made of limestone. They are
              porous and very acid sensitive due to the calcium content in the
              stone.
            </p>
            <p className={css.news_paragraph}>
              Anything acidic, especially vinegar, lemon, red/white wine,
              liquids containing acids, coffee, beetroot, and tomato, might
              cause staining in the stone and should not be allowed to stay on
              the surface.
            </p>
            <p className={css.news_paragraph}>
              If you notice any spills on tiles in common areas during our
              onsite hours, please let us know.
            </p>
            <p className={css.news_paragraph}>
              If you spill any liquid of risk on tiles in common areas, please
              try to clean as soon as possible to minimise the damage.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2021-03-28.png"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 26/03/2021</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>Re: External Windows Cleaning</h4>
            <p className={css.news_paragraph}>
              Building external window cleaning has been scheduled to be carried
              out from
              <span className={css.redText}> Monday 29/03/2021</span> to
              <span className={css.redText}> Thursday 01/04/2021</span> starting
              at 8:00 am every day.
            </p>
            <p className={css.news_paragraph}>
              Subject to weather conditions, cleaning contractors will abseil
              down and clean the windows and balustrades starting on the
              southwest side of the building (facing Macaulay Rd), northwest
              side (facing neighbouring car park), then northeast side (facing
              Shiel St). The front side facing Haines St will be cleaned on{" "}
              <span className={css.redText}>Tuesday 30/03/2021</span>. The
              arrangements may be adjusted according to wind conditions.
            </p>
            <p className={css.news_paragraph}>
              You may wish to close your blinds during the time to ensure
              privacy within your apartments.
            </p>
            <p className={css.news_paragraph}>
              If you have any further questions or concerns, please contact
              Building Manager on 0404 573 762 / 0490 792 204 during business
              hours or email to{" "}
              <a href="bm@108reflections.com.au" target="_blank">
                bm@108reflections.com.au
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2021-02-21.png"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 20/02/2021</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>Re: Disposal of Glass Waste</h4>
            <p className={css.news_paragraph}>
              We would like to draw your attention to safety hazards posed by
              glass items being thrown in the chute.
            </p>
            <p className={css.news_paragraph}>
              If being dropped in the chute, glass items will fall and hit the
              bin underneath at speed and with force. From time to time, they
              smash into pieces that are scattered all over the floor in the bin
              room and even outside the bin room. This poses serious safety
              hazards to residents and contractors who might happen to be in the
              area.
            </p>
            <p className={css.news_paragraph}>
              Please follow the signage in the chute room and bring your glass
              waste (wine bottles, etc) down to the bin room.
            </p>
            <p className={css.news_paragraph}>
              Thank you for your cooperation in making our building safe.
            </p>
            <p className={css.news_paragraph}>
              If you have any further questions or concerns, please contact
              Building Manager on 0404 573 762 / 0490 792 204 during business
              hours or email to{" "}
              <a href="mailto:bm@108reflections.com.au" target="_blank">
                bm@108reflections.com.au
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2021-01-25.png"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 25/01/2021</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>Potential Abandoned Bicycles</h4>
            <p className={css.news_paragraph}>
              On the instruction of the Owners Corporation, notices have been
              attached to all bicycles on bike racks on common property.
            </p>
            <p className={css.news_paragraph}>
              Please check your bicycle parked on common property and promptly
              remove the notice on it to alert us that it is not abandoned.
            </p>
            <p className={css.news_paragraph}>
              If the notice on a bicycle is not removed by 22/02/2021, the
              bicycle will be removed from where it is parked and available for
              collection by appointment with Building Manager.
            </p>
            <p className={css.news_paragraph}>
              If a bicycle is not claimed or collected by 22/05/2021, it will be
              donated to charity by the Owners Corporation.
            </p>
            <p className={css.news_paragraph}>
              If you have any further questions or concerns, please contact
              Building Manager on 0404 573 762 / 0490 792 204 during business
              hours or email to{" "}
              <a href="mailto:bm@108reflections.com.au" target="_blank">
                bm@108reflections.com.au
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2021-01-15.png"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 15/01/2021</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>No cardboard in recycle chute</h4>
            <p className={css.news_paragraph}>Dear Residents,</p>
            <p className={css.news_paragraph}>
              This is a kind reminder of not throwing any cardboard in the
              recycle chute. There have been four blockages in the past three
              weeks where folded pieces of cardboard were stuck in the recycle
              chute and preventing other waste from passing through. Folded
              cardboard may unfold and expand in the chute, cut cardboard pieces
              can still be too big and stuck in the chute with other waste
              items. Please follow the signage in the chute room and bring all
              cardboard down to the bin room.{" "}
            </p>
            <p className={css.news_paragraph}>
              Your cooperation is greatly appreciated.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2020-10-06.png"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 06/10/2020</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>Annual Ant Control Treatment</h4>
            <p className={css.news_paragraph}>
              Subject to the weather conditions on the day, ant control
              treatment will be carried out on{" "}
              <strong>Friday 09/10/2020 between 1 pm and 3 pm</strong>.
            </p>
            <p className={css.news_paragraph}>
              <strong>Treatment Areas:</strong>
              <br />
              Building perimeter, garden beds on Level 4, and Bin room areas in
              the car park.
            </p>
            <p className={css.news_paragraph}>
              It is advised by the pest control contractor as a precaution that
              residents:
              <ul>
                <li>Do not walk on or touch treated areas until dry</li>
                <li>
                  Keep any pets away from treated areas during and after
                  treatment for approximately 3 hours
                </li>
                <li>
                  Do not leave pets on the balcony of any apartment on Ground
                  Level and Level 1, or on any balcony on Level 4 facing the
                  communal terrace, during and after treatment for approximately
                  3 hours
                </li>
              </ul>
            </p>
            <p className={css.news_paragraph}>
              Please contact Building Manager on 0404 573 762 / 0490 792 204
              during business hours or email to{" "}
              <a href="mailto:bm@108reflections.com.au" target="_blank">
                bm@108reflections.com.au
              </a>{" "}
              should you have any further questions or concerns
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2020-03-30.png"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 30/03/2020</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>COVID-19 Update for Residents</h4>
            <p className={css.news_paragraph}>Dear residents,</p>
            <p className={css.news_paragraph}>
              We would like to update you on the measures taken in response to
              the current situation and draw your attention to some relevant
              issues.
            </p>
            <p className={css.news_paragraph}>
              1) We finally received our order and will set up the hand
              sanitiser dispenser very soon. Due to supply shortage, we are
              still awaiting ETA for additional orders.
            </p>
            <p className={css.news_paragraph}>
              2) We have taken further measures including requesting all
              contractors coming onsite to confirm their health status and
              providing hand sanitiser to them if needed.
            </p>
            <p className={css.news_paragraph}>
              3) On top of general cleaning, we organised additional deep
              cleaning last week for common areas including individual apartment
              entrance doors on all levels.
            </p>
            <p className={css.news_paragraph}>
              Residents now spend much more time in the building. We are
              receiving more parcels than usual in the past two weeks (since
              many people started working from home) - even more than the peak
              season before Christmas. The volume of waste produced has also
              increased. There're also issues to which we would like to draw
              your attention.
            </p>
            <p className={css.news_paragraph}>
              Just on last Saturday morning, we received reports of a chute
              blockage and cigarette butts being thrown off and landing on lower
              level balconies. We would like to ask everyone to be more mindful
              during this period of time and follow the OC rules. This
              especially includes not disposing off any large item into the
              chute to minimise the chance of blockage. If the chute is blocked,
              all residents would have to bring waste to the ground floor bin
              room.
            </p>
            <p className={css.news_paragraph}>
              Your understanding and support through this time is greatly
              appreciated.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2020-03-30.png"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 30/03/2020</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>COVID-19 Update for Residents</h4>
            <p className={css.news_paragraph}>Dear residents,</p>
            <p className={css.news_paragraph}>
              We would like to update you on the measures taken in response to
              the current situation and draw your attention to some relevant
              issues.
            </p>
            <p className={css.news_paragraph}>
              1) We finally received our order and will set up the hand
              sanitiser dispenser very soon. Due to supply shortage, we are
              still awaiting ETA for additional orders.
            </p>
            <p className={css.news_paragraph}>
              2) We have taken further measures including requesting all
              contractors coming onsite to confirm their health status and
              providing hand sanitiser to them if needed.
            </p>
            <p className={css.news_paragraph}>
              3) On top of general cleaning, we organised additional deep
              cleaning last week for common areas including individual apartment
              entrance doors on all levels.
            </p>
            <p className={css.news_paragraph}>
              Residents now spend much more time in the building. We are
              receiving more parcels than usual in the past two weeks (since
              many people started working from home) - even more than the peak
              season before Christmas. The volume of waste produced has also
              increased. There're also issues to which we would like to draw
              your attention.
            </p>
            <p className={css.news_paragraph}>
              Just on last Saturday morning, we received reports of a chute
              blockage and cigarette butts being thrown off and landing on lower
              level balconies. We would like to ask everyone to be more mindful
              during this period of time and follow the OC rules. This
              especially includes not disposing off any large item into the
              chute to minimise the chance of blockage. If the chute is blocked,
              all residents would have to bring waste to the ground floor bin
              room.
            </p>
            <p className={css.news_paragraph}>
              Your understanding and support through this time is greatly
              appreciated.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2020-03-22.png"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 22/03/2020</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>
              Additional Message about Coronavirus
            </h4>
            <p className={css.news_paragraph}>Dear residents,</p>
            <p className={css.news_paragraph}>
              A resident has noted her concerns to us in regard to the
              information about activating lift buttons with a key/fob/tissue in
              the message we sent yesterday. She was worried that keys could be
              potentially contaminated and brought home.
            </p>
            <p className={css.news_paragraph}>
              To clarify please refer to the statement from Doctor Brett Sutton,
              Victoria's Chief Health Officer where he advised to take measures
              including{" "}
              <strong>
                "instead of your fingers, using your knuckle, a pen or an ID
                card to activate lift buttons"
              </strong>{" "}
              (
              <a
                href="https://www.dhhs.vic.gov.au/coronavirus-statement-doctor-brett-sutton"
                target="_blank"
              >
                https://www.dhhs.vic.gov.au/coronavirus-statement-doctor-brett-sutton
              </a>
              ).
            </p>
            <p className={css.news_paragraph}>
              Upon enquiry, several medical professionals in our building also
              advised that key/fob is an appropriate / practical alternative to
              using fingers. It was also noted by one of them that such items
              should be cleaned regularly (just like we do our hands) and not be
              left somewhere at home which is at risk of contaminating other
              areas regardless.
            </p>
            <p className={css.news_paragraph}>
              The situation is evolving and we will continue providing updates.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2020-03-21.png"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 21/03/2020</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>
              Reflections – Message about Coronavirus
            </h4>
            <p className={css.news_paragraph}>Dear residents,</p>
            <p className={css.news_paragraph}>
              <strong>Re: Coronavirus Pandemic (COVID-19)</strong>
            </p>
            <p className={css.news_paragraph}>
              It is a difficult time due to the rapidly changing situation
              regarding coronavirus. As your building manager at Reflections, we
              want to reassure you that we are taking every precaution to ensure
              the safety and wellbeing of all our residents.
            </p>
            <p className={css.news_paragraph}>
              <ul>
                <li>
                  Starting in late January, we are displaying information and
                  advice from federal and Victorian health authorities on the
                  notice board in the mailroom and updating on a weekly basis.
                </li>
                <li>
                  We are working closely with the OC manager and the Committee’s
                  Building Officer in setting up a hand sanitiser station in the
                  lobby.
                </li>
                <li>
                  High touch areas like lift buttons, door handles, and bin room
                  are disinfected more frequently.
                </li>
                <li>
                  Our cleaners are wearing appropriate PPE when working in
                  common areas to minimise the chance of infection.
                </li>
                <li>
                  We are actively communicating with building managers, OC
                  companies, other service providers in the industry, and
                  industry organisations in dealing with this new situation
                  faced by all of us.
                </li>
              </ul>
            </p>
            <p className={css.news_paragraph}>
              We strongly recommend all residents taking the advice from the
              health authorities and:
            </p>
            <p className={css.news_paragraph}>
              <ul>
                <li>Practising good hygiene</li>
                <li>Practising social distancing</li>
                <li>
                  Instead of fingers, using key/fob/tissue to activate lift
                  buttons
                </li>
                <li>
                  Not staying in a small enclosed room with no ventilation (for
                  example the mailroom and chute room) for too long
                </li>
              </ul>
            </p>
            <p className={css.news_paragraph}>
              Residents who are in self-isolation, you are not alone. You are
              welcome to contact us, and we are happy to help where possible.
            </p>
            <p className={css.news_paragraph}>
              There are a number of our residents work in the healthcare sector.
              It's important that they keep well at home as they may need to be
              in the front line against the coronavirus. There are also senior
              members of our community and families with children living in the
              building. We could look after each other by doing our part to
              minimise the chance of infection and spread in our building.
            </p>
            <p className={css.news_paragraph}>
              We believe we can stay together and overcome this challenging time
              as a community.
            </p>
            <p className={css.news_paragraph}></p>
            <p className={css.news_paragraph}>
              <strong>More information:</strong>
            </p>
            <p className={css.news_paragraph}>
              Department of Health and Human Services, Victoria,{" "}
              <a href="https://www.dhhs.vic.gov.au/coronavirus" target="_blank">
                https://www.dhhs.vic.gov.au/coronavirus
              </a>
            </p>
            <p className={css.news_paragraph}>
              Department of Health, Australia,{" "}
              <a
                href="https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert"
                target="_blank"
              >
                https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2020-03-12.png"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 15/03/2020</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>
              Coronavirus - What can be done to protect our building and
              residents
            </h4>
            <p className={css.news_paragraph}>Dear residents,</p>
            <p className={css.news_paragraph}>
              In the light of the developing coronavirus situation in Victoria
              and nationally, we would like to suggest taking care of our
              general health and well being so the chance of infection being
              brought home with us could be minimised. Please consider taking
              the following precautions:
            </p>
            <p className={css.news_paragraph}>
              <ul>
                <li>
                  Reading and taking the advice from the information leaflets
                  from the health authorities displayed on the noticeboards in
                  the lifts and mailroom
                </li>
                <li>
                  Washing hands regularly, covering mouth and nose when coughing
                  and sneezing in common areas
                </li>
                <li>
                  Using hand sanitiser before &amp; after touching the lift
                  buttons and trying to avoid using hands where possible (using
                  your key/fob/tissue to press the lift buttons instead)
                </li>
                <li>Avoiding unnecessary close contact with others</li>
                <li>
                  Ringing, texting, and emailing us are preferable to
                  face-to-face interactions
                </li>
                <li>
                  Most importantly, seeking medical attention early if you
                  become unwell
                </li>
              </ul>
            </p>
            <p className={css.news_paragraph}>
              We are in the process of sourcing hand sanitiser products (refills
              touch free dispenser and floor stand) for the use in common areas.
              If you happen to know where they are available, please let us
              know.
            </p>
            <p className={css.news_paragraph}>
              Your health is important to us. Your understanding and efforts in
              keeping this building safe and all the residents well and healthy
              are greatly appreciated.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2020-02-24.png"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 24/02/2020</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>External Window Cleaning</h4>
            <p className={css.news_paragraph}>
              Building external window cleaning is scheduled to be carried out
              next week. Subject to weather conditions, cleaning will start on
              Monday 02/03/2020.
            </p>
            <p className={css.news_paragraph}>
              If there are any issues (such as paint stains on the windows or
              loose black tape left on the balustrades from construction) that
              you are concerned about, please contact us and let us know before
              the cleaning commences so we may ask the cleaners to attend to
              those areas during the cleaning.
            </p>
            <p className={css.news_paragraph}>
              Windows / balustrade panels within individual apartments and
              accessible will not be covered in external window cleaning.
              Residents are encouraged to organise the cleaning of the internal
              side of double-glazed windows / panels so the quality of the
              external side cleaning would be more visible.
            </p>
            <p className={css.news_paragraph}>
              Further schedule, including the order in which all sides of the
              building are to be cleaned, will be provided before the day of
              cleaning.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news/news_2020-02-19.png"
              alt="House"
              style={fullWidthStyle}
            />
            <div className={css.news_last_update}>Last updated: 19/02/2020</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>Annual Pest Control</h4>
            <p className={css.news_paragraph}>
              Ant control treatment will be carried out on Friday 21/02/2020
              from 9 am to 11 am.{" "}
            </p>
            <p className={css.news_paragraph}>Treatment Area:</p>
            <p className={css.news_paragraph}>
              <strong>
                Building perimeter, Level 4 terrace garden beds and car park Bin
                room areas
              </strong>
            </p>
            <p className={css.news_paragraph}>
              Pest control contractor recommends that residents and pets stay
              away from Treatment Area for duration of Treatment and don’t walk
              on Treated Areas until dry (takes approximately two hours).
            </p>
            <p className={css.news_paragraph}>
              It is also recommended that residents in Level 1 apartments facing
              the car park of the Victorian Archive Centre and in Level 4
              apartments facing the Terrace do not keep any pets on the
              balconies on the day.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <svg height="180" viewBox="0 0 103 127">
              <defs>
                <linearGradient
                  id="mobile-nav"
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FF373C"></stop>
                  <stop offset="100%" stopColor="#FFC72C"></stop>
                </linearGradient>
              </defs>
              <g fill="none" fillRule="evenodd">
                <path
                  fill="#FF373C"
                  d="M69.484 102.05v-9.511h-4.823v1.064a.116.116 0 0 0-.037-.028 10.243 10.243 0 0 0-5.212-1.398c-5.573 0-10.035 4.376-10.035 9.873a9.815 9.815 0 0 0 3.537 7.54 9.74 9.74 0 0 0-3.537 7.531c0 5.45 4.462 9.91 10.035 9.91 5.61 0 10.072-4.46 10.072-9.91a9.724 9.724 0 0 0-3.536-7.531 9.785 9.785 0 0 0 3.536-7.54zm-15.284 0c0-2.785 2.342-5.172 5.212-5.172 2.703 0 4.916 2.063 5.212 4.59.028.193.037.387.037.582 0 .194-.009.397-.037.583-.296 2.563-2.509 4.626-5.212 4.626-2.87 0-5.212-2.387-5.212-5.21zm10.424 15.663c-.296 2.564-2.509 4.626-5.212 4.626-2.87 0-5.212-2.386-5.212-5.218 0-2.784 2.342-5.171 5.212-5.171 2.703 0 4.916 2.063 5.212 4.589.028.194.037.388.037.582 0 .204-.009.399-.037.592zm33.449-16.385c0-3.66-1.95-4.456-3.901-4.456-1.95 0-3.902.756-3.902 4.377v10.184h-4.895V92.536h4.895v1.392c1.075-.796 2.389-1.75 4.976-1.75 4.14 0 7.722 2.426 7.722 8.354v10.901h-4.895v-10.105zm-23.207 10.105h4.896V92.536h-4.896v18.897zm-34.98 0h4.895V92.536h-4.895v18.897zM24.083 92.536h4.896v1.392c1.831-1.353 3.623-1.75 7.285-1.75v4.694c-6.25 0-7.285 1.75-7.285 5.012v9.549h-4.896V92.536zM10.031 111.95C4.458 111.95 0 107.494 0 102.044c0-5.49 4.458-9.867 10.03-9.867 5.614 0 10.072 4.376 10.072 9.867 0 5.45-4.458 9.906-10.071 9.906zm0-15.078c-2.866 0-5.215 2.387-5.215 5.172 0 2.824 2.349 5.211 5.215 5.211 2.906 0 5.254-2.387 5.254-5.211 0-2.785-2.348-5.172-5.254-5.172z"
                ></path>
                <path
                  fill="url(#mobile-nav)"
                  fillRule="nonzero"
                  d="M43 0C24.41-.016 7.92 11.83 2.135 29.356-3.649 46.88 2.587 66.108 17.587 77c15.125-11.008 35.701-11.008 50.826 0 15-10.892 21.236-30.12 15.452-47.644C78.08 11.83 61.59-.016 43 0zm0 64.39c-12.109-.01-21.919-9.752-21.916-21.764.004-12.011 9.82-21.748 21.928-21.75 12.11-.004 21.93 9.727 21.94 21.738a21.669 21.669 0 0 1-6.424 15.403A22.024 22.024 0 0 1 43 64.39z"
                  transform="translate(8.583)"
                ></path>
              </g>
            </svg>
            <div className={css.news_last_update}>Last updated: 13/02/2020</div>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>
              Update on Origin Electricity Rates for Apartments
            </h4>
            <p className={css.news_paragraph}>
              <strong>Hot Water Bills:</strong>
            </p>
            <p className={css.news_paragraph}>
              Origin conducted a meter reading audit for all hot water meters in
              the building in December 2019. Residents have advised that they
              received amended bills with correct readings in January 2020.{" "}
            </p>
            <p className={css.news_paragraph}>
              <strong>Electricity Bills:</strong>
            </p>
            <p className={css.news_paragraph}>
              Upon enquiry, Origin has confirmed that residents may call them on
              1800 684 993 and request to be changed to a new plan with lower
              electricity rates. The new rates will apply immediately.
            </p>
            <p className={css.news_paragraph}>
              Alternatively, Origin advised that they are in the process of
              annual price review for all Victorian customers. It is expected
              that they will be consolidating all customers onto the same rates.
              In this case, customers do not need to call, and the new rates
              will apply when the process is finalised by the end of February as
              expected.{" "}
            </p>
            <p className={css.news_paragraph}>
              Origin advised that new rates do not apply to previous bills.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <svg height="180" viewBox="0 0 103 127">
              <defs>
                <linearGradient
                  id="mobile-nav"
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FF373C"></stop>
                  <stop offset="100%" stopColor="#FFC72C"></stop>
                </linearGradient>
              </defs>
              <g fill="none" fillRule="evenodd">
                <path
                  fill="#FF373C"
                  d="M69.484 102.05v-9.511h-4.823v1.064a.116.116 0 0 0-.037-.028 10.243 10.243 0 0 0-5.212-1.398c-5.573 0-10.035 4.376-10.035 9.873a9.815 9.815 0 0 0 3.537 7.54 9.74 9.74 0 0 0-3.537 7.531c0 5.45 4.462 9.91 10.035 9.91 5.61 0 10.072-4.46 10.072-9.91a9.724 9.724 0 0 0-3.536-7.531 9.785 9.785 0 0 0 3.536-7.54zm-15.284 0c0-2.785 2.342-5.172 5.212-5.172 2.703 0 4.916 2.063 5.212 4.59.028.193.037.387.037.582 0 .194-.009.397-.037.583-.296 2.563-2.509 4.626-5.212 4.626-2.87 0-5.212-2.387-5.212-5.21zm10.424 15.663c-.296 2.564-2.509 4.626-5.212 4.626-2.87 0-5.212-2.386-5.212-5.218 0-2.784 2.342-5.171 5.212-5.171 2.703 0 4.916 2.063 5.212 4.589.028.194.037.388.037.582 0 .204-.009.399-.037.592zm33.449-16.385c0-3.66-1.95-4.456-3.901-4.456-1.95 0-3.902.756-3.902 4.377v10.184h-4.895V92.536h4.895v1.392c1.075-.796 2.389-1.75 4.976-1.75 4.14 0 7.722 2.426 7.722 8.354v10.901h-4.895v-10.105zm-23.207 10.105h4.896V92.536h-4.896v18.897zm-34.98 0h4.895V92.536h-4.895v18.897zM24.083 92.536h4.896v1.392c1.831-1.353 3.623-1.75 7.285-1.75v4.694c-6.25 0-7.285 1.75-7.285 5.012v9.549h-4.896V92.536zM10.031 111.95C4.458 111.95 0 107.494 0 102.044c0-5.49 4.458-9.867 10.03-9.867 5.614 0 10.072 4.376 10.072 9.867 0 5.45-4.458 9.906-10.071 9.906zm0-15.078c-2.866 0-5.215 2.387-5.215 5.172 0 2.824 2.349 5.211 5.215 5.211 2.906 0 5.254-2.387 5.254-5.211 0-2.785-2.348-5.172-5.254-5.172z"
                ></path>
                <path
                  fill="url(#mobile-nav)"
                  fillRule="nonzero"
                  d="M43 0C24.41-.016 7.92 11.83 2.135 29.356-3.649 46.88 2.587 66.108 17.587 77c15.125-11.008 35.701-11.008 50.826 0 15-10.892 21.236-30.12 15.452-47.644C78.08 11.83 61.59-.016 43 0zm0 64.39c-12.109-.01-21.919-9.752-21.916-21.764.004-12.011 9.82-21.748 21.928-21.75 12.11-.004 21.93 9.727 21.94 21.738a21.669 21.669 0 0 1-6.424 15.403A22.024 22.024 0 0 1 43 64.39z"
                  transform="translate(8.583)"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>
              Origin Electricity and Hot Water Bills
            </h4>
            <p className={css.news_paragraph}>
              Recently we have received many enquiries from residents about
              Origin electricity and hot water bills. They contacted Origin and
              were told that they would need to take readings from their
              electricity meter and hot water meter for themselves.
            </p>
            <p className={css.news_paragraph}>
              We would like to advise that it is not safe for residents to take
              readings for themselves. Especially, apartment hot water meters
              are located inside the ceiling. It would pose safety risks if
              residents need to stand on a ladder, open the overhead panel and
              look for the readings for themselves.
            </p>
            <p className={css.news_paragraph}>
              We have raised this concern with Origin and suggest residents
              requesting Origin to organise their technician to come and take
              readings.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/safety_first.jpg"
              alt="House"
              style={fullWidthStyle}
            />
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>Police Officer Site Visit</h4>
            <p className={css.news_paragraph}>
              Community Liaison Officer from Victoria Police was invited by us
              to come and inspect our building for safety audit on 10/07/2019.
              The officer discussed with some of our committee members and
              residents about security issues. He recommended measures for
              residents to take to increase the security of the building.
            </p>
            <p className={css.news_paragraph}>
              Residents are recommended to use stronger bike locks such as the
              typical D-shape bicycle lock. For above bonnet storage cages,
              residents are recommended to use a length of chain/padlock and
              wrap the chain through the bottom frame of the gate and bottom
              horizontal bar of the cage to reduce the opening area of the
              gates. Residents are encouraged to call 000 should they see
              anything suspicious or observe a non-resident enter the car park
              particularly on foot. It is also suggested that residents never
              leave valuables in vehicles and always lock their vehicles even
              whilst in the car park.
            </p>
            <p className={css.news_paragraph}>
              He also made recommendations on security measures on the common
              property which have been passed to the Owners Corporation
              Committee to consider. Full report from this site visit is
              available upon request.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/fire-alarm.jpg"
              alt="House"
              style={fullWidthStyle}
            />
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>Fire alarm incident</h4>
            <p className={css.news_paragraph}>
              The fire alarm in the building went off on Sunday night 30/06/2019
              and two MFB trucks attended. The alarm was activated by a smoke
              detector sensing someone smoking on a certain level in the
              stairwell.
            </p>
            <p className={css.news_paragraph}>
              We would like to remind all residents that, according to the
              Owners Corporation Rules,
            </p>
            <p className={css.news_paragraph}>
              <span>
                <ul>
                  <li>
                    Smoking is expressly prohibited in the stairwells, lifts,
                    foyers, car park, and other designated parts of the Common
                    Property
                  </li>
                  <li>
                    Owners or occupiers responsible for the incident may be
                    imposed charges incurred to the Owners Corporation for the
                    MFB attendance
                  </li>
                </ul>
              </span>
            </p>
            <p className={css.news_paragraph}>
              If you smell or notice anything suspicious, please report to
              Building Manager for investigation.
            </p>
            <p className={css.news_paragraph}>
              <strong>Note:</strong> Monthly fire system speaker testing is
              always conducted during normal hours and accompanied with the
              message that it is testing only, and no action required.
            </p>
            <p className={css.news_paragraph}>
              Whenever you hear the evacuation announcement after hours asking
              you to evacuate immediately please follow the evacuation plan
              (available in the lift lobby on every level) and use the fire
              stairwells to make your way out of the building without delay.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/news_003.jpg"
              alt="House"
              style={fullWidthStyle}
            />
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>Gardiner Reserve Park Expansion</h4>
            <p className={css.news_paragraph}>
              The improved Gardiner Reserve Park across Haines Street has been
              open for the public to enjoy since April 2019.
            </p>
            <p className={css.news_paragraph}>
              After the expansion Gardiner Reserve Park provides 1) more street
              parking spaces; 2) BBQ and playground facilities; 3) bigger park
              and more plants.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/New_facilities_marked.png"
              alt="House"
              style={fullWidthStyle}
            />
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>
              New North Melbourne Station is on the way
            </h4>
            <p className={css.news_paragraph}>
              A new underground North Melbourne Station will be located near the
              corner of Arden and Laurens Streets about 450 metres walking
              distance from our building. It is estimated that work will take
              around eight years. Excavation at the site is underway and will
              continue until mid-2019. Major construction of the Metro Tunnel is
              continuing in and around the site of the new North Melbourne
              Station.
            </p>
            <p className={css.news_paragraph}>
              Updates on the Metro Tunnel Construction - North Melbourne Station
              are available on
            </p>
            <p>
              <a
                href="https://metrotunnel.vic.gov.au/construction/north-melbourne"
                target="_blank"
              >
                https://metrotunnel.vic.gov.au/construction/north-melbourne
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-32 w3-border-bottom w3-border-light-grey">
        <div className="w3-col l3 m3 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="./images/News_new_woolworths_supermarket.jpg"
              alt="woolworths"
              style={fullWidthStyle}
            ></img>
          </div>
        </div>
        <div className="w3-col l9 m9 s12 w3-margin-bottom">
          <div className="w3-display-container">
            <h4 className={css.news_title}>
              New Woolworths supermarket in Arden Gardens
            </h4>
            <p className={css.news_paragraph}>
              Woolworths Arden Gardens store has been open since February 2019.
              The new store is only about 450 metres from our building. There
              are now more retail shops available in Arden Gardens Plaza for
              local residents incl Australian Post Office, Café, Beauty &amp;
              Spa shop, Asian Grocery, etc.
            </p>
            <p>
              Arden Gardens Plaza address: 168 Macaulay Rd, North Melbourne VIC
              3051
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
