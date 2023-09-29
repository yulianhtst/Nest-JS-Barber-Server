import { Module } from '@nestjs/common';
import { DatesController } from './dates.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Dates, DatesSchema } from './schema/dates.schema';
import { DatesService } from './dates.service';
import { isDateExisting } from './Validation/isDateExisting';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dates.name, schema: DatesSchema }]),
  ],
  controllers: [DatesController],
  providers: [DatesService, isDateExisting],
})
export class DatesModule {}
