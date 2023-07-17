import { Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { StopsService } from './stops.service';

@Controller('stops')
export class StopsController {
  constructor(private readonly stopsService: StopsService) {}

  @Post()
  updateAll() {
    return this.stopsService.updateAll();
  }
  @Get()
  findAll() {
    return this.stopsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stopsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stopsService.remove(+id);
  }
}
