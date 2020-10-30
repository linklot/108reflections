export interface IState {
    bookingMode: any,
    bookingDate: any,
    bookingTime: any,
    bookingDuration: any,
    bookingApartmentNumber: any,
    bookingName: any,
    bookingPhone: any,
    bookingEmail: any,
    bookingComment: any,
    hideForm: any,
    hideNote: any,
    bookingValidFirstDay: any,
    bookingValidLastDay: any,
    bbqValidFromTime: any,
    bbqValidToTime: any,
    moveValidFromTime: any,
    moveValidToTime: any,
    validFromTime: any,
    validToTime: any,
    readableDuration: any,
    bookingNote: any,
    invalidApartmentName: any,
    invalidName: any,
    invalidPhone: any,
    invalidEmail: any,
    formIsValid: any,
    formSubmitted: any,
    excludeTimes: any,
    disabled: boolean,
}

export interface IBookingModel {

}

export interface Booking {
    duration: any,
    time: any
}

export interface IProps {
    bookingMode: any
}