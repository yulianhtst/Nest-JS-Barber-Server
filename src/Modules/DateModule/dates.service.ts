import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dates } from './schema/dates.schema';
import { Model } from 'mongoose';

@Injectable()
export class DatesService {
  constructor(@InjectModel(Dates.name) private datesModel: Model<Dates>) {}
  //Db connection etc
}
