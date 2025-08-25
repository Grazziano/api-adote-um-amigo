import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from './entities/animal.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalsRepository: Repository<Animal>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createAnimalDto: CreateAnimalDto) {
    const ong = await this.usersRepository.findOne({
      where: { id: createAnimalDto.ong_id },
    });

    if (!ong) {
      throw new NotFoundException(
        `ONG ${createAnimalDto.ong_id} não encontrada`,
      );
    }

    const animal = this.animalsRepository.create({ ...createAnimalDto, ong });

    return this.animalsRepository.save(animal);
  }

  findAll() {
    return `This action returns all animals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} animal`;
  }

  update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return `This action updates a #${id} animal`;
  }

  remove(id: number) {
    return `This action removes a #${id} animal`;
  }
}
