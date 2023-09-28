import { Body, Req, Controller, Post, Get } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/createBookingDto';

@Controller('bookings')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Get()
  async getAllBookings() {
    return await this.bookingService.getAllBookings();
  }

  @Post()
  async createBooking(@Body() dto: CreateBookingDto) {
    return await this.bookingService.createBooking(dto);
  }
}
