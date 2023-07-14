import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductCategorieService } from './product-categorie.service';
import { ProductCategorie } from 'src/entities';
import { CreateProductCategoriesDto } from 'src/dtos/productCategorieDto/create-product-categorie.dto';

@Controller('product-categorie')
export class ProductCategorieController {
  /**
   *
   */
  constructor(private productCategorieService: ProductCategorieService) {}

  @Get('')
  getAllProductCategories(): Promise<ProductCategorie[]> {
    return this.productCategorieService.getAllProductCategories();
  }

  @Get('/:productId/:categorieId')
  getProductCategoryById(
    @Param('productId') productId: string,
    @Param('categorieId') categorieId: number,
  ): Promise<ProductCategorie> {
    return this.productCategorieService.getProductCategoryById(
      productId,
      categorieId,
    );
  }
  @Post('')
  createProductCategory(
    @Body() productCategorie: CreateProductCategoriesDto,
  ): Promise<ProductCategorie> {
    return this.productCategorieService.postProductCategory(productCategorie);
  }

  @Delete('')
  deleteProductCategory(
    @Body() productCategorie: CreateProductCategoriesDto,
  ): Promise<string> {
    return this.productCategorieService.deleteProductCategory(productCategorie);
  }
}
