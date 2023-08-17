import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categorie } from './categorie.entity';

@Entity()
export class SubCategorie {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ unique: true })
  nom: string;
  @ManyToOne(() => Categorie, (categorie) => categorie.subCategories)
  public categorie: Categorie;
}
