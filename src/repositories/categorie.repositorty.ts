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

  async getCategorieById(id: number): Promise<Categorie> {
    const categorie = await this.findOne({ where: { id } });
    if (!categorie) throw new NotFoundException('Utilisateur not found');
    return categorie;
  }

  async createCategorie(categorieDto: CategorieDto): Promise<Categorie> {
    const { nom } = categorieDto;
    this.create({ nom });
    try {
      return await this.save(categorieDto);
    } catch (error) {
      if (error.code === '23505')
        throw new ConflictException('categorie exist deja');
      else throw new InternalServerErrorException();
    }
  }

  async updateCategorie(
    id: number,
    categorieDto: UpdateCategorieDto,
  ): Promise<Categorie> {
    const { nom } = categorieDto;
    const categorie = await this.getCategorieById(id);
    if (nom) categorie.nom = nom;

    return await this.save(categorie);
  }

  async deleteCategorie(id: number): Promise<string> {
    const categorie = await this.getCategorieById(id);
    if (await this.remove(categorie))
      return `categorie ${categorie.nom} est supprimé`;
  }
}
