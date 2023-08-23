import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GalerieService } from './galerie.service';

@Controller('galerie')
@ApiTags('galerie')
export class GalerieController {
  /**
   *
   */
  constructor(private readonly galerieService: GalerieService) {}
}
