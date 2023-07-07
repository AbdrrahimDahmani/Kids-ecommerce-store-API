import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FournisseurDto } from 'src/dtos/fournisseurDto/createFournisseur';
import { UpdateFournisseurDto } from 'src/dtos/fournisseurDto/update-fournisseur.dto';
import { Fournisseur } from 'src/entities';
import { FournisseurRepository } from 'src/repositories';

@Injectable()
export class FournisseursService {
  constructor(
    @InjectRepository(FournisseurRepository)
    private fournisseurRepo: FournisseurRepository,
  ) {}

  async getAllFournisseurs(): Promise<Fournisseur[]> {
    return await this.fournisseurRepo.find();
  }

  async getFournisseurById(id: string): Promise<Fournisseur> {
    return await this.fournisseurRepo.getFournisseurById(id);
  }

  async createFournisseur(
    fournisseurDto: FournisseurDto,
  ): Promise<Fournisseur> {
    return this.fournisseurRepo.createFournisseur(fournisseurDto);
  }
  async updateFournisseur(
    id: string,
    fournisseurDto: UpdateFournisseurDto,
  ): Promise<Fournisseur> {
    return this.fournisseurRepo.updateFournisseur(id, fournisseurDto);
  }

  async deleteFournisseur(id: string): Promise<string> {
    return this.fournisseurRepo.deleteFournisseur(id);
  }
}
