import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MarqueService } from './marque.service';
import { Marque } from 'src/entities';
import { MarqueDto } from 'src/dtos/marqueDto/create-marque.dto';
import { UpdateMarqueDto } from 'src/dtos/marqueDto/update-marque.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('marque')
@ApiTags('marque')
export class MarqueController {
  /**
   *
   */
  constructor(private marqueService: MarqueService) {}

  @Get('')
  @ApiQuery({ name: 'search', required: false, type: String })
  getMarques(@Query('search') search: string): Promise<Marque[]> {
    return this.marqueService.getAllMarques(search);
  }

  @Get('/:id')
  getMarqueById(@Param('id') id: number): Promise<Marque> {
    return this.marqueService.getMarqueById(id);
  }

  @Post('')
  createMarque(@Body() marque: MarqueDto): Promise<Marque> {
    return this.marqueService.createMarque(marque);
  }

  @Patch('/:id')
  updateMarque(
    @Param('id') id: number,
    @Body() marque: UpdateMarqueDto,
  ): Promise<Marque> {
    return this.marqueService.updateMarque(id, marque);
  }

  @Delete('/:id')
  deleteMarque(@Param('id') id: number): Promise<string> {
    return this.marqueService.deleteMarque(id);
  }
}
