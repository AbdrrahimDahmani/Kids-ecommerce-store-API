import { Injectable } from '@nestjs/common';
import { CreateProductTagDto } from 'src/dtos/productTagDto/create-product-tag.dto';
import { Product, ProductTag, Tag } from 'src/entities';
import { DataSource, ILike, Repository } from 'typeorm';

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
    productTagDto: CreateProductTagDto,
  ): Promise<ProductTag> {
    const { productId, tagName } = productTagDto;
    let productTag: ProductTag;
    const tagRepository = this.datasource.getRepository(Tag);
    const findTag = await tagRepository.findOneBy({ nom: ILike(tagName) });
    const findProduct = await this.datasource
      .getRepository(Product)
      .findOneBy({ id: productId });
    if (findProduct) {
      if (findTag) {
        const tagId = findTag.id;
        const found = await this.getProductTagById(productId, tagId);
        if (!found) {
          productTag = await this.save({ productId, tagId });
        }
      } else {
        const createTag = await tagRepository.save({ nom: tagName });
        const tagId = createTag.id;
        productTag = await this.save({ productId, tagId });
      }
    }

    return productTag;
  }

  async deleteProductTag(productId: string, tagId: number): Promise<string> {
    const productTag = await this.getProductTagById(productId, tagId);
    const deleted = await this.delete(productTag);
    if (deleted) {
      return 'Product tag deleted';
    }
  }
}
