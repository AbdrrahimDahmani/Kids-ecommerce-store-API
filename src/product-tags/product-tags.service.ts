import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

  async findAll(): Promise<ProductTag[]> {
    return await this.productTagsRepository.getAllProductTags();
  }
}
