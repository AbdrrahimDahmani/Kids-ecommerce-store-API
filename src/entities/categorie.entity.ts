import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductCategorie } from './product-categorie.entity';
import { SubCategorie } from './sub-categorie.entity';

@Entity()
export class Categorie {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ unique: true })
  nom: string;
  @Column({ nullable: true })
  image: string;
  @Column({ nullable: true })
  routerLink: string;
  @OneToMany(
    () => ProductCategorie,
    (productCategorie) => productCategorie.categorie,
  )
  public categories: ProductCategorie[];

  @OneToMany(() => SubCategorie, (subCategorie) => subCategorie.categorie)
  public subCategories: SubCategorie[];
}
