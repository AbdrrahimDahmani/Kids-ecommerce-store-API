import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { FilterProductDto } from 'src/dtos/productDto/filter-product.dto';
import { ProductDto } from 'src/dtos/productDto/createProduct.dto';

@Injectable()
export class ProductRepository extends Repository<Product> {
  constructor(private datasource: DataSource) {
    super(Product, datasource.createEntityManager());
  }

  async getAllProducts(filterProduct: FilterProductDto): Promise<Product[]> {
    const { search } = filterProduct;

    const query = this.createQueryBuilder('product');

    if (search)
      query.andWhere(
        'Lower(product.titre) LIKE :search or Lower(product.description) LIKE :search',
        {
          search: `%${search.toLowerCase()}%`,
        },
      );

    const products = await query.getMany();

    return products;
  }

  async getProductById(id: string): Promise<Product> {
    const found = await this.findOne({ where: { id } });
    if (!found)
      throw new NotFoundException(`Produit avec l'id :  ${id} est non trouvé`);
    return found;
  }

  async createProduct(productDto: ProductDto): Promise<Product> {
    const {
      titre,
      description,
      prixFournisseur,
      prix,
      tauxPromo,
      quantiteStock,
      image,
      marque,
      fournisseur,
    } = productDto;
    const newProduct = this.create({
      titre,
      description,
      tauxPromo,
      quantiteStock,
      image,
      fournisseur,
      prixFournisseur,
      prix,
      marque,
    });
    return await this.save(newProduct);
  }
}
