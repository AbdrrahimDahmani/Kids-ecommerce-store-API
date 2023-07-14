import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entities';
import { ProductRepository } from 'src/repositories';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { FilterProductsController } from './products-filter/ProductsController';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductRepository, ProductsService],
  controllers: [ProductsController, FilterProductsController],
})
export class ProductsModule {}
