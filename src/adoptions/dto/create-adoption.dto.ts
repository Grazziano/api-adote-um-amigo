import { IsUUID } from 'class-validator';

export class CreateAdoptionDto {
  @IsUUID()
  animalId: string;

  @IsUUID()
  adopterId: string;
}
