import { Module } from '@nestjs/common';
import { AdoptionRequestsService } from './adoption-requests.service';
import { AdoptionRequestsController } from './adoption-requests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdoptionRequest } from './entities/adoption-request.entity';
import { Animal } from 'src/animals/entities/animal.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdoptionRequest, Animal, User])],
  controllers: [AdoptionRequestsController],
  providers: [AdoptionRequestsService],
})
export class AdoptionRequestsModule {}
