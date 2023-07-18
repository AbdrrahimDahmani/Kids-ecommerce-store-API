import { Commande } from 'src/entities';

export class CommercialDto {
  id: string;

  nom: string;

  prenom: string;

  mail: string;

  tel: string;

  adresse: string;

  password: string;

  commandes: Commande[];
}
