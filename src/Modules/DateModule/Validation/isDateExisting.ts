import { InjectModel } from '@nestjs/mongoose';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Dates } from '../schema/dates.schema';
import { Model } from 'mongoose';

@ValidatorConstraint({ async: true })
export class isDateExisting implements ValidatorConstraintInterface {
  constructor(@InjectModel(Dates.name) private datesModel: Model<Dates>) {}

  //if validation succeeds returns true
  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    //Value e datata

    console.log(value, 'value');

    const foundDate = await this.datesModel.findOne({
      date: value.slice(0, 10),
    });
    console.log(foundDate, 'found date');

    if (foundDate) {
      return false;
    } else {
      return true;
    }

    // throw new Error('Method not implemented.');
  }
  // defaultMessage?(validationArguments?: ValidationArguments): string {
  //   throw new Error('Method not implemented.');
  // }
}
