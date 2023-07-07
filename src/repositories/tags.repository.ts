import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { TagDto } from 'src/dtos/tagDto/create-tag.dto';
import { UpdateTagDto } from 'src/dtos/tagDto/update-tag.dto';
import { Tag } from 'src/entities';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class TagRepository extends Repository<Tag> {
  constructor(private datasource: DataSource) {
    super(Tag, datasource.createEntityManager());
  }

  async getAllTags(nom: string): Promise<Tag[]> {
    const query = this.createQueryBuilder('tag');

    if (nom)
      query.andWhere('Lower(tag.nom) LIKE :nom', {
        nom: `%${nom.toLowerCase()}%`,
      });

    const tags = await query.getMany();

    return tags;
  }

  async getTagById(id: number): Promise<Tag> {
    const tag = await this.findOne({ where: { id } });
    if (!tag) throw new NotFoundException('tag not found');
    return tag;
  }

  async createTag(tagDto: TagDto): Promise<Tag> {
    const { nom } = tagDto;
    this.create({ nom });
    try {
      return await this.save(tagDto);
    } catch (error) {
      if (error.code === '23505') throw new ConflictException('Tag exist deja');
      else throw new InternalServerErrorException();
    }
  }

  async updateTag(id: number, tagDto: UpdateTagDto): Promise<Tag> {
    const { nom } = tagDto;
    const tag = await this.getTagById(id);
    if (nom) tag.nom = nom;

    return await this.save(tag);
  }

  async deleteTag(id: number): Promise<string> {
    const tag = await this.getTagById(id);
    if (await this.remove(tag)) return `tag ${tag.nom} est supprimé`;
  }
}
