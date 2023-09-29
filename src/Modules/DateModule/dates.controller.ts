import { Body, Controller, Get, Post } from '@nestjs/common';
import { DatesService } from './dates.service';
import { DateDto } from './dto/createDateDto';

@Controller('dates')
export class DatesController {
  constructor(private datesService: DatesService) {}
  @Get()
  getDates() {
    return this.datesService.getDates();
    // this.dateService.
  }
  @Post()
  async postDates(@Body() dateObj: DateDto) {
    
    return await this.datesService.postDates(dateObj);
  }
}
