import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BarberService } from './barber.service';
import { Barber } from './schema/barber.schema';

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
  @Get(':id')
  async getBarberById(@Param() params: any): Promise<Barber> {
    return await this.barberService.getBarberById(params.id);
  }
}
