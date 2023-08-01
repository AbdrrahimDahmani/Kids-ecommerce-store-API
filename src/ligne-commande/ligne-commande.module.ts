import { Module } from '@nestjs/common';
import { LigneCommandeService } from './ligne-commande.service';
import { LigneCommandeController } from './ligne-commande.controller';
import { LigneCommandeRepository } from 'src/repositories';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LigneCommande } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([LigneCommande])],
  providers: [LigneCommandeService, LigneCommandeRepository],
  controllers: [LigneCommandeController],
})
export class LigneCommandeModule {}
