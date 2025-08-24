import { PartialType } from '@nestjs/mapped-types';
import { CreateAdoptionRequestDto } from './create-adoption-request.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateAdoptionRequestDto extends PartialType(
  CreateAdoptionRequestDto,
) {
  @IsOptional()
  @IsEnum(['pending', 'approved', 'rejected'])
  status?: 'pending' | 'approved' | 'rejected';

  @IsOptional()
  @IsString()
  message?: string;
}
