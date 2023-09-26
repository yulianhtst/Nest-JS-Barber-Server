import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './Modules/BookingsModule/booking.module';

//ТODO
//1.1 createBooking
//1.2 getAllBookings
//2.1 getWorkingWeek
//2.2 patchWorkingWeek

@Module({
  imports: [BookingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
