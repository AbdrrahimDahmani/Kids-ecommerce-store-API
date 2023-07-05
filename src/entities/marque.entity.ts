import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Marque {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  nom: string;
  @Column()
  description: string;
  @ManyToOne(() => Product, (product) => product.marque)
  products: Product[];
}
