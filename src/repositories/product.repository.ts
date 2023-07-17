import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { FilterProductDto } from 'src/dtos/productDto/filter-product.dto';
import { ProductDto } from 'src/dtos/productDto/createProduct.dto';
import { UpdateProductDto } from 'src/dtos/productDto/update-product.dto';
import { Categorie, ProductCategorie } from 'src/entities';

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

    const products = query
      .innerJoinAndSelect('product.fournisseur', 'fournisseur')
      .innerJoinAndSelect('product.marque', 'marque')
      .getMany();

    return products;
  }

  async getProductById(id: string): Promise<Product> {
    const found = await this.findOne({
      relations: ['fournisseur', 'marque'],
      where: { id },
    });
    if (!found)
      throw new NotFoundException(`Produit avec l'id :  ${id} est non trouvé`);
    return found;
  }

  async createProduct(productDto: ProductDto): Promise<Product> {
    const addCategorie = this.datasource.getRepository(ProductCategorie);

    const {
      titre,
      description,
      prixFournisseur,
      prix,
      tauxPromo,
      quantiteStock,
      image,
      marque,
      categories,
      fournisseur,
      reference,
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
      reference,
    });
    const createdProduct = await this.save(newProduct);

    if (categories) {
      try {
        categories.map(async (cat) => {
          const categorie = await this.datasource
            .getRepository(Categorie)
            .countBy({ id: Number(cat) });

          if (categorie > 0) {
            const productCategorie = addCategorie.create({
              productId: createdProduct.id,
              categorieId: Number(cat),
            });
            await addCategorie.save(productCategorie);
          }
        });
      } catch (error) {
        throw new UnauthorizedException(`can't create product`);
      }
    } else {
      const categorie = await this.datasource
        .getRepository(Categorie)
        .findOneBy({ nom: 'Uncategorized' });
      const productCategorie = addCategorie.create({
        productId: createdProduct.id,
        categorieId: categorie.id,
      });
      await addCategorie.save(productCategorie);
    }

    return createdProduct;
  }

  async updateProduct(
    id: string,
    productDto: UpdateProductDto,
  ): Promise<Product> {
    const {
      titre,
      description,
      tauxPromo,
      quantiteStock,
      image,
      fournisseur,
      prixFournisseur,
      prix,
      marque,
      reference,
    } = productDto;
    const product = await this.getProductById(id);
    if (titre) product.titre = titre;
    if (description) product.description = description;
    if (tauxPromo) product.tauxPromo = tauxPromo;
    if (quantiteStock) product.quantiteStock = quantiteStock;
    if (image) product.image = image;
    if (fournisseur) product.fournisseur = fournisseur;
    if (prixFournisseur) product.prixFournisseur = prixFournisseur;
    if (prix) product.prix = prix;
    if (marque) product.marque = marque;
    if (reference) product.reference = reference;
    await this.save(product);
    return product;
  }

  async deleteProduct(id: string): Promise<string> {
    const found = await this.getProductById(id);
    try {
      await this.remove(found);
      return `Produit avec l'id: ${id} est supprimer`;
    } catch (error) {
      throw new UnauthorizedException(`Produit n'est pas supprimer`);
    }
  }

  async filterProductByCategorie(nom: string): Promise<ProductCategorie[]> {
    const getCategorie = await this.datasource
      .getRepository(Categorie)
      .createQueryBuilder('categorie')
      .where('categorie.nom = :nom', { nom })
      .getOne();

    const idCategorie = getCategorie.id;
    const productsCategorieRepo =
      this.datasource.getRepository(ProductCategorie);

    const result = await productsCategorieRepo.find({
      where: { categorieId: idCategorie },
      relations: { product: true },
    });
    console.log(result);
    return result;
  }
}
