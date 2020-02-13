import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as css from './Bookings.css';
import { BookingType } from '../../models/BookingType';
import { IState, IProps } from './BookingInterface';
import { BookingService } from './BookingService';
import { BookingNotes } from './BookingNotes';
import moment, { Moment } from 'moment';
import DatePicker from 'react-datepicker';
import "./react-datepicker-cssmodules.css";
import ReactHtmlParser from 'react-html-parser';

const maxWidthStyle = {
    maxWidth: 1500
};

const maxHeightStyle = {
    maxHeight: 300
};

const iconImg = {
    borderRadius: '8pt',
    boxShadow: '5px 5px 5px rgba(100, 100, 100, .5)',
    height: '120px'
}

const note = {
    color: 'red'
}

export default class Bookings extends React.Component<IProps, IState> {
    state: IState;
    _apartmentNumber: any;
    _name: any;
    _phone: any;
    _email: any;
    _comment: any;
    _bookingDuration: any;
    bookingService: BookingService;
    bookingNotes: BookingNotes;
    excludeTimes: Moment[];

    constructor(props: IProps) {
        super(props);
        this.state = {
            bookingMode: this.props.bookingMode === undefined ? BookingType.NA : this.props.bookingMode,
            hideForm: true,
            hideNote: true,
            bookingValidFirstDay: moment().add(1, 'days'),
            bookingValidLastDay: moment().add(2, 'months'),
            bookingDate: moment().add(1, 'days'),
            bbqValidFromTime: moment().set('hour', 8).set('minute', 0),
            bbqValidToTime: moment().set('hour', 22).set('minute', 0),
            moveValidFromTime: moment().set('hour', 10).set('minute', 0),
            moveValidToTime: moment().set('hour', 16).set('minute', 0),
            validFromTime: moment(),
            validToTime: moment(),
            bookingTime: moment(),
            bookingDuration: 30,
            readableDuration: '30 minutes',
            bookingApartmentNumber: '',
            bookingName: '',
            bookingPhone: '',
            bookingEmail: '',
            bookingComment: '',
            bookingNote: '',
            invalidApartmentName: false,
            invalidName: false,
            invalidPhone: false,
            invalidEmail: false,
            formIsValid: false,
            formSubmitted: false,
            excludeTimes: [],
        };
        this._apartmentNumber = '';
        this.bookingService = new BookingService();
        this.excludeTimes = [];
        this.bookingNotes = new BookingNotes();
    }

    changeBookingMode = (bookingMode: BookingType) => (event: any) => {
        if (bookingMode === BookingType.HARD_WASTE) {
            const _note = ReactHtmlParser(this.bookingNotes.hardWasteNote);
            this.setState({
                bookingMode: bookingMode,
                bookingNote: _note,
                hideNote: false,
                hideForm: true,
            });

            return;
        }

        const _fromTime = bookingMode === BookingType.BBQ ? this.state.bbqValidFromTime : this.state.moveValidFromTime;
        const _note = bookingMode == BookingType.BBQ ? ReactHtmlParser(this.bookingNotes.bbqNote) : ReactHtmlParser(this.bookingNotes.moveNote);

        const _bookingValidFromDate = bookingMode === BookingType.BBQ ? moment().add(1, 'days') : moment().add(2, 'days');

        this.bookingService.listAllBookingsOfTypeAndDate(bookingMode, this.state.bookingDate.format('YYYY-MM-DD'))
            .then(data => {
                this.setState({
                    bookingMode: bookingMode,
                    hideNote: false,
                    hideForm: false,
                    bookingTime: this.calculateBookingStartTime(_fromTime, data),
                    bookingDuration: 30,
                    bookingNote: _note,
                    excludeTimes: data,
                    bookingValidFirstDay: _bookingValidFromDate,
                    bookingDate: _bookingValidFromDate,
                });

                this.selectBookingDate(_bookingValidFromDate);
            });
    }

