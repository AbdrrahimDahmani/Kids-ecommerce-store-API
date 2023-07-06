import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Fournisseur } from 'src/entities';
import { FournisseursService } from './fournisseurs.service';
import { FournisseurDto } from 'src/dtos/createFournisseur';

@Controller('fournisseurs')
export class FournisseursController {
  /**
   *
   */
  constructor(private fournisseurService: FournisseursService) {}
  @Get()
  getAllFournisseurs(): Promise<Fournisseur[]> {
    return this.fournisseurService.getAllFournisseurs();
  }

  @Get('/:id')
  getFournisseurById(@Param('id') id: string): Promise<Fournisseur> {
    return this.fournisseurService.getFournisseurById(id);
  }

  @Post()
  createFournisseur(
    @Body() fournisseurDto: FournisseurDto,
  ): Promise<Fournisseur> {
    return this.fournisseurService.createFournisseur(fournisseurDto);
  }

  @Patch('/:id')
  updateFournisseur(
    @Param('id')
    id: string,
    @Body()
    fournisseurDto: FournisseurDto,
  ): Promise<Fournisseur> {
    return this.fournisseurService.updateFournisseur(id, fournisseurDto);
  }

  @Delete('/:id')
  deleteFournisseur(@Param('id') id: string): Promise<string> {
    return this.fournisseurService.deleteFournisseur(id);
  }
}
