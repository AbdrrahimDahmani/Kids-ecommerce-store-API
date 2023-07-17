import { Injectable } from '@nestjs/common';
import { ProductTag } from 'src/entities';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ProductTagsRepository extends Repository<ProductTag> {
  constructor(private datasource: DataSource) {
    super(ProductTag, datasource.createEntityManager());
  }

  async getAllProductTags(): Promise<ProductTag[]> {
    return await this.find({ relations: { product: true, tag: true } });
  }

  async getProductTagById(
    productId: string,
    tagId: number,
  ): Promise<ProductTag> {
    return await this.findOne({
      where: { productId, tagId },
      relations: { product: true, tag: true },
    });
  }

  async createProductTag(
    productId: string,
    tagId: number,
  ): Promise<ProductTag> {
    const found = await this.getProductTagById(productId, tagId);
    let productTag: ProductTag;
    if (!found) {
      productTag = await this.save({ productId, tagId });
    }
    return productTag;
  }
}
