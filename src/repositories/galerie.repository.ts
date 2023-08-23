import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { GalerieDto } from 'src/dtos/galerieDto/create-galerie.dto';
import { MarqueDto } from 'src/dtos/marqueDto/create-marque.dto';
import { UpdateMarqueDto } from 'src/dtos/marqueDto/update-marque.dto';
import { Galerie, Marque } from 'src/entities';

import { DataSource, QueryBuilder, Repository } from 'typeorm';

@Injectable()
export class GalerieRepository extends Repository<Galerie> {
  constructor(private dataSource: DataSource) {
    super(Galerie, dataSource.createEntityManager());
  }

  async getGalerieByProductId(productId: string): Promise<Galerie[]> {
    const galerie = await this.createQueryBuilder('galerie')
      .where('galerie.productId = :productId', { productId })
      .getMany();
    if (galerie.length == 0) throw new NotFoundException('galerie non trouvé');
    return galerie;
  }

  async createGalerie(galerieDto: GalerieDto): Promise<Galerie> {
    const { image, couleur, product } = galerieDto;
    const newGalerie = this.create({
      image,
      couleur,
      product: product,
    });
    return await this.save(newGalerie);
  }

  // async updateGalerie(id: number, marqueDto: UpdateMarqueDto): Promise<Marque> {
  //   const { nom, description, image } = marqueDto;
  //   const marque = await this.getMarqueById(id);
  //   if (nom) marque.nom = nom;
  //   if (description) marque.description = description;
  //   if (image) marque.image = image;
  //   return await this.save(marque);
  // }
  // async deleteMarque(id: number): Promise<string> {
  //   const marque = await this.getMarqueById(id);
  //   try {
  //     await this.remove(marque);
  //     return `La marque ${marque.nom} est supprimé`;
  //   } catch (error) {
  //     throw new UnauthorizedException(`Marque n'est pas supprimer`);
  //   }
  // }
}
