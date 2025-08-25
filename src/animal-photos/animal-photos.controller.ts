import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnimalPhotosService } from './animal-photos.service';
import { CreateAnimalPhotoDto } from './dto/create-animal-photo.dto';
import { UpdateAnimalPhotoDto } from './dto/update-animal-photo.dto';

@Controller('animal-photos')
export class AnimalPhotosController {
  constructor(private readonly animalPhotosService: AnimalPhotosService) {}

  @Post()
  create(@Body() createAnimalPhotoDto: CreateAnimalPhotoDto) {
    return this.animalPhotosService.create(createAnimalPhotoDto);
  }

  @Get()
  findAll() {
    return this.animalPhotosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalPhotosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnimalPhotoDto: UpdateAnimalPhotoDto,
  ) {
    return this.animalPhotosService.update(id, updateAnimalPhotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalPhotosService.remove(id);
  }
}
