import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
}
