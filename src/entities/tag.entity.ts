import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { ProductTag } from './product-tag.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  nom: string;
  @ManyToMany(() => ProductTag, (productTag) => productTag.tag)
  tags: ProductTag[];
}
