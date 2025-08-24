import { PartialType } from '@nestjs/mapped-types';
import { CreateAdoptionDto } from './create-adoption.dto';
import { IsUUID } from 'class-validator';

export class UpdateAdoptionDto extends PartialType(CreateAdoptionDto) {
  @IsUUID()
  animalId?: string;

  @IsUUID()
  adopterId?: string;
}
