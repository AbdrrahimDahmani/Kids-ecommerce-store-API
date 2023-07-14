import { Injectable } from '@nestjs/common';
import { Product, ProductTag } from 'src/entities';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ProductTagsRepository extends Repository<ProductTag> {
  constructor(private datasource: DataSource) {
    super(ProductTag, datasource.createEntityManager());
  }

  async getAllProductTags(): Promise<ProductTag[]> {
    return await this.find({ relations: { product: true, tag: true } });
  }
}
