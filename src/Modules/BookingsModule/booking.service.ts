import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class BookingService {
  createBooking(): any {
    return 'Success';
  }
}
