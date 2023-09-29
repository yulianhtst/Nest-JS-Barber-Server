import { Module } from '@nestjs/common';
import { DatesController } from './dates.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Dates, DatesSchema } from './schema/dates.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dates.name, schema: DatesSchema }]),
  ],
  controllers: [DatesController],
  providers: [],
})
export class DatesModule {}
