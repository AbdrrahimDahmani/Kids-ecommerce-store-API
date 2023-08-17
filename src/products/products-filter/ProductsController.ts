import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from '../products.service';
import { ProductCategorie } from 'src/entities';
import { ApiTags } from '@nestjs/swagger';

@Controller('filter')
@ApiTags('products')
export class FilterProductsController {
  /**
   *
   */
  constructor(private productService: ProductsService) {}

  @Get('/:categorie')
  filterProductByCategorie(
    @Param('categorie') categorie: string,
    @Query('limit') limit: number = Number.MAX_SAFE_INTEGER,
  ): Promise<ProductCategorie[]> {
    return this.productService.filterProductByCategorie(categorie, limit);
  }
}
