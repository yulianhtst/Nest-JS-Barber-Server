import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dates } from './schema/dates.schema';
import { Model } from 'mongoose';
import { DateDto } from './dto/createDateDto';

@Injectable()
export class DatesService {
  constructor(@InjectModel(Dates.name) private datesModel: Model<Dates>) {}
  //Db connection etc

  generateDates(): string[] {
    const arrayOfDates = [];

    for (let i = 0; i < 10; i++) {
      const day = new Date();

      let result = new Date(day.setDate(day.getDate() + i))
        .toString()
        .substring(4, 16);

      arrayOfDates.push(result);
    }

    return arrayOfDates;
  }
  async getAllDates(): Promise<any> {
    return this.datesModel.find({}).exec();
  }

  async postDates(dateObj: DateDto): Promise<any> {
    const dateForSave = { date: dateObj.date.slice(0, 10) };

    const date = new this.datesModel(dateForSave);

    return date.save();
  }

  async deleteDate(id: { id: string }): Promise<any> {
    return this.datesModel.findByIdAndDelete(id);
  }
}
