import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './Modules/BookingsModule/booking.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DatesModule } from './Modules/DateModule/dates.module';
import { isDateExisting } from './Modules/DateModule/Validation/isDateExisting';

//ТODO
//1.1 createBooking
//1.2 getAllBookings
//2.1 getWorkingWeek
//2.2 patchWorkingWeek

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/barbershop'),
    BookingModule,
    DatesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
