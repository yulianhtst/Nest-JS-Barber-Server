import { IsNotEmpty, IsDateString, IsEmail, IsOptional } from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  number: string;

  @IsOptional()
  services: string;

  @IsOptional()
  booked: boolean;

  @IsOptional()
  dayOff: boolean;

  @IsDateString()
  date: Date;
  @IsOptional()
  barberId: any;
}
