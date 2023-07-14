import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategorieDto } from 'src/dtos/categorieDto/create-categorie.dto';
import { UpdateCategorieDto } from 'src/dtos/categorieDto/update-categorie.dto';
import { Categorie } from 'src/entities';
import { CategorieRepository } from 'src/repositories';

@Injectable()
export class CategoriesService {
  /**
   *
   */
  constructor(
    @InjectRepository(CategorieRepository)
    private categorieRepo: CategorieRepository,
  ) {}

  async getAllCategories(nom: string): Promise<Categorie[]> {
    return await this.categorieRepo.getAllCategories(nom);
  }

  async getCategorieById(id: number): Promise<Categorie> {
    return await this.categorieRepo.getCategorieById(id);
  }

  async createCategorie(categorie: CategorieDto): Promise<Categorie> {
    return await this.categorieRepo.createCategorie(categorie);
  }

  async initializeCategorie(): Promise<Categorie> {
    return this.categorieRepo.initializeCategorie();
  }

  async updateCategorie(
    id: number,
    categorie: UpdateCategorieDto,
  ): Promise<Categorie> {
    return await this.categorieRepo.updateCategorie(id, categorie);
  }

  async deleteCategorie(id: number): Promise<string> {
    return await this.categorieRepo.deleteCategorie(id);
  }
}
