import { Module } from '@nestjs/common';
import { Avanzado3Service } from './avanzado-3.service';
import { Avanzado3Controller } from './avanzado-3.controller';

@Module({
  controllers: [Avanzado3Controller],
  providers: [Avanzado3Service],
})
export class Avanzado3Module {}
