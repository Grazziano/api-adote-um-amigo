import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  Min,
} from 'class-validator';

export class CreateAnimalDto {
  @IsString()
  @Length(2, 150)
  name: string;

  @IsEnum(['dog', 'cat', 'other'])
  species: 'dog' | 'cat' | 'other';

  @IsOptional()
  @IsString()
  breed?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  age?: number;

  @IsEnum(['male', 'female'])
  sex: 'male' | 'female';

  @IsEnum(['small', 'medium', 'large'])
  size: 'small' | 'medium' | 'large';

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(['available', 'adopted', 'in progress'])
  status?: 'available' | 'adopted' | 'in progress';

  @IsUUID()
  ong_id: string;
}
