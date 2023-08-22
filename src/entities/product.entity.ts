import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Categorie } from './categorie.entity';
import { Marque } from './marque.entity';
import { Fournisseur } from './fournisseur.entity';
import { ProductCategorie } from './product-categorie.entity';
import { ProductTag } from './product-tag.entity';
import { Cart } from './cart.entity';
import { ProductSubCategorie } from './product-sub-categories.entity';
import { SubCategorie } from './sub-categorie.entity';
import { Galerie } from './galerie.entity';

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
  productsCategorie: ProductCategorie[];

  @ManyToOne(() => Marque, (marque) => marque.products)
  marque: Marque[];

  @OneToMany(() => ProductTag, (productTag) => productTag.product)
  productTags: ProductTag[];

  @ManyToOne(() => Fournisseur)
  @JoinColumn({ name: 'fournisseur_id' })
  fournisseur: Fournisseur;

  @OneToMany(() => Cart, (cart) => cart.product)
  cart: Cart[];

  @OneToMany(
    () => ProductSubCategorie,
    (productSubCategorie) => productSubCategorie.product,
  )
  subCategorie: SubCategorie[];

  @OneToMany(() => Galerie, (galerie) => galerie.product)
  galeries: Galerie[];
}
