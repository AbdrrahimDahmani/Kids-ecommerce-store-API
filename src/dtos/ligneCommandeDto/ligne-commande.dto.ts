import { Commande, Product } from 'src/entities';

export class LigneCommandeDto {
  quantiteCommande: number;

  product: Product;

  commande: Commande;
}
