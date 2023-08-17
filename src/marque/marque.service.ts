import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MarqueDto } from 'src/dtos/marqueDto/create-marque.dto';
import { UpdateMarqueDto } from 'src/dtos/marqueDto/update-marque.dto';
import { Marque } from 'src/entities';
import { MarqueRepository } from 'src/repositories';

@Injectable()
export class MarqueService {
  /**
   *
   */
  constructor(
    @InjectRepository(MarqueRepository) private marqueRepo: MarqueRepository,
  ) {}

  async getAllMarques(search: string, limit: number): Promise<Marque[]> {
    return await this.marqueRepo.getAllMarques(search, limit);
  }

  async getMarqueById(id: number): Promise<Marque> {
    return await this.marqueRepo.getMarqueById(id);
  }

  async createMarque(marque: MarqueDto): Promise<Marque> {
    return await this.marqueRepo.createMarque(marque);
  }

  async updateMarque(id: number, marque: UpdateMarqueDto): Promise<Marque> {
    return await this.marqueRepo.updateMarque(id, marque);
  }

  async deleteMarque(id: number): Promise<string> {
    return await this.marqueRepo.deleteMarque(id);
  }
}
