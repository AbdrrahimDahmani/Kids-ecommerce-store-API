import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { FilterProductDto } from 'src/dtos/productDto/filter-product.dto';
import { Product } from 'src/entities';
import { ProductDto } from 'src/dtos/productDto/createProduct.dto';

@Controller('products')
export class ProductsController {
  /**
   *
   */
  constructor(private productService: ProductsService) {}

  @Get('')
  getAllProduct(@Query() filterProduct: FilterProductDto): Promise<Product[]> {
    return this.productService.getAllProducts(filterProduct);
  }
  @Post()
  createProduct(@Body() productDto: ProductDto): Promise<Product> {
    return this.productService.createProduct(productDto);
  }
}
