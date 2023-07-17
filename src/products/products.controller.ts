import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { FilterProductDto } from 'src/dtos/productDto/filter-product.dto';
import { Categorie, Product, ProductCategorie } from 'src/entities';
import { ProductDto } from 'src/dtos/productDto/createProduct.dto';
import { UpdateProductDto } from 'src/dtos/productDto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  /**
   *
   */
  constructor(private productService: ProductsService) {}

  @Get('/all')
  getAllProduct(@Query() filterProduct: FilterProductDto): Promise<Product[]> {
    return this.productService.getAllProducts(filterProduct);
  }

  @Get('/:id')
  getProductById(@Param('id') id: string): Promise<Product> {
    return this.productService.getProductById(id);
  }

  @Post()
  createProduct(@Body() productDto: ProductDto): Promise<Product> {
    return this.productService.createProduct(productDto);
  }
  @Delete('/:id')
  deleteProduct(@Param('id') id: string): Promise<string> {
    return this.productService.deleteProduct(id);
  }

  @Patch('/:id')
  updateProduct(@Param('id') id: string, @Body() productDto: UpdateProductDto) {
    return this.productService.updateProduct(id, productDto);
  }
}
