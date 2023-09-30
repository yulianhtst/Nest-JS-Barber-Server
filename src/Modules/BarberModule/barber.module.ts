import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Barber, BarberShema } from './schema/barber.schema';
import { BarberService } from './barber.service';
import { BarberController } from './barber.controller';

@Module({
  controllers: [BarberController],
  exports: [],
  imports: [
    MongooseModule.forFeature([{ name: Barber.name, schema: BarberShema }]),
  ],
  providers: [BarberService],
})
export class BarberModule {}
