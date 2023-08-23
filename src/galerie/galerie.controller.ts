import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GalerieService } from './galerie.service';
import { Galerie } from 'src/entities';
import { GalerieDto } from 'src/dtos/galerieDto/create-galerie.dto';

@Controller('galerie')
@ApiTags('galerie')
export class GalerieController {
  /**
   *
   */
  constructor(private readonly galerieService: GalerieService) {}

  @Get('/:id')
  getGalerieByProductId(@Param('id') id: string): Promise<Galerie[]> {
    return this.galerieService.getGalerieByProductId(id);
  }

  @Post()
  createGalerie(@Body() galerieDto: GalerieDto): Promise<Galerie> {
    return this.galerieService.createGalerie(galerieDto);
  }
}
