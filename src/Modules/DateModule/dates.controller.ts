import { Controller, Get } from '@nestjs/common';
import { DatesService } from './dates.service';

@Controller('dates')
export class DatesController {
  constructor(private readonly datesService: DatesService) {}
  @Get()
  getDates() {
    // this.dateService.
  }
}
