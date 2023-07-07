import { Injectable, NotFoundException } from '@nestjs/common';
import { MarqueDto } from 'src/dtos/marqueDto/create-marque.dto';
import { UpdateMarqueDto } from 'src/dtos/marqueDto/update-marque.dto';
import { Marque } from 'src/entities';

import { DataSource, Repository } from 'typeorm';

@Injectable()
export class MarqueRepository extends Repository<Marque> {
  constructor(private dataSource: DataSource) {
    super(Marque, dataSource.createEntityManager());
  }

  async getAllMarques(search: string): Promise<Marque[]> {
    const query = this.createQueryBuilder('marque');

    if (search)
      query.andWhere(
        'Lower(marque.nom) LIKE :search or Lower(marque.description) LIKE :search',
        {
          search: `%${search.toLowerCase()}%`,
        },
      );

    const marques = await query.getMany();
    if (marques.length === 0) throw new NotFoundException('marques non trouvé');

    return marques;
  }

  async getMarqueById(id: number): Promise<Marque> {
    const marque = await this.findOne({
      where: {
        id,
      },
    });
    if (!marque) throw new NotFoundException('marque non trouvé');
    return marque;
  }

  async createMarque(marqueDto: MarqueDto): Promise<Marque> {
    const { nom, description } = marqueDto;
    const newMaruque = this.create({
      nom,
      description,
    });
    return await this.save(newMaruque);
  }
  async updateMarque(id: number, marqueDto: UpdateMarqueDto): Promise<Marque> {
    const { nom, description } = marqueDto;
    const marque = await this.getMarqueById(id);
    if (nom) marque.nom = nom;
    if (description) marque.description = description;

    return await this.save(marque);
  }
  async deleteMarque(id: number): Promise<string> {
    const marque = await this.getMarqueById(id);
    if (await this.remove(marque))
      return `La marque ${marque.nom} est supprimé`;
  }
}
