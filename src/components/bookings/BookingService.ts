import { IState, IBookingModel } from './BookingInterface';
import { BookingType } from '../../models/BookingType';
import { BookingClient } from '../../externalservice/BookingClient';
import moment, { Moment } from 'moment';

export class BookingService {
  private bookingClient: BookingClient;

  constructor() {
    this.bookingClient = new BookingClient();
  }

  submitBooking = (state: IState): boolean => {
    const bookingModel: IBookingModel = {
      type: state.bookingMode,
      date: state.bookingDate.format('YYYY-MM-DD'),
      time: state.bookingTime.format('hh:mm a'),
      duration: state.bookingDuration,
      apartmentNumber: state.bookingApartmentNumber,
      name: state.bookingName,
      phone: state.bookingPhone,
      email: state.bookingEmail,
      comment: state.bookingComment,
    };

    this.bookingClient.createBooking(
      'https://reflectionsbooking-heroku-22.herokuapp.com/bookings',
      bookingModel
    );

    return true;
  };

  listAllBookingsOfTypeAndDate = async (type: BookingType, date: string): Promise<Moment[]> => {
    const moments: Moment[] = [];

    await this.bookingClient
      .allBookingsByTypeAndDate('https://reflectionsbooking-heroku-22.herokuapp.com/bookings', type, date)
      .then((bookings) => {
        for (let booking of bookings) {
          const bookingTime = moment(`${date} ${booking.time}`, 'YYYY-MM-DD HH:mm a');
          moments.push(bookingTime);

          switch (booking.duration) {
            case 60:
              moments.push(bookingTime.clone().add(30, 'minutes'));
              break;
            case 90:
              moments.push(bookingTime.clone().add(30, 'minutes'));
              moments.push(bookingTime.clone().add(60, 'minutes'));
              break;
            case 120:
              moments.push(bookingTime.clone().add(30, 'minutes'));
              moments.push(bookingTime.clone().add(60, 'minutes'));
              moments.push(bookingTime.clone().add(90, 'minutes'));
              break;
            default:
              break;
          }
        }
      });

    return moments;
  };
}
