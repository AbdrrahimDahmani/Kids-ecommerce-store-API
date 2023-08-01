import { CommandeStatus } from 'src/enum/commande-status.enum';
import { IsEnum } from 'class-validator';
import { Commercial, User } from 'src/entities';

export class CommandeDto {
  id: string;

  userId: string;

  dateCommande: Date;

  prixTotal: number;

  tauxTva: number;

  status: CommandeStatus;

  commercial: Commercial;
}
