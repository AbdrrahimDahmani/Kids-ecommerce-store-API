import { Controller, Get, Post } from '@nestjs/common';
import { ProductTagsService } from './product-tags.service';
import { ProductTag } from 'src/entities';
import { ApiTags } from '@nestjs/swagger';

@Controller('product-tags')
@ApiTags('product tags')
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
