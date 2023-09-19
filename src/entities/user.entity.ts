import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Commande } from './commande.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  tel: string;

  @Column()
  adresse: string;

  @Column()
  ville: string;

  @Column()
  email: string;

  @OneToMany(() => Commande, (commande) => commande.user)
  commandes: Commande[];
}
