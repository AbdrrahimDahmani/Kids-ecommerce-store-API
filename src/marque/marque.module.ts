import { Module } from '@nestjs/common';
import { MarqueService } from './marque.service';
import { MarqueController } from './marque.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marque } from 'src/entities';
import { MarqueRepository } from 'src/repositories';

@Module({
  imports: [TypeOrmModule.forFeature([Marque])],
  providers: [MarqueService, MarqueRepository],
  controllers: [MarqueController],
})
export class MarqueModule {}
