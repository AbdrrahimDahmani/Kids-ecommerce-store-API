import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommandeDto } from 'src/dtos/commandeDto/commande.dto';
import { Commande } from 'src/entities';
import { CommandeRepository } from 'src/repositories';

@Injectable()
export class CommandeService {
  /**
   *
   */
  constructor(
    @InjectRepository(CommandeRepository)
    private commandeRepository: CommandeRepository,
  ) {}

  async getAllCommandes(): Promise<Commande[]> {
    return await this.commandeRepository.getAllCommandes();
  }
  async getCommandeById(id: string): Promise<Commande> {
    return await this.commandeRepository.getCommandeById(id);
  }

  async createCommande(commandeDto: CommandeDto): Promise<Commande> {
    return await this.commandeRepository.createCommande(commandeDto);
  }

  async updateCommande(
    id: string,
    commandeDto: CommandeDto,
  ): Promise<Commande> {
    return await this.commandeRepository.updateCommande(id, commandeDto);
  }

  async deleteCommande(id: string): Promise<string> {
    return await this.commandeRepository.deleteCommande(id);
  }
}
