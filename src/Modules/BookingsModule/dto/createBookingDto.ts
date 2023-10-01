import { IsNotEmpty, IsDateString, IsEmail, IsOptional, IsMongoId } from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly number: string;

  @IsOptional()
  readonly services: string;

  @IsDateString()
 readonly  date: Date;
  
  @IsMongoId()
  readonly barber: string;
}
