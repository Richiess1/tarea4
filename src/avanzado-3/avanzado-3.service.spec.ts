import { Test, TestingModule } from '@nestjs/testing';
import { Avanzado3Service } from './avanzado-3.service';

describe('Avanzado3Service', () => {
  let service: Avanzado3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Avanzado3Service],
    }).compile();

    service = module.get<Avanzado3Service>(Avanzado3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
