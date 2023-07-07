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

  @Column()
  prixFournisseur: number;

  @Column()
  prix: number;

  @Column()
  tauxPromo: number;

  @Column()
  QuantiteStock: number;

  @Column()
  image: string;

  @ManyToMany(() => Categorie, (categorie) => categorie.products)
  @JoinTable({
    name: 'product_categorie',
    joinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'categorie_id',
      referencedColumnName: 'id',
    },
  })
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
