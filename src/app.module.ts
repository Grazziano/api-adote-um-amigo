import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AnimalsModule } from './animals/animals.module';
import { AnimalPhotosModule } from './animal-photos/animal-photos.module';
import { AdoptionsModule } from './adoptions/adoptions.module';

@Module({
  imports: [UsersModule, AnimalsModule, AnimalPhotosModule, AdoptionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
