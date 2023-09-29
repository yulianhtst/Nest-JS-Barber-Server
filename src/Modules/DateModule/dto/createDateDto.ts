import {
  IsNotEmpty,
  IsDateString,
  IsEmail,
  IsOptional,
  Validate,
} from 'class-validator';
import { isDateExisting } from '../Validation/isDateExisting';

export class DateDto {
  @IsNotEmpty()
  @Validate(isDateExisting)
  date: string;
}
