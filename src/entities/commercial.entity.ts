import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Commande } from './commande.entity';

@Entity()
export class Commercial {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  mail: string;

  @Column()
  tel: string;

  @Column()
  adresse: string;

  @Column()
  password: string;

  @OneToMany(() => Commande, (commande) => commande.commercial)
  commandes: Commande[];
}
