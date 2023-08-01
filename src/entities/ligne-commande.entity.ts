import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { Commande } from './commande.entity';

@Entity()
export class LigneCommande {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantiteCommande: number;

  @ManyToOne(() => Product)
  product: Product;

  @ManyToOne(() => Commande)
  commande: Commande;
}
