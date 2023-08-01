import { Injectable, NotFoundException } from '@nestjs/common';
import { LigneCommandeDto } from 'src/dtos/ligneCommandeDto/ligne-commande.dto';
import { LigneCommande } from 'src/entities';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class LigneCommandeRepository extends Repository<LigneCommande> {
  constructor(private datasource: DataSource) {
    super(LigneCommande, datasource.createEntityManager());
  }
  async getAllLigneCommandes(): Promise<LigneCommande[]> {
    return this.find();
  }

  async getLigneCommandeById(id: number): Promise<LigneCommande> {
    const found = await this.findOneBy({ id });
    if (!found) {
      throw new NotFoundException('LigneCommande non trouvé');
    }
    return found;
  }
  async createLignCommande(
    ligneCommandeDto: LigneCommandeDto,
  ): Promise<LigneCommande> {
    const { quantiteCommande, product, commande } = ligneCommandeDto;
    const ligneCommande = this.create({
      quantiteCommande,
      product,
      commande,
    });
    await this.save(ligneCommande);
    return ligneCommande;
  }
}
