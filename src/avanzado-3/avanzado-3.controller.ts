import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Avanzado3Service } from './avanzado-3.service';
import { CreateAvanzado3Dto } from './dto/create-avanzado-3.dto';
import { UpdateAvanzado3Dto } from './dto/update-avanzado-3.dto';

@Controller('avanzado-3')
export class Avanzado3Controller {
  constructor(private readonly avanzado3Service: Avanzado3Service) {}

  @Post()
  create(@Body() createAvanzado3Dto: CreateAvanzado3Dto) {
    return this.avanzado3Service.create(createAvanzado3Dto);
  }

  @Get()
  findAll() {
    return this.avanzado3Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avanzado3Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvanzado3Dto: UpdateAvanzado3Dto) {
    return this.avanzado3Service.update(+id, updateAvanzado3Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avanzado3Service.remove(+id);
  }
}
