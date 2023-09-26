import { IsNotEmpty, IsDate } from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  number: string;
  @IsNotEmpty()
  services: string;
  @IsDate()
  date: Date;
}
