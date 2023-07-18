import { CommandeStatus } from 'src/enum/commande-status.enum';
import { IsEnum } from 'class-validator';
import { Commercial, User } from 'src/entities';

export class CommandeDto {
  id: string;

  user: User;

  dateCommande: Date;

  prixTotal: number;

  tauxTva: number;

  @IsEnum(CommandeStatus)
  status: CommandeStatus;

  commercial: Commercial;
}
