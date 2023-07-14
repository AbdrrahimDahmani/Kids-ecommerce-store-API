import { Module } from '@nestjs/common';
import { ProductCategorieService } from './product-categorie.service';
import { ProductCategorieController } from './product-categorie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategorie } from 'src/entities';
import { ProductCategoriesRepository } from 'src/repositories';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategorie])],
  providers: [ProductCategorieService, ProductCategoriesRepository],
  controllers: [ProductCategorieController],
})
export class ProductCategorieModule {}
