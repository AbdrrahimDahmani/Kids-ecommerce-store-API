import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { CommandeService } from './commande.service';
import { Commande } from 'src/entities';
import { CommandeDto } from 'src/dtos/commandeDto/commande.dto';

@Controller('commande')
export class CommandeController {
  /**
   *
   */
  constructor(private commandeService: CommandeService) {}

  @Get()
  getAllCommandes(): Promise<Commande[]> {
    return this.commandeService.getAllCommandes();
  }

  @Get('/:id')
  getCommandeById(id: string) {
    return this.commandeService.getCommandeById(id);
  }

  @Post()
  createCommande(commandeDto: CommandeDto): Promise<Commande> {
    return this.commandeService.createCommande(commandeDto);
  }

  @Patch('/:id')
  updateCommande(id: string, commandeDto: CommandeDto): Promise<Commande> {
    return this.commandeService.updateCommande(id, commandeDto);
  }

  @Delete('/:id')
  deleteCommande(id: string): Promise<string> {
    return this.commandeService.deleteCommande(id);
  }
}
