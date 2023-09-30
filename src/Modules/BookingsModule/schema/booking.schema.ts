import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Barber } from 'src/Modules/BarberModule/schema/barber.schema';

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

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Barber.name }])
  barber: Barber;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
