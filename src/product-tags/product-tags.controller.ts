import { Controller, Get } from '@nestjs/common';
import { ProductTagsService } from './product-tags.service';
import { Product, ProductTag } from 'src/entities';

@Controller('product-tags')
export class ProductTagsController {
  /**
   *
   */
  constructor(private productTagsService: ProductTagsService) {}

  @Get()
  findAll(): Promise<ProductTag[]> {
    return this.productTagsService.findAll();
  }
}
