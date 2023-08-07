import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductCategoriesDto } from 'src/dtos/productCategorieDto/create-product-categorie.dto';
import { Categorie, Product, ProductCategorie } from 'src/entities';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ProductCategoriesRepository extends Repository<ProductCategorie> {
  constructor(private datasource: DataSource) {
    super(ProductCategorie, datasource.createEntityManager());
  }

  async getAllProductCategories(): Promise<ProductCategorie[]> {
    return await this.find({ relations: ['product', 'categorie'] });
  }

  async postProductCategory(
    productCategorie: CreateProductCategoriesDto,
  ): Promise<ProductCategorie> {
    const { productId, categorieId } = productCategorie;

    const countCategorie = await this.datasource
      .getRepository(Categorie)
      .countBy({ id: categorieId });
    const countProduct = await this.datasource
      .getRepository(Product)
      .countBy({ id: productId });
    const productCatId = await this.getProductCategorieById(
      productId,
      categorieId,
    );

    if (countCategorie === 0 || countProduct === 0) {
      throw new NotFoundException('Categorie ou Produit non trouvé');
    } else if (productCatId) {
      throw new NotFoundException('Categorie du prouit déjà existante');
    }

    return await this.save(productCategorie);
  }

  async getProductCategorieById(
    productId: string,
    categorieId: number,
  ): Promise<ProductCategorie> {
    return await this.findOne({
      where: { productId, categorieId },
      relations: { product: true, categorie: true },
    });
  }

  async deleteProductCategory(
    productCategorieDto: CreateProductCategoriesDto,
  ): Promise<string> {
    const { productId, categorieId } = productCategorieDto;
    const productCategorie = await this.getProductCategorieById(
      productId,
      categorieId,
    );
    await this.remove(productCategorie);
    return 'Categorie Produit supprimé';
  }
}
