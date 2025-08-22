import { Test, TestingModule } from '@nestjs/testing';
import { AnimalPhotosService } from './animal-photos.service';

describe('AnimalPhotosService', () => {
  let service: AnimalPhotosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimalPhotosService],
    }).compile();

    service = module.get<AnimalPhotosService>(AnimalPhotosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
