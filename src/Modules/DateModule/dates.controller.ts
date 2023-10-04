import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { DatesService } from './dates.service';
import { DateDto } from './dto/createDateDto';

@Controller('dates')
export class DatesController {
  constructor(private datesService: DatesService) {}
  @Get()
  generateDates() {
    return this.datesService.generateDates();
  }
  @Get('1')
  async getAllDates() {
    return await this.datesService.getAllDates();
  }
  @Post()
  async postDates(@Body() dateObj: DateDto) {
    return await this.datesService.postDates(dateObj);
  }
  @Delete(':id')
  async deleteDate(@Param() idObj) {
    return await this.datesService.deleteDate(idObj.id);
  }
}