    selectBookingDate = (date: Moment) => {
        this.setState({
            bookingDate: date
        });

        const bookingType = this.state.bookingMode;
        const bookingDate = date.format('YYYY-MM-DD');
        this.bookingService.listAllBookingsOfTypeAndDate(bookingType, bookingDate)
            .then(data => {
                const possibleStartTime = this.state.bookingMode === BookingType.BBQ
                    ? this.state.bbqValidFromTime
                    : this.state.moveValidFromTime;

                this.setState({
                    excludeTimes: data,
                    bookingTime: this.calculateBookingStartTime(possibleStartTime, data),
                    validFromTime: this.state.bookingMode === BookingType.BBQ ? this.state.bbqValidFromTime : this.state.moveValidFromTime,
                    validToTime: this.state.bookingMode === BookingType.BBQ ? this.state.bbqValidToTime : this.state.moveValidToTime,
                });
            });
    }

    calculateBookingStartTime = (possibleStartTime: Moment, bookedTimes: Moment[]): Moment => {
        const _bookedTimes = bookedTimes.map(time => time.format('h:mm a'));
        const _possibleStartTime = possibleStartTime.format('h:mm a');

        if (_bookedTimes.indexOf(_possibleStartTime) === -1) {
            return possibleStartTime.seconds(0);
        } else {
            return this.calculateBookingStartTime(possibleStartTime.clone().add(30, 'minutes'), bookedTimes);
        }
    }

    selectBookingFromTime = (time: Moment) => {
        this.setState({
            bookingTime: time
        });
    }

    selectBookingDuration = () => {
        this.setState({
            bookingDuration: this._bookingDuration.value,
            readableDuration: this.getReadableDuration(+this._bookingDuration.value),
        });
    }

    doesNothing = (e: any) => {
        e.preventDefault();
    }

    confirmBooking = (e: any) => {
        e.preventDefault();
        const valid = this.validateFormFields();

        this.setState({
            formIsValid: valid
        });
    }

    submitBooking = (e: any) => {
        e.preventDefault();

        this.setState({
            formIsValid: false,
        });

        this.bookingService.submitBooking(this.state);

        this.setState({
            formSubmitted: true,
        });
    }

    hideConfirmModal = () => {
        this.setState({
            formIsValid: false
        });
    }

    hideNotifyModal = () => {
        this.setState({
            formSubmitted: false
        });

        location.reload();
    }

    validateFormFields = (): boolean => {
        let _valid = true;

        if (this._apartmentNumber.value.trim() === '') {
            this.setState({
                invalidApartmentName: true,
            });
            _valid = false;
        } else {
            this.setState({
                invalidApartmentName: false,
                bookingApartmentNumber: this._apartmentNumber.value,
            });
        }

        if (this._name.value.trim() === '') {
            this.setState({
                invalidName: true,
            });
            _valid = false;
        } else {
            this.setState({
                invalidName: false,
                bookingName: this._name.value,
            });
        }

        if (this._phone.value.trim() === '') {
            this.setState({
                invalidPhone: true,
            });
            _valid = false;
        } else {
            this.setState({
                invalidPhone: false,
                bookingPhone: this._phone.value,
            });
        }

        if (this._email.value.trim() === '') {
            this.setState({
                invalidEmail: true,
            });
            _valid = false;
        } else {
            this.setState({
                invalidEmail: false,
                bookingEmail: this._email.value,
            });
        }

        this.setState({
            bookingComment: this._comment.value,
        });

        return _valid;
    }

    getReadableDuration = (bookingDuration: number): string => {
        switch (bookingDuration) {
            case 30: {
                return '30 minutes';
            }
            case 60: {
                return '1 hour';
            }
            case 90: {
                return '1.5 hours';
            }
            case 120: {
                return '2 hours';
            }
            default: {
                return '';
            }
        }
    }

