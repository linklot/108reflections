import { BookingClient } from "../../externalservice/BookingClient";
import { IState } from "../subscribe/SubscribeInterface";

export class SubscribeService {
    private bookingClient: BookingClient;

    constructor() {
        this.bookingClient = new BookingClient();
    }

    submitSubscribe = (state: IState): boolean => {
        const subscribeModel = {
            name: state.name,
            apartmentNumber: state.apartmentNumber,
            email: state.email,
        };

        this.bookingClient.createBooking('https://reflectionsbooking-heroku-22.herokuapp.com/bookings/subscribe', subscribeModel);

        return true;
    }
}