import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Categorie } from './categorie.entity';
import { Marque } from './marque.entity';
import { Tag } from './tag.entity';
import { Fournisseur } from './fournisseur.entity';
import { ProductCategorie } from './product-categorie.entity';
import { ProductTag } from './product-tag.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titre: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 6, scale: 2 })
  prixFournisseur: number;

  @Column('decimal', { precision: 6, scale: 2 })
  prix: number;

  @Column()
  tauxPromo: number;

  @Column()
  quantiteStock: number;

  @Column()
  reference: string;

  @Column({ nullable: true })
  image: string;

  @OneToMany(
    () => ProductCategorie,
    (productCategorie) => productCategorie.product,
  )
  products: ProductCategorie[];

  @ManyToOne(() => Marque, (marque) => marque.products)
  marque: Marque[];

  @OneToMany(() => ProductTag, (productTag) => productTag.product)
  productTags: ProductTag[];

  @ManyToOne(() => Fournisseur)
  @JoinColumn({ name: 'fournisseur_id' })
  fournisseur: Fournisseur;
}
