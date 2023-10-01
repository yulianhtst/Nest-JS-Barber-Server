import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Booking } from 'src/Modules/BookingsModule/schema/booking.schema';

export type BarberDocument = HydratedDocument<Barber>;

@Schema()
export class Barber {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  workingHours: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Booking' }]})
  bookings: Booking[]; 
}

export const BarberShema = SchemaFactory.createForClass(Barber);
