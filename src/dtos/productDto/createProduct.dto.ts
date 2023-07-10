import { CategorieDto } from '../categorieDto/create-categorie.dto';
import { FournisseurDto } from '../fournisseurDto/createFournisseur';
import { MarqueDto } from '../marqueDto/create-marque.dto';
import { TagDto } from '../tagDto/create-tag.dto';

export class ProductDto {
  id: string;
  titre: string;
  description: string;
  prixFournisseur: number;
  prix: number;
  tauxPromo: number;
  quantiteStock: number;
  image?: string;
  categories: CategorieDto[];
  marque: MarqueDto[];
  tags: TagDto[];
  fournisseur: FournisseurDto;
}
