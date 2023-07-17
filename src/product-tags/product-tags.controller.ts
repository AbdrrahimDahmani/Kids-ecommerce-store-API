import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductTagsService } from './product-tags.service';
import { ProductTag } from 'src/entities';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductTagDto } from 'src/dtos/productTagDto/create-product-tag.dto';

@Controller('product-tags')
@ApiTags('product tags')
export class ProductTagsController {
  /**
   *
   */
  constructor(private productTagsService: ProductTagsService) {}

  @Get()
  getAllProductTags(): Promise<ProductTag[]> {
    return this.productTagsService.getAllProductTags();
  }

  @Get('/:productId/:tagId')
  getProductTagById(
    @Param('productId') productId: string,
    @Param('tagId') tagId: number,
  ): Promise<ProductTag> {
    return this.productTagsService.getProductTagById(productId, tagId);
  }

  @Post('/')
  createProductTag(
    @Body() productTagDto: CreateProductTagDto,
  ): Promise<ProductTag> {
    return this.productTagsService.createProductTag(productTagDto);
  }

  @Delete('/:productId/:tagId')
  deleteProductTag(productId: string, tagId: number): Promise<string> {
    return this.productTagsService.deleteProductTag(productId, tagId);
  }
}
