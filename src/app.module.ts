import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AnimalsModule } from './animals/animals.module';
import { AnimalPhotosModule } from './animal-photos/animal-photos.module';
import { AdoptionsModule } from './adoptions/adoptions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AdoptionRequestsModule } from './adoption-requests/adoption-requests.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Carrega as variáveis de ambiente
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    AnimalsModule,
    AnimalPhotosModule,
    AdoptionsModule,
    AdoptionRequestsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
