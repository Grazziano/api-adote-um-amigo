import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimalPhotoDto } from './create-animal-photo.dto';

export class UpdateAnimalPhotoDto extends PartialType(CreateAnimalPhotoDto) {}
