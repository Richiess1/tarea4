import { Test, TestingModule } from '@nestjs/testing';
import { Avanzado3Controller } from './avanzado-3.controller';
import { Avanzado3Service } from './avanzado-3.service';

describe('Avanzado3Controller', () => {
  let controller: Avanzado3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Avanzado3Controller],
      providers: [Avanzado3Service],
    }).compile();

    controller = module.get<Avanzado3Controller>(Avanzado3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
