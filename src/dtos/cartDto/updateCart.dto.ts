import { Commande, Product } from 'src/entities';

export class UpdateCartDto {
  productId: Product;
  quantity: number;
  commandeId: Commande;
}
