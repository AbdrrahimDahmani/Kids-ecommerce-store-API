import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from '../products.service';
import { ProductCategorie } from 'src/entities';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('filter')
@ApiTags('products')
export class FilterProductsController {
  /**
   *
   */
  constructor(private productService: ProductsService) {}

  @Get('/:routerLink')
  @ApiQuery({ name: 'limit', required: false, type: Number })
  filterProductByCategorie(
    @Param('routerLink') routerLink: string,
    @Query('limit') limit: number = Number.MAX_SAFE_INTEGER,
  ): Promise<ProductCategorie[]> {
    return this.productService.filterProductByCategorie(routerLink, limit);
  }
}
