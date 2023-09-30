import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BarberDocument = HydratedDocument<Barber>;

@Schema()
export class Barber {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  workingHours: string;
  
}

export const BarberShema = SchemaFactory.createForClass(Barber);
