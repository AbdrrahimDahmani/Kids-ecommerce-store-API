import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { FournisseurDto } from 'src/dtos/fournisseurDto/createFournisseur';
import { UpdateFournisseurDto } from 'src/dtos/fournisseurDto/update-fournisseur.dto';
import { Fournisseur } from 'src/entities';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class FournisseurRepository extends Repository<Fournisseur> {
  constructor(private datasource: DataSource) {
    super(Fournisseur, datasource.createEntityManager());
  }

  async getFournisseurById(id: string): Promise<Fournisseur> {
    const fournisseur = await this.findOne({ where: { id } });
    if (!fournisseur) throw new NotFoundException('Utilisateur not found');
    return fournisseur;
  }

  async createFournisseur(
    fournisseurDto: FournisseurDto,
  ): Promise<Fournisseur> {
    const { nom, email, adresse, tel } = fournisseurDto;
    this.create({ nom, email, adresse, tel });
    try {
      return await this.save(fournisseurDto);
    } catch (error) {
      if (error.code === '23505')
        throw new ConflictException('Email exist deja');
      else throw new InternalServerErrorException();
    }
  }

  async updateFournisseur(
    id: string,
    fournisseurDto: UpdateFournisseurDto,
  ): Promise<Fournisseur> {
    const { nom, email, adresse, tel } = fournisseurDto;
    const fournisseur = await this.getFournisseurById(id);
    if (nom) fournisseur.nom = nom;
    if (email) fournisseur.email = email;
    if (adresse) fournisseur.adresse = adresse;
    if (tel) fournisseur.tel = tel;
    return await this.save(fournisseur);
  }

  async deleteFournisseur(id: string): Promise<string> {
    const fournisseur = await this.getFournisseurById(id);
    if (await this.remove(fournisseur))
      return `Fournisseur avec l'id: ${id} est supprimé`;
  }
}
