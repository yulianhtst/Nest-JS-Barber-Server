import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

import { MongooseModule } from '@nestjs/mongoose';
import { Booking, BookingSchema } from './schema/booking.schema';
import { Barber, BarberShema } from '../BarberModule/schema/barber.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Booking.name, schema: BookingSchema }]),
    MongooseModule.forFeature([{ name: Barber.name, schema: BarberShema }]),
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
