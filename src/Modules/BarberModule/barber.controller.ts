import { Body, Controller, Get, Post } from '@nestjs/common';
import { BarberService } from './barber.service';

@Controller('barbers')
export class BarberController {
  constructor(private readonly barberService: BarberService) {}

  @Post()
  async createBarber(@Body() body) {
    return await this.barberService.createBarber(body);
  }
  @Get()
  async getAllBarbers() {
    return await this.barberService.getAllBarbers();
  }
}
