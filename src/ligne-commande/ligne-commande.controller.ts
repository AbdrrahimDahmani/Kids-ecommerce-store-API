import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LigneCommandeService } from './ligne-commande.service';
import { LigneCommandeDto } from 'src/dtos/ligneCommandeDto/ligne-commande.dto';
import { LigneCommande } from 'src/entities';
import { ApiTags } from '@nestjs/swagger';

@Controller('ligne-commande')
@ApiTags('ligne-commande')
export class LigneCommandeController {
  /**
   *
   */
  constructor(private readonly ligneCommandeService: LigneCommandeService) {}

  @Get()
  async getAllLigneCommandes(): Promise<LigneCommande[]> {
    return await this.ligneCommandeService.getAllLigneCommandes();
  }
  @Get(':id')
  async getLigneCommandeById(@Param('id') id: number): Promise<LigneCommande> {
    return await this.ligneCommandeService.getLigneCommandeById(id);
  }
  @Post()
  async createLignCommande(
    @Body() ligneCommandeDto: LigneCommandeDto,
  ): Promise<LigneCommande> {
    return await this.ligneCommandeService.createLignCommande(ligneCommandeDto);
  }
}
