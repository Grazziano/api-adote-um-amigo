import { Module } from '@nestjs/common';
import { AnimalPhotosService } from './animal-photos.service';
import { AnimalPhotosController } from './animal-photos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalPhoto } from './entities/animal-photo.entity';
import { Animal } from 'src/animals/entities/animal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnimalPhoto, Animal])],
  controllers: [AnimalPhotosController],
  providers: [AnimalPhotosService],
})
export class AnimalPhotosModule {}
