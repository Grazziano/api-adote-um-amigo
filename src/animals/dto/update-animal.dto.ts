import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimalDto } from './create-animal.dto';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  Min,
} from 'class-validator';

export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {
  @IsOptional()
  @IsString()
  @Length(2, 150)
  name?: string;

  @IsOptional()
  @IsEnum(['dog', 'cat', 'other'])
  species?: 'dog' | 'cat' | 'other';

  @IsOptional()
  @IsString()
  breed?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  age?: number;

  @IsOptional()
  @IsEnum(['male', 'female'])
  sex?: 'male' | 'female';

  @IsOptional()
  @IsEnum(['small', 'medium', 'large'])
  size?: 'small' | 'medium' | 'large';

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(['available', 'adopted', 'in progress'])
  status?: 'available' | 'adopted' | 'in progress';

  @IsOptional()
  @IsUUID()
  ong_id?: string;
}
