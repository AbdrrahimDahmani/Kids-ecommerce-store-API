import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductTagDto } from 'src/dtos/productTagDto/create-product-tag.dto';
import { ProductTag } from 'src/entities';
import { ProductTagsRepository } from 'src/repositories/product-tags.repository';

@Injectable()
export class ProductTagsService {
  /**
   *
   */
  constructor(
    @InjectRepository(ProductTagsRepository)
    private productTagsRepository: ProductTagsRepository,
  ) {}

  async getAllProductTags(): Promise<ProductTag[]> {
    return await this.productTagsRepository.getAllProductTags();
  }

  async getProductTagById(
    productId: string,
    tagId: number,
  ): Promise<ProductTag> {
    return await this.productTagsRepository.getProductTagById(productId, tagId);
  }

  async createProductTag(
    productTagDto: CreateProductTagDto,
  ): Promise<ProductTag> {
    return this.productTagsRepository.createProductTag(productTagDto);
  }

  async deleteProductTag(productId: string, tagId: number): Promise<string> {
    return await this.productTagsRepository.deleteProductTag(productId, tagId);
  }
}
