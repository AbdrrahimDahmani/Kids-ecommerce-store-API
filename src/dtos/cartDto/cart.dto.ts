import { Commande, Cupon, Product, User } from 'src/entities';

export class CartDto {
  quantity: number;

  userId: User;

  productId: Product;

  commandeId: Commande;

  cuponId: Cupon;
}
