import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnimalPhotoDto } from './dto/create-animal-photo.dto';
import { UpdateAnimalPhotoDto } from './dto/update-animal-photo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnimalPhoto } from './entities/animal-photo.entity';
import { Animal } from 'src/animals/entities/animal.entity';

@Injectable()
export class AnimalPhotosService {
  constructor(
    @InjectRepository(AnimalPhoto)
    private readonly photosRepository: Repository<AnimalPhoto>,

    @InjectRepository(Animal)
    private readonly animalsRepository: Repository<Animal>,
  ) {}

  async create(
    createAnimalPhotoDto: CreateAnimalPhotoDto,
  ): Promise<AnimalPhoto> {
    const animal = await this.animalsRepository.findOne({
      where: { id: createAnimalPhotoDto.animalId },
    });

    if (!animal) {
      throw new NotFoundException(
        `Animal ${createAnimalPhotoDto.animalId} nao encontrado`,
      );
    }

    const photo = this.photosRepository.create({
      ...createAnimalPhotoDto,
      animal,
    });

    return this.photosRepository.save(photo);
  }

  async findAll(): Promise<AnimalPhoto[]> {
    return this.photosRepository.find({ relations: ['animal'] });
  }

  async findOne(id: string): Promise<AnimalPhoto> {
    const photo = await this.photosRepository.findOne({
      where: { id },
      relations: ['animal'],
    });

    if (!photo) {
      throw new NotFoundException(`Foto ${id} nao encontrada`);
    }

    return photo;
  }

  async update(id: string, updateAnimalPhotoDto: UpdateAnimalPhotoDto) {
    const photo = await this.findOne(id);

    if (updateAnimalPhotoDto.animalId) {
      const animal = await this.animalsRepository.findOne({
        where: { id: updateAnimalPhotoDto.animalId },
      });

      if (!animal) {
        throw new NotFoundException(
          `Animal ${updateAnimalPhotoDto.animalId} nao encontrado`,
        );
      }

      photo.animal = animal;
    }

    Object.assign(photo, updateAnimalPhotoDto);

    return this.photosRepository.save(photo);
  }

  async remove(id: string) {
    const photo = await this.findOne(id);

    await this.photosRepository.remove(photo);
  }
}
