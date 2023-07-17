import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategorieDto } from 'src/dtos/categorieDto/create-categorie.dto';
import { Categorie } from 'src/entities';
import { ApiTags } from '@nestjs/swagger';

@Controller('categories')
@ApiTags('categories')
export class CategoriesController {
  /**
   *
   */
  constructor(private categoriesService: CategoriesService) {}

  @Get('')
  getAllCategories(@Query('nom') nom: string) {
    return this.categoriesService.getAllCategories(nom);
  }

  @Get('/:id')
  getCategoryById(@Param('id') id: number) {
    return this.categoriesService.getCategorieById(id);
  }

  @Post()
  createCategory(@Body() categorie: CategorieDto) {
    return this.categoriesService.createCategorie(categorie);
  }

  @Post('/initialize')
  initializeCategorie(): Promise<Categorie> {
    return this.categoriesService.initializeCategorie();
  }

  @Patch('/:id')
  updateCategory(@Query('id') id: number, @Body() categorie: CategorieDto) {
    return this.categoriesService.updateCategorie(id, categorie);
  }

  @Delete('/:id')
  deleteCategory(@Param('id') id: number) {
    return this.categoriesService.deleteCategorie(id);
  }
}
