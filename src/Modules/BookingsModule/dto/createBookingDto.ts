import { IsNotEmpty, IsDate, IsEmail, IsOptional } from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  number: string;
  //This can be empty
  @IsOptional()
  services: string;
  @IsDate()
  date: Date;
}
