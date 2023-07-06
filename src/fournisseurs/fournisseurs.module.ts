import { Module } from '@nestjs/common';
import { FournisseursService } from './fournisseurs.service';
import { FournisseursController } from './fournisseurs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fournisseur } from 'src/entities';
import { FournisseurRepository } from 'src/repositories/fournisseur.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Fournisseur])],
  providers: [FournisseursService, FournisseurRepository],
  controllers: [FournisseursController],
})
export class FournisseursModule {}
