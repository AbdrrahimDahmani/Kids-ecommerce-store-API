import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Fournisseur {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nom: string;

  @Column({ unique: true })
  email: string;

  @Column()
  adresse: string;

  @Column()
  tel: string;
}
