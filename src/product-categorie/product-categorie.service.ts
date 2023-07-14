import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductCategoriesDto } from 'src/dtos/productCategorieDto/create-product-categorie.dto';
import { ProductCategorie } from 'src/entities';
import { ProductCategoriesRepository } from 'src/repositories';

@Injectable()
export class ProductCategorieService {
  /**
   *
   */
  constructor(
    @InjectRepository(ProductCategoriesRepository)
    private productCategorieRepo: ProductCategoriesRepository,
  ) {}

  async getAllProductCategories(): Promise<ProductCategorie[]> {
    return await this.productCategorieRepo.getAllProductCategories();
  }

  async getProductCategoryById(
    productId: string,
    categorieId: number,
  ): Promise<ProductCategorie> {
    return this.productCategorieRepo.getProductCategorieById(
      productId,
      categorieId,
    );
  }

  async postProductCategory(
    productCategorie: CreateProductCategoriesDto,
  ): Promise<ProductCategorie> {
    return await this.productCategorieRepo.postProductCategory(
      productCategorie,
    );
  }

  async deleteProductCategory(
    productCategoriedto: CreateProductCategoriesDto,
  ): Promise<string> {
    return this.productCategorieRepo.deleteProductCategory(productCategoriedto);
  }
}
