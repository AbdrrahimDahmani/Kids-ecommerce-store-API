import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from '../products.service';
import { ProductCategorie } from 'src/entities';

@Controller('filter')
export class FilterProductsController {
  /**
   *
   */
  constructor(private productService: ProductsService) {}

  @Get('/:categorie')
  filterProductByCategorie(
    @Param('categorie') categorie: string,
  ): Promise<ProductCategorie[]> {
    return this.productService.filterProductByCategorie(categorie);
  }
}
