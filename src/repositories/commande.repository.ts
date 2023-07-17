import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CommandeDto } from 'src/dtos/commandeDto/commande.dto';
import { Commande } from 'src/entities';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CommandeRepository extends Repository<Commande> {
  constructor(private datasource: DataSource) {
    super(Commande, datasource.createEntityManager());
  }
  async getAllCommandes(): Promise<Commande[]> {
    return await this.find({ relations: { user: true, commercial: true } });
  }

  async getCommandeById(commandeDto: CommandeDto): Promise<Commande> {
    const { user, dateCommande, prixTotal, tauxTva, status, commercial } =
      commandeDto;
    const newCommande = this.create({
      user,
      dateCommande,
      prixTotal,
      tauxTva,
      //add is enum for status of commande
      status,
      commercial,
    });
    return await this.save(newCommande);
  }
}
