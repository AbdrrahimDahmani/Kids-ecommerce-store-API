import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CommandeService } from './commande.service';
import { Commande } from 'src/entities';
import { CommandeDto } from 'src/dtos/commandeDto/commande.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('commande')
@ApiTags('Commande')
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
  getCommandeById(@Param('id') id: string) {
    return this.commandeService.getCommandeById(id);
  }

  @Post()
  createCommande(@Body() commandeDto: CommandeDto): Promise<Commande> {
    return this.commandeService.createCommande(commandeDto);
  }

  @Patch('/:id')
  updateCommande(
    @Param('id') id: string,
    @Body() commandeDto: CommandeDto,
  ): Promise<Commande> {
    return this.commandeService.updateCommande(id, commandeDto);
  }

  @Delete('/:id')
  deleteCommande(@Param('id') id: string): Promise<string> {
    return this.commandeService.deleteCommande(id);
  }
}
