import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as css from './Bookings.css';
import { BookingType } from '../../models/BookingType';
import moment, { Moment } from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const maxWidthStyle = {
    maxWidth: 1500
};

const maxHeightStyle = {
    maxHeight: 300
};

interface IProps {
    bookingMode: BookingType
}

interface IState {
    bookingMode: BookingType,
    hideForm: boolean,
    bookingValidFirstDay: Moment,
    bookingValidLastDay: Moment,
    bookingDate: Moment,
    bbqValidFromTime: Moment,
    bbqValidToTime: Moment,
    bookingTime: Moment,
    bookingDuration: number,
    bookingApartmentNumber: string,
    bookingName: string,
    bookingPhone: string,
    bookingEmail: string,
    bookingComment: string,
    bookingNote: string,
    invalidApartmentName: boolean,
    invalidName: boolean,
    invalidPhone: boolean,
    invalidEmail: boolean,
    formIsValid: boolean,
}

export default class Bookings extends React.Component<IProps, IState> {
    state: IState;
    _apartmentNumber: any;
    _name: any;
    _phone: any;
    _email: any;
    _comment: any;
    _bookingDuration: any;

    constructor(props: IProps) {
        super(props);
        this.state = {
            bookingMode: this.props.bookingMode === undefined ? BookingType.NA : this.props.bookingMode,
            hideForm: true,
            bookingValidFirstDay: moment().add(1, 'days'),
            bookingValidLastDay: moment().add(2, 'months'),
            bookingDate: moment().add(1, 'days'),
            bbqValidFromTime: moment().set('hour', 8).set('minute', 0),
            bbqValidToTime: moment().set('hour', 22).set('minute', 0),
            bookingTime: moment(),
            bookingDuration: 30,
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
        };
        this._apartmentNumber = '';
    }

    changeBookingMode = (bookingMode: BookingType) => (event: any) => {
        const _fromTime = bookingMode === BookingType.BBQ ? this.state.bbqValidFromTime : moment();
        const _note = bookingMode == BookingType.BBQ ? 'BBQ note' : 'Moving note';

        this.setState({
            ...this.state,
            bookingMode: bookingMode,
            hideForm: false,
            bookingTime: _fromTime,
            bookingDuration: 30,
            bookingNote: _note,
        });
    }

    selectBookingDate = (date: Moment) => {
        this.setState({
            bookingDate: date
        });
    }

    selectBookingFromTime = (time: Moment) => {
        this.setState({
            bookingTime: time
        });
    }

    selectBookingDuration = () => {
        this.setState({
            bookingDuration: this._bookingDuration.value
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
    }

    hideConfirmModal = () => {
        this.setState({
            formIsValid: false
        });
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

    getReadableDuration = (): string => {
        switch (this.state.bookingDuration) {
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
                            <span className="w3-padding w3-black w3-opacity-min w3-round-medium">Reflections Apartments</span>
                        </h1>
                    </div>
                </header>

                <div className="w3-content w3-margin-top" style={maxWidthStyle}>
                    <div className="w3-container w3-margin-top">
                        <div className="w3-col l1 m0 s12 w3-margin-bottom"></div>
                        <div className="w3-col l10 m12 s12 w3-margin-bottom">
                            <button 
                                className={bbq_class}
                                onClick={ this.changeBookingMode(BookingType.BBQ) }>
                                    <i className="fab fa-gripfire"></i> BBQ
                            </button>
                            <button
                                className={`${move_class} ${css.move_button}`}
                                onClick= {this.changeBookingMode(BookingType.MOVE)}>
                                    <i className="fas fa-people-carry"></i> Move In/Out
                            </button>
                        </div>
                        <div className="w3-col l1 m0 s12 w3-margin-bottom"></div>
                    </div>
                </div>

                <div className={`w3-content ${this.state.hideForm ? css.hideForm : css.showForm}`} style={maxWidthStyle}>
                    <div className="w3-container">
                        <div className="w3-col l1 m0 s12 w3-margin-bottom"></div>
                        <div className="w3-col l10 m12 s12 w3-margin-bottom">
                            {this.state.bookingNote}
                        </div>
                        <div className="w3-col l1 m0 s12 w3-margin-bottom"></div>
                    </div>
                </div>

                <div className={`w3-content ${this.state.hideForm ? css.hideForm : css.showForm}`} style={maxWidthStyle}>
                    <div className="w3-container w3-margin-bottom">
                        <div className="w3-col l1 m0 s12 w3-margin-bottom"></div>
                        <div className="w3-col l10 m12 s12 w3-margin-bottom">
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
                                            <h4 className={css.timeLabel}>Time:</h4>
                                            <DatePicker
                                                selected={this.state.bookingTime}
                                                onChange={this.selectBookingFromTime}
                                                showTimeSelect
                                                showTimeSelectOnly
                                                minTime={this.state.bbqValidFromTime}
                                                maxTime={this.state.bbqValidToTime}
                                                dateFormat="h:mm a"
                                                timeIntervals={30}
                                                className="w3-input"
                                                onKeyDown={this.doesNothing}
                                            />
                                        </div>

                                        <div className="w3-col l12 m12 s12">
                                            <h4 className={css.timeLabel}>Duration:</h4>
                                            <select className="w3-border" onChange={this.selectBookingDuration}
                                                ref={ (e) => this._bookingDuration = e }>
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
                                        type="text" ref={ (e) => this._apartmentNumber = e } />
                                    {this.state.invalidApartmentName}
                                </p>

                                <p>
                                    <label className={css.formLabel}>Name <span className={css.required}>*</span></label>
                                    <input className={`w3-input ${this.state.invalidName ? 'w3-border-red' : ''}`}
                                        type="text" ref={ (e) => this._name = e } />
                                </p>

                                <p>
                                    <label className={css.formLabel}>Phone / Mobile <span className={css.required}>*</span></label>
                                    <input className={`w3-input ${this.state.invalidPhone ? 'w3-border-red' : ''}`}
                                        type="text" ref={ (e) => this._phone = e } />
                                </p>

                                <p>
                                    <label className={css.formLabel}>Email <span className={css.required}>*</span></label>
                                    <input className={`w3-input ${this.state.invalidEmail ? 'w3-border-red' : ''}`}
                                        type="text" ref={ (e) => this._email = e } />
                                </p>

                                <p>
                                    <label className={css.formLabel}>Additional Comment</label>
                                    <textarea className={css.bookingTextArea} ref={ (e) => this._comment = e }></textarea>
                                </p>

                                <div>
                                    <button className="w3-btn w3-teal w3-round-large" onClick={this.confirmBooking}>
                                        Confirm <i className="fas fa-check"></i>
                                    </button>

                                    {/* Confirm Modal */}
                                    <div className={`w3-modal ${ this.state.formIsValid ? css.showConfimModal : '' }`}>
                                        <div className="w3-modal-content w3-card-4 w3-animate-opacity">
                                            <header className="w3-container w3-teal">
                                                <span className="w3-button w3-display-topright" onClick={this.hideConfirmModal}>&times;</span>
                                                <h3>Confirm Booking</h3>
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
                                                            <td>{this.getReadableDuration()}</td>
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
                                </div>
                            </form>
                        </div>
                        <div className="w3-col l1 m0 s12 w3-margin-bottom"></div>
                    </div>
                </div>
            </div>
        )
    }
}