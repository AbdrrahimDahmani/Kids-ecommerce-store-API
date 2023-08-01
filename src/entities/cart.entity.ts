import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Product } from './product.entity';
import { Commande } from './commande.entity';
import { Cupon } from './cupon.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  cart_id: string;

  @Column()
  quantity: number;

  @ManyToOne(() => User, (user) => user.carts)
  user: User;

  @ManyToOne(() => Product)
  product: Product;

  @ManyToOne(() => Commande, (commande) => commande.carts, { nullable: true })
  commande: Commande;

  @ManyToOne(() => Cupon, (cupon) => cupon.id)
  cupon: Cupon;
}
