import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GalerieDto } from 'src/dtos/galerieDto/create-galerie.dto';
import { Galerie } from 'src/entities';
import { GalerieRepository } from 'src/repositories';

@Injectable()
export class GalerieService {
  constructor(
    @InjectRepository(GalerieRepository)
    private galerieRepo: GalerieRepository,
  ) {}
  async getGalerieByProductId(productId: string): Promise<Galerie[]> {
    return await this.galerieRepo.getGalerieByProductId(productId);
  }
  async createGalerie(galerieDto: GalerieDto): Promise<Galerie> {
    return await this.galerieRepo.createGalerie(galerieDto);
  }
}
