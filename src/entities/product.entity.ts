import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Categorie } from './categorie.entity';
import { Marque } from './marque.entity';
import { Tag } from './tag.entity';
import { Fournisseur } from './fournisseur.entity';

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

  @Column({ nullable: true })
  image: string;

  @ManyToMany(() => Categorie)
  @JoinTable({ name: 'product_categorie' })
  categories: Categorie[];

  @ManyToOne(() => Marque, (marque) => marque.products)
  marque: Marque[];

  @ManyToMany(() => Tag, (tag) => tag.products)
  @JoinTable({
    name: 'product_tag',
    joinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
  })
  tags: Tag[];

  @ManyToOne(() => Fournisseur)
  @JoinColumn({ name: 'fournisseur_id' })
  fournisseur: Fournisseur;
}
