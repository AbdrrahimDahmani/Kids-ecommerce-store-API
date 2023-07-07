import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagDto } from 'src/dtos/tagDto/create-tag.dto';
import { UpdateTagDto } from 'src/dtos/tagDto/update-tag.dto';
import { Tag } from 'src/entities';
import { TagRepository } from 'src/repositories/tags.repository';

@Injectable()
export class TagsService {
  /**
   *
   */
  constructor(
    @InjectRepository(TagRepository) private tagRepo: TagRepository,
  ) {}

  async getAllTags(nom: string): Promise<Tag[]> {
    return this.tagRepo.getAllTags(nom);
  }

  async getTagById(id: number): Promise<Tag> {
    return this.tagRepo.getTagById(id);
  }

  async createTag(tag: TagDto): Promise<Tag> {
    return this.tagRepo.createTag(tag);
  }

  async updateTag(id: number, tag: UpdateTagDto): Promise<Tag> {
    return this.tagRepo.updateTag(id, tag);
  }

  async deleteTag(id: number): Promise<string> {
    return this.tagRepo.deleteTag(id);
  }
}
