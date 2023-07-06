import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Admin {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  mail: string;

  @Column()
  password: string;
}
