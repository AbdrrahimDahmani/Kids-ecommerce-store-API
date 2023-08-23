import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Galerie {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ nullable: true })
  image: string;
  @Column({ nullable: true })
  couleur: string;
  @ManyToOne(() => Product, (product) => product.galeries)
  product: Product;
}
