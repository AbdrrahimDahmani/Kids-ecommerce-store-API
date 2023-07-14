import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductCategorie } from './product-categorie.entity';

@Entity()
export class Categorie {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ unique: true })
  nom: string;
  @Column({ nullable: true })
  image: string;
  @OneToMany(
    () => ProductCategorie,
    (productCategorie) => productCategorie.categorie,
  )
  public categories: ProductCategorie[];
}
