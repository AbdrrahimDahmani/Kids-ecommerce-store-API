import { Module } from '@nestjs/common';
import { GalerieService } from './galerie.service';
import { GalerieController } from './galerie.controller';
import { Galerie } from 'src/entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GalerieRepository } from 'src/repositories';

@Module({
  imports: [TypeOrmModule.forFeature([Galerie])],
  providers: [GalerieService, GalerieRepository],
  controllers: [GalerieController],
})
export class GalerieModule {}
