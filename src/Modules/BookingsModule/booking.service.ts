import { Injectable } from '@nestjs/common/decorators';
import { CreateBookingDto } from './dto/createBookingDto';
import { InjectModel } from '@nestjs/mongoose';
import { Booking } from './schema/booking.schema';
import { Model } from 'mongoose';
import { Barber } from '../BarberModule/schema/barber.schema';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<Booking>,
    @InjectModel(Barber.name) private barberModel: Model<Barber>,
  ) {}

  async getAllBookings(): Promise<Booking[]> {
    return this.bookingModel.find({}).exec();
  }
  async createBooking(dto: CreateBookingDto): Promise<any> {
    const newBooking = new this.bookingModel(dto);
    const savedBooking = await newBooking.save();

    await this.barberModel.updateOne(
      { _id: dto.barber },
      { $push: { bookings: savedBooking._id } },
    );

    return savedBooking;
  }
}
