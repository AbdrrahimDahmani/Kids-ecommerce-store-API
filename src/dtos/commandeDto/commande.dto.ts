import { CommandeStatus } from 'src/enum/commande-status.enum';
import { UserDto } from '../userDto/createUser.dto';
import { CommercialDto } from '../commercialDto/create-commercial.dto';

export class CommandeDto {
  id: string;

  user: UserDto;

  dateCommande: Date;

  prixTotal: number;

  tauxTva: number;

  status: CommandeStatus;

  commercial: CommercialDto;
}
