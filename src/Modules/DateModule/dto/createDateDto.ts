import { IsNotEmpty, IsDateString, Validate } from 'class-validator';
import { isDateExisting } from '../Validation/isDateExisting';

export class DateDto {
  @IsDateString()
  @IsNotEmpty()
  @Validate(isDateExisting)
  date: string;
}
