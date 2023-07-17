import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CommandeDto } from '../commandeDto/commande.dto';

@Entity()
export class CommercialDto {
  id: string;

  nom: string;

  prenom: string;

  mail: string;

  tel: string;

  adresse: string;

  password: string;

  commandes: CommandeDto[];
}
