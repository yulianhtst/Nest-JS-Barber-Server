import { Injectable } from '@nestjs/common/decorators';
import { CreateBookingDto } from './dto/createBookingDto';
import { InjectModel } from '@nestjs/mongoose';
import { Booking } from './schema/booking.schema';
import { Model } from 'mongoose';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<Booking>,
  ) {}

  async getAllBookings(): Promise<Booking[]> {
    return this.bookingModel.find({}).exec();
  }
  async createBooking(dto: CreateBookingDto): Promise<Booking> {
    const booked = new this.bookingModel(dto);
    return booked.save();
  }
}
