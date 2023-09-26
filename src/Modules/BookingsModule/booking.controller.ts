import { Body, Controller, Post } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('bookings')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Post()
  createBooking(@Body() body: any) {

    return this.bookingService.createBooking();
  }
}
