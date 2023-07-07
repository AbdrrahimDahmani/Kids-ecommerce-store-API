import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Categorie {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ unique: true })
  nom: string;
  @ManyToMany(() => Product, (product) => product.categories)
  products: Product[];
}
