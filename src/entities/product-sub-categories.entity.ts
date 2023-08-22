import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Product } from './product.entity';
import { SubCategorie } from './sub-categorie.entity';

@Entity()
export class ProductSubCategorie {
  @PrimaryColumn()
  public productId: string;

  @PrimaryColumn()
  public subCategorieId: number;

  @ManyToOne(() => Product, (product) => product.subCategorie)
  public product: Product;

  @ManyToOne(() => SubCategorie, (categorie) => categorie.productSubCategories)
  public subCategorie: SubCategorie;
}
