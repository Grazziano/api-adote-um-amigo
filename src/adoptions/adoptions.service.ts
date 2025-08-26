import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAdoptionDto } from './dto/create-adoption.dto';
import { UpdateAdoptionDto } from './dto/update-adoption.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Adoption } from './entities/adoption.entity';
import { Animal } from 'src/animals/entities/animal.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AdoptionsService {
  constructor(
    @InjectRepository(Adoption)
    private readonly adoptionsRepository: Repository<Adoption>,

    @InjectRepository(Animal)
    private readonly animalsRepository: Repository<Animal>,

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createAdoptionDto: CreateAdoptionDto): Promise<Adoption> {
    const animal = await this.animalsRepository.findOne({
      where: { id: createAdoptionDto.animalId },
    });

    if (!animal) {
      throw new NotFoundException(
        `Animal ${createAdoptionDto.animalId} não encontrado`,
      );
    }

    if (animal.status !== 'available') {
      throw new BadRequestException(
        `Animal ${createAdoptionDto.animalId} não disponivel para adoção`,
      );
    }

    const adopter = await this.usersRepository.findOne({
      where: { id: createAdoptionDto.adopterId },
    });

    if (!adopter) {
      throw new NotFoundException(
        `Adopter ${createAdoptionDto.adopterId} não encontrado`,
      );
    }

    // Atualiza status do animal para adotado
    animal.status = 'adopted';

    await this.adoptionsRepository.save(animal);

    const adoption = this.adoptionsRepository.create({
      ...createAdoptionDto,
      animal,
      adopter,
    });

    return this.adoptionsRepository.save(adoption);
  }

  async findAll(): Promise<Adoption[]> {
    return this.adoptionsRepository.find({ relations: ['animal', 'adopter'] });
  }

  async findOne(id: string): Promise<Adoption> {
    const adoption = await this.adoptionsRepository.findOne({
      where: { id },
      relations: ['animal', 'adopter'],
    });

    if (!adoption) {
      throw new NotFoundException(`Adoption ${id} não encontrada`);
    }

    return adoption;
  }

  async update(
    id: string,
    updateAdoptionDto: UpdateAdoptionDto,
  ): Promise<Adoption> {
    const adoption = await this.findOne(id);

    if (updateAdoptionDto.animalId) {
      const animal = await this.animalsRepository.findOne({
        where: { id: updateAdoptionDto.animalId },
      });
      if (!animal)
        throw new NotFoundException(
          `Animal ${updateAdoptionDto.animalId} não encontrado`,
        );
      adoption.animal = animal;
    }

    if (updateAdoptionDto.adopterId) {
      const adotante = await this.usersRepository.findOne({
        where: { id: updateAdoptionDto.adopterId },
      });
      if (!adotante)
        throw new NotFoundException(
          `Adotante ${updateAdoptionDto.adopterId} não encontrado`,
        );
      adoption.adopter = adotante;
    }

    return this.adoptionsRepository.save(adoption);
  }

  async remove(id: string): Promise<void> {
    const adoption = await this.findOne(id);
    await this.adoptionsRepository.remove(adoption);
  }
}
