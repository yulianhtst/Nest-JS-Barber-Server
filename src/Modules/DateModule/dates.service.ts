import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dates } from './schema/dates.schema';
import { Model } from 'mongoose';
import { DateDto } from './dto/createDateDto';

@Injectable()
export class DatesService {
  constructor(@InjectModel(Dates.name) private datesModel: Model<Dates>) {}
  //Db connection etc

  async getDates() {
    return 'server';
  }
  async postDates(dateObj: DateDto) {
    const date = new this.datesModel(dateObj);

    return date.save();
  }
}
