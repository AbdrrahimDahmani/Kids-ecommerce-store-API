import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Categorie } from './categorie.entity';
import { Product } from './product.entity';

@Entity({ name: 'product_categories' })
export class ProductCategorie {
  @PrimaryColumn()
  public productId: string;

  @PrimaryColumn()
  public categorieId: number;
  @ManyToOne(() => Product, (product) => product.productsCategorie)
  public product: Product;

  @ManyToOne(() => Categorie, (categorie) => categorie.categories)
  public categorie: Categorie;
}
