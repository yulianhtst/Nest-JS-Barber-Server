import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookingDocument = HydratedDocument<Booking>;
@Schema()
export class Booking {
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  number: string;
  @Prop()
  services: string;
  @Prop()
  date: Date;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
