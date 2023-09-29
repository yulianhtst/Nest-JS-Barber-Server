import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DatesDocument = HydratedDocument<Dates>;
@Schema()
export class Dates {
  @Prop()
  date: Date;
}
export const DatesSchema = SchemaFactory.createForClass(Dates);
