import { Module } from '@nestjs/common';
import { AnimalPhotosService } from './animal-photos.service';
import { AnimalPhotosController } from './animal-photos.controller';

@Module({
  controllers: [AnimalPhotosController],
  providers: [AnimalPhotosService],
})
export class AnimalPhotosModule {}
