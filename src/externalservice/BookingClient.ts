import { BookingType } from '../models/BookingType';
import { Booking } from '../components/bookings/BookingInterface';

export class BookingClient {

    createBooking = async (endppointUrl: string, data: any): Promise<Booking> => {
        const options = {
            method: 'post',
            headers: BookingClient.headers,
            body: JSON.stringify(data),
        };

        return await fetch(endppointUrl, options)
            .then(resp => { return resp.json() }, err => {
                console.log('Booking Microservice is down?', err);
                return {};
            })
            .then(body => body);
    }

    allBookingsByTypeAndDate = async (endpointUrl: string, type: BookingType, date: string): Promise<Booking[]> => {
        const options = {
            method: 'get',
            headers: BookingClient.headers,
        };

        const url = `${endpointUrl}/${type}/${date}`;
        return await fetch(url, options)
            .then(resp => resp.json())
            .then(body => body)
            .catch(err => {
                console.log(err);
                return {};
            });
    }

    private static headers = {
        'Content-type': 'application/json',
    };

}