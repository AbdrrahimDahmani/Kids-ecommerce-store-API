import { Module } from '@nestjs/common';
import { CommandeService } from './commande.service';
import { CommandeController } from './commande.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commande } from 'src/entities';
import { CommandeRepository } from 'src/repositories';

@Module({
  imports: [TypeOrmModule.forFeature([Commande])],
  providers: [CommandeService, CommandeRepository],
  controllers: [CommandeController],
})
export class CommandeModule {}
