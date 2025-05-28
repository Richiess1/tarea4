import { Injectable } from '@nestjs/common';
import { CreateAvanzado3Dto } from './dto/create-avanzado-3.dto';
import { UpdateAvanzado3Dto } from './dto/update-avanzado-3.dto';

@Injectable()
export class Avanzado3Service {
  create(createAvanzado3Dto: CreateAvanzado3Dto) {
    return 'This action adds a new avanzado3';
  }

  findAll() {
    return `This action returns all avanzado3`;
  }

  findOne(id: number) {
    return `This action returns a #${id} avanzado3`;
  }

  update(id: number, updateAvanzado3Dto: UpdateAvanzado3Dto) {
    return `This action updates a #${id} avanzado3`;
  }

  delete(id: number) {
    return `This action removes a #${id} avanzado3`;
  }
}
