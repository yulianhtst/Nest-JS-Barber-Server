import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Barber } from 'src/Modules/BarberModule/schema/barber.schema';

export type DatesDocument = HydratedDocument<Dates>;
@Schema()
export class Dates {
  @Prop()
  date: Date;

}
export const DatesSchema = SchemaFactory.createForClass(Dates);
