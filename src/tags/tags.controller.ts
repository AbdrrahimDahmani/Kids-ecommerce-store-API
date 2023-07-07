import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { Tag } from 'src/entities';
import { TagDto } from 'src/dtos/tagDto/create-tag.dto';
import { UpdateTagDto } from 'src/dtos/tagDto/update-tag.dto';

@Controller('tags')
export class TagsController {
  /**
   *
   */
  constructor(private tagsService: TagsService) {}

  @Get('')
  getAllTags(@Query('nom') nom: string) {
    return this.tagsService.getAllTags(nom);
  }

  @Get('/:id')
  getTagbyId(@Param('id') id: number) {
    return this.tagsService.getTagById(id);
  }

  @Post('')
  createTag(@Body() tag: TagDto): Promise<Tag> {
    return this.tagsService.createTag(tag);
  }

  @Patch('/:id')
  updateTag(@Param('id') id: number, @Body() tag: UpdateTagDto): Promise<Tag> {
    return this.tagsService.updateTag(id, tag);
  }

  @Delete('/:id')
  deleteTag(@Param('id') id: number) {
    return this.tagsService.deleteTag(id);
  }
}