    public render() {
        const bbq_class = `w3-btn w3-border w3-border-green w3-round-large ${css.booking_button}
            ${this.state.bookingMode === BookingType.BBQ ? css.booking_activeButton : ''}`;
        const move_class = `w3-btn w3-border w3-border-green w3-round-large ${css.booking_button}
            ${this.state.bookingMode === BookingType.MOVE ? css.booking_activeButton : ''}`;
        const hardWaste_class = `w3-btn w3-border w3-border-green w3-round-large ${css.booking_button}
            ${this.state.bookingMode === BookingType.HARD_WASTE ? css.booking_activeButton : ''}`;

        return (
            <div>
                <header className="w3-display-container w3-content w3-wide w3-margin-bottom" style={maxWidthStyle}>
                    <img className="w3-image"
                        style={maxHeightStyle}
                        src="./images/booking_title.jpg"
                        width={1500} height={300} alt="Booking">
                    </img>
                    <div className="w3-display-middle w3-margin-top w3-center w3-margin-bottom">
                        <h1 className="w3-xxlarge w3-text-white">
                            <img style={iconImg} src="./images/icon.jpg"></img>
                        </h1>
                    </div>
                </header>

                <div className="w3-content w3-margin-top" style={maxWidthStyle}>
                    <div className="w3-container w3-margin-top">
                        <div className="w3-col l12 m12 s12 w3-margin-bottom">
                            <p>Please allow a few seconds for the page to load on the first click.</p>
                        </div>
                    </div>
                </div>

                <div className="w3-content w3-margin-top" style={maxWidthStyle}>
                    <div className="w3-container w3-margin-top">
                        <div className="w3-col l12 m12 s12 w3-margin-bottom">
                            <button
                                className={bbq_class}
                                onClick={this.changeBookingMode(BookingType.BBQ)}>
                                <i className="fab fa-gripfire"></i> BBQ
                            </button>
                            <button
                                className={`${move_class} ${css.move_button}`}
                                onClick={this.changeBookingMode(BookingType.MOVE)}>
                                <i className="fas fa-people-carry"></i> Move In/Out
                            </button>
                            <button
                                className={`${hardWaste_class} ${css.move_button}`}
                                onClick={this.changeBookingMode(BookingType.HARD_WASTE)}>
                                <i className="fas fa-people-carry"></i> Hard Waste Collection
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`w3-content ${this.state.hideNote ? css.hideForm : css.showForm}`} style={maxWidthStyle}>
                    <div className="w3-container">
                        <div className="w3-col l12 m12 s12 w3-margin-bottom">
                            {this.state.bookingNote}
                        </div>
                    </div>
                </div>

                <div className={`w3-content ${this.state.hideForm ? css.hideForm : css.showForm}`} style={maxWidthStyle}>
                    <div className="w3-container w3-margin-bottom">
                        <div className="w3-col l12 m12 s12 w3-margin-bottom">
                            <form name="bookingForm">
                                <div className="w3-col l12 m12 s12">
                                    <div className="w3-col l6 m12 s12 w3-margin-bottom">
                                        <h3>Date</h3>
                                        <DatePicker
                                            inline
                                            readOnly
                                            monthsShown={2}
                                            selected={this.state.bookingDate}
                                            minDate={this.state.bookingValidFirstDay}
                                            maxDate={this.state.bookingValidLastDay}
                                            onChange={this.selectBookingDate}
                                            dateFormat="DD/MM/YYYY HH:mm"
                                            className={`w3-input w3-border w3-border-cyan w3-center w3-round-large ${css.dateCss}`}
                                        />
                                    </div>
                                    <div className="w3-col l6 m12 s12 w3-margin-bottom">
                                        <div className="w3-col l12 m12 s12">
                                            <h4 className={css.timeLabel}>Start From:</h4>
                                            <DatePicker
                                                selected={this.state.bookingTime}
                                                onChange={this.selectBookingFromTime}
                                                showTimeSelect
                                                showTimeSelectOnly
                                                minTime={this.state.validFromTime}
                                                maxTime={this.state.validToTime}
                                                dateFormat="h:mm a"
                                                timeIntervals={30}
                                                className="w3-input"
                                                onKeyDown={this.doesNothing}
                                                excludeTimes={this.state.excludeTimes}
                                            />
                                        </div>

                                        <div className="w3-col l12 m12 s12">
                                            <h4 className={css.timeLabel}>Duration:</h4>
                                            <select className="w3-border" onChange={this.selectBookingDuration}
                                                ref={(e) => this._bookingDuration = e}>
                                                <option value="30">30 minutes</option>
                                                <option value="60">1 hour</option>
                                                <option value="90">1.5 hours</option>
                                                <option value="120">2 hours</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    <label className={css.formLabel}>Apartment Number <span className={css.required}>*</span></label>
                                    <input
                                        className={`w3-input ${this.state.invalidApartmentName ? 'w3-border-red' : ''}`}
                                        type="text" ref={(e) => this._apartmentNumber = e} />
                                </p>

                                <p>
                                    <label className={css.formLabel}>Name <span className={css.required}>*</span></label>
                                    <input className={`w3-input ${this.state.invalidName ? 'w3-border-red' : ''}`}
                                        type="text" ref={(e) => this._name = e} />
                                </p>

                                <p>
                                    <label className={css.formLabel}>Phone / Mobile <span className={css.required}>*</span></label>
                                    <input className={`w3-input ${this.state.invalidPhone ? 'w3-border-red' : ''}`}
                                        type="text" ref={(e) => this._phone = e} />
                                </p>

                                <p>
                                    <label className={css.formLabel}>Email <span className={css.required}>*</span></label>
                                    <input className={`w3-input ${this.state.invalidEmail ? 'w3-border-red' : ''}`}
                                        type="text" ref={(e) => this._email = e} />
                                </p>

                                <p>
                                    <label className={css.formLabel}>Additional Comment</label>
                                    <textarea className={css.bookingTextArea} ref={(e) => this._comment = e}></textarea>
                                </p>

                                <div>
                                    <button className="w3-btn w3-teal w3-round-large" onClick={this.confirmBooking}>
                                        Confirm <i className="fas fa-check"></i>
                                    </button>

                                    {/* Confirm Modal */}
                                    <div className={`w3-modal ${this.state.formIsValid ? css.showConfimModal : ''}`}>
                                        <div className="w3-modal-content w3-card-4 w3-animate-opacity">
                                            <header className="w3-container w3-green">
                                                <span className="w3-button w3-display-topright" onClick={this.hideConfirmModal}>&times;</span>
                                                <h3>Confirm</h3>
                                            </header>

                                            <div className="w3-container">
                                                <table className="w3-table w3-striped">
                                                    <tbody>
                                                        <tr>
                                                            <td>Date&amp;Time:</td>
                                                            <td>{this.state.bookingDate.format('DD MMM YYYY')} {this.state.bookingTime.format('h:mm a')}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Duration:</td>
                                                            <td>{this.state.readableDuration}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Apartment Number:</td>
                                                            <td>{this.state.bookingApartmentNumber}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name:</td>
                                                            <td>{this.state.bookingName}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Phone/Mobile:</td>
                                                            <td>{this.state.bookingPhone}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Email:</td>
                                                            <td>{this.state.bookingEmail}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Comment:</td>
                                                            <td>{this.state.bookingComment}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <footer className="w3-container">
                                                <p className="w3-right">
                                                    <button className="w3-button w3-green w3-hover-teal w3-round-large" onClick={this.submitBooking}>Submit</button>
                                                </p>
                                            </footer>
                                        </div>
                                    </div>
                                    {/* End Confirm Modal */}

                                    {/* Notification Modal */}
                                    <div className={`w3-modal ${this.state.formSubmitted ? css.showConfimModal : ''}`}>
                                        <div className="w3-modal-content w3-card-4 w3-animate-opacity">
                                            <header className="w3-container w3-teal">
                                                <span className="w3-button w3-display-topright" onClick={this.hideNotifyModal}>&times;</span>
                                                <h3>Submit Booking</h3>
                                            </header>

                                            <div className="w3-container">
                                                <p>Thank you!</p>
                                                <p>Your booking has been successfully submitted. We will send an email to confirm.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Notification Modal */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}