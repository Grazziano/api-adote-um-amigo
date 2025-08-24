import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateAdoptionRequestDto {
  @IsUUID()
  animalId: string;

  @IsUUID()
  adopterId: string;

  @IsOptional()
  @IsString()
  message?: string;
}
