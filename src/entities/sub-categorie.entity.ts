import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Categorie } from './categorie.entity';
import { ProductSubCategorie } from './product-sub-categories.entity';

@Entity()
export class SubCategorie {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ unique: true })
  nom: string;
  @ManyToOne(() => Categorie, (categorie) => categorie.subCategories)
  public categorie: Categorie;

  @OneToMany(
    () => ProductSubCategorie,
    (productSubCategorie) => productSubCategorie.subCategorie,
  )
  public productSubCategories: ProductSubCategorie[];
}
