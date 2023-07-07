import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Marque {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  nom: string;
  @Column()
  description: string;
  @OneToMany(() => Product, (product) => product.marque)
  products: Product;
}
