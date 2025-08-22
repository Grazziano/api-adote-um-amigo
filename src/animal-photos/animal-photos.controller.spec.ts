import { Test, TestingModule } from '@nestjs/testing';
import { AnimalPhotosController } from './animal-photos.controller';
import { AnimalPhotosService } from './animal-photos.service';

describe('AnimalPhotosController', () => {
  let controller: AnimalPhotosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalPhotosController],
      providers: [AnimalPhotosService],
    }).compile();

    controller = module.get<AnimalPhotosController>(AnimalPhotosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
