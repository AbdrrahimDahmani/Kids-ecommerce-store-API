import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Categorie {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  nom: string;
  @ManyToMany(() => Product, (product) => product.categories)
  products: Product[];
}
