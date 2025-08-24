import { IsUrl, IsUUID } from 'class-validator';

export class CreateAnimalPhotoDto {
  @IsUUID()
  animalId: string;

  @IsUrl()
  photoUrl: string;
}
