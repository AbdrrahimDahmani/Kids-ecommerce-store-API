import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cart } from './cart.entity';

@Entity()
export class Cupon {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  discount_percent: number;
  @Column()
  active: boolean;
  @Column()
  expiration_date: Date;

  @Column()
  created_at: Date;

  @OneToMany(() => Cart, (cart) => cart.cupon)
  cart: Cart;
}
