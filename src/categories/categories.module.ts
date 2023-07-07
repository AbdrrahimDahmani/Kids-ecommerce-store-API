import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categorie } from 'src/entities';
import { CategorieRepository } from 'src/repositories';

@Module({
  imports: [TypeOrmModule.forFeature([Categorie])],
  providers: [CategoriesService, CategorieRepository],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
