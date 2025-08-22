import { Injectable } from '@nestjs/common';
import { CreateAnimalPhotoDto } from './dto/create-animal-photo.dto';
import { UpdateAnimalPhotoDto } from './dto/update-animal-photo.dto';

@Injectable()
export class AnimalPhotosService {
  create(createAnimalPhotoDto: CreateAnimalPhotoDto) {
    return 'This action adds a new animalPhoto';
  }

  findAll() {
    return `This action returns all animalPhotos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} animalPhoto`;
  }

  update(id: number, updateAnimalPhotoDto: UpdateAnimalPhotoDto) {
    return `This action updates a #${id} animalPhoto`;
  }

  remove(id: number) {
    return `This action removes a #${id} animalPhoto`;
  }
}
