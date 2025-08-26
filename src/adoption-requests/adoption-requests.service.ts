import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdoptionRequestDto } from './dto/create-adoption-request.dto';
import { UpdateAdoptionRequestDto } from './dto/update-adoption-request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdoptionRequest } from './entities/adoption-request.entity';
import { Animal } from 'src/animals/entities/animal.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AdoptionRequestsService {
  constructor(
    @InjectRepository(AdoptionRequest)
    private readonly adoptionRequestsRepository: Repository<AdoptionRequest>,

    @InjectRepository(Animal)
    private readonly animalsRepository: Repository<Animal>,

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createAdoptionRequestDto: CreateAdoptionRequestDto) {
    const animal = await this.animalsRepository.findOne({
      where: { id: createAdoptionRequestDto.animalId },
    });

    if (!animal) {
      throw new NotFoundException(
        `Animal ${createAdoptionRequestDto.animalId} não encontrado`,
      );
    }

    const adopter = await this.usersRepository.findOne({
      where: { id: createAdoptionRequestDto.adopterId },
    });

    if (!adopter) {
      throw new NotFoundException(
        `Adopter ${createAdoptionRequestDto.adopterId} não encontrado`,
      );
    }

    const request = this.adoptionRequestsRepository.create({
      ...createAdoptionRequestDto,
      animal,
      adopter,
    });

    return this.adoptionRequestsRepository.save(request);
  }

  findAll() {
    return `This action returns all adoptionRequests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adoptionRequest`;
  }

  update(id: number, updateAdoptionRequestDto: UpdateAdoptionRequestDto) {
    return `This action updates a #${id} adoptionRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} adoptionRequest`;
  }
}
