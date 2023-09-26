import { Injectable } from '@nestjs/common/decorators';
import { CreateBookingDto } from './dto/createBookingDto';

@Injectable()
export class BookingService {
  createBooking(createBookingDto: CreateBookingDto): any {
    return createBookingDto;
  }
  getAllBookings(): any {
    return 'ALL Bookings';
  }
}
