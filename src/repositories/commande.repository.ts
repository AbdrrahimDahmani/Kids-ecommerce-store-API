import { Injectable, NotFoundException } from '@nestjs/common';
import { CommandeDto } from 'src/dtos/commandeDto/commande.dto';
import { Commande, LigneCommande, Product } from 'src/entities';
import { CommandeStatus } from 'src/enum/commande-status.enum';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CommandeRepository extends Repository<Commande> {
  constructor(private datasource: DataSource) {
    super(Commande, datasource.createEntityManager());
  }
  async getAllCommandes(): Promise<Commande[]> {
    return await this.find({
      relations: { user: true, commercial: true },
    });
  }

  async getCommandeById(id: string): Promise<Commande> {
    const found = await this.findOneBy({ id });
    if (!found) throw new NotFoundException('Commande non trouvé');
    return found;
  }

  async createCommande(commandeDto: CommandeDto): Promise<Commande> {
    const { userId, dateCommande, prixTotal, tauxTva, commercial } =
      commandeDto;

    const newCommande = this.create({
      userId,
      dateCommande: new Date(),
      prixTotal: 0,
      tauxTva,
      status: CommandeStatus.PENDING,
      commercial,
    });

    const commande = await this.save(newCommande);
    return commande;
  }

  async updateCommande(
    id: string,
    commandeDto: CommandeDto,
  ): Promise<Commande> {
    const { userId, dateCommande, prixTotal, tauxTva, commercial } =
      commandeDto;
    const found = await this.getCommandeById(id);
    if (userId) found.userId = userId;
    if (dateCommande) found.dateCommande = dateCommande;
    if (prixTotal) found.prixTotal = prixTotal;
    if (tauxTva) found.tauxTva = tauxTva;
    if (commercial) found.commercial = commercial;
    return await this.save(found);
  }

  async deleteCommande(id: string): Promise<string> {
    const found = await this.getCommandeById(id);
    if (await this.delete(found)) return `Commande ${found.id} est supprimée`;
  }
}
