import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Product } from './product.entity';
import { Tag } from './tag.entity';

@Entity({ name: 'product_tags' })
export class ProductTag {
  @PrimaryColumn()
  public productId: string;

  @PrimaryColumn()
  public categorieId: number;
  @ManyToOne(() => Product, (product) => product.products)
  public product: Product;

  @ManyToOne(() => Tag, (tag) => tag.tags)
  public tag: Tag;
}
