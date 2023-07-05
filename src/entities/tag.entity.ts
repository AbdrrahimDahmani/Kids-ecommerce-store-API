import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  nom: string;
  @ManyToMany(() => Product, (product) => product.tags)
  products: Product[];
}
