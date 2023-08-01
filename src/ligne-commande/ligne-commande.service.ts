import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LigneCommandeDto } from 'src/dtos/ligneCommandeDto/ligne-commande.dto';
import { LigneCommande } from 'src/entities';
import { LigneCommandeRepository } from 'src/repositories';

@Injectable()
export class LigneCommandeService {
  /**
   *
   */
  constructor(
    @InjectRepository(LigneCommandeRepository)
    private ligneCommandeRepo: LigneCommandeRepository,
  ) {}
  async getAllLigneCommandes(): Promise<LigneCommande[]> {
    return await this.ligneCommandeRepo.getAllLigneCommandes();
  }

  async getLigneCommandeById(id: number): Promise<LigneCommande> {
    return await this.ligneCommandeRepo.getLigneCommandeById(id);
  }
  async createLignCommande(
    ligneCommandeDto: LigneCommandeDto,
  ): Promise<LigneCommande> {
    return await this.ligneCommandeRepo.createLignCommande(ligneCommandeDto);
  }
}
