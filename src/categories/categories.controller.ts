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
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('categories')
@ApiTags('categories')
export class CategoriesController {
  /**
   *
   */
  constructor(private categoriesService: CategoriesService) {}

  @Get('')
  @ApiQuery({ name: 'nom', required: false, type: String })
  getAllCategories(@Query('nom') nom: string, @Query('limit') limit: number) {
    return this.categoriesService.getAllCategories(nom, limit);
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
