import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CategorieDto } from 'src/dtos/categorieDto/create-categorie.dto';
import { UpdateCategorieDto } from 'src/dtos/categorieDto/update-categorie.dto';
import { Categorie } from 'src/entities';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CategorieRepository extends Repository<Categorie> {
  constructor(private datasource: DataSource) {
    super(Categorie, datasource.createEntityManager());
  }

  async getAllCategories(nom: string, limit: number): Promise<Categorie[]> {
    const query = this.createQueryBuilder('categorie');
    if (limit) query.limit(limit);
    if (nom)
      query.andWhere('Lower(categorie.nom) LIKE :search', {
        search: `%${nom.toLowerCase()}%`,
      });

    const categories = await query.getMany();

    return categories;
  }

  async getCategorieById(id: number): Promise<Categorie> {
    const categorie = await this.findOne({ where: { id } });
    if (!categorie) throw new NotFoundException('Categorie not found');
    return categorie;
  }

  async createCategorie(categorieDto: CategorieDto): Promise<Categorie> {
    const { nom, image } = categorieDto;
    this.create({ nom, image });
    try {
      return await this.save(categorieDto);
    } catch (error) {
      if (error.code === '23505')
        throw new ConflictException('categorie exist deja');
      else throw new InternalServerErrorException();
    }
  }

  async initializeCategorie(): Promise<Categorie> {
    const initialized = await this.findOneBy({ id: 1 });
    const categorie = new Categorie();
    if (initialized) throw new ConflictException('categorie exist deja');
    else {
      categorie.id = 1;
      categorie.nom = 'Uncategorized';
    }

    return await this.save(categorie);
  }

  async updateCategorie(
    id: number,
    categorieDto: UpdateCategorieDto,
  ): Promise<Categorie> {
    const { nom, image } = categorieDto;
    const categorie = await this.getCategorieById(id);
    if (nom) categorie.nom = nom;
    if (image) categorie.image = image;
    return await this.save(categorie);
  }

  async deleteCategorie(id: number): Promise<string> {
    const categorie = await this.getCategorieById(id);
    if (await this.remove(categorie))
      return `categorie ${categorie.nom} est supprimé`;
  }
}
