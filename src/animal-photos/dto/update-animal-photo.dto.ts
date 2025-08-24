import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimalPhotoDto } from './create-animal-photo.dto';
import { IsUrl, IsUUID } from 'class-validator';

export class UpdateAnimalPhotoDto extends PartialType(CreateAnimalPhotoDto) {
  @IsUUID()
  animalId?: string;

  @IsUrl()
  photoUrl?: string;
}
