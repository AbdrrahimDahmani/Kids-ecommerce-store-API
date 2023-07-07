import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from 'src/entities';
import { TagRepository } from 'src/repositories/tags.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Tag])],
  providers: [TagsService, TagRepository],
  controllers: [TagsController],
})
export class TagsModule {}
