import { Injectable, NotFoundException } from '@nestjs/common';
import { CartDto } from 'src/dtos/cartDto/cart.dto';
import { UpdateCartDto } from 'src/dtos/cartDto/updateCart.dto';
import { Cart, Cupon, Product } from 'src/entities';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CartRepository extends Repository<Cart> {
  constructor(private datasource: DataSource) {
    super(Cart, datasource.createEntityManager());
  }

  async getCartById(id: string): Promise<Cart> {
    const found = await this.findOneBy({ cart_id: id });
    if (!found) throw new NotFoundException('Panier non trouvé');
    return found;
  }

  async createCart(cartDto: CartDto): Promise<Cart> {
    const { quantity, userId, productId, cuponId } = cartDto;
    if (cuponId) {
      const getCupon = this.datasource.getRepository(Cupon);
      const found = await getCupon.findOneBy({ id: cuponId.id });
      if (found) {
        const cart = this.create({
          quantity,
          user: userId,
          product: productId,
          commande: null,
          cupon: cuponId,
        });

        return await this.save(cart);
      }
    }
    const cart = this.create({
      quantity,
      user: userId,
      product: productId,
      commande: null,
      cupon: null,
    });

    await this.save(cart);
    return await this.save(cart);
  }

  async updateCart(
    cartId: string,
    updateCartDto: UpdateCartDto,
  ): Promise<Cart> {
    const { quantity, commandeId } = updateCartDto;
    const cart = await this.getCartById(cartId);
    const product = this.datasource.getRepository(Product);
    const productQuantite = await product.findOneBy({ id: cart.product.id });

    if (commandeId) {
      cart.commande = commandeId;
      if (productQuantite.quantiteStock < cart.quantity) {
        throw new NotFoundException('Quantité insuffisante');
      } else {
        productQuantite.quantiteStock =
          productQuantite.quantiteStock - cart.quantity;
        await product.save(productQuantite);
      }
    }
    if (quantity) {
      cart.quantity = quantity;
    }

    return await this.save(cart);
  }
  async deleteCart(cartId: string): Promise<string> {
    const find = await this.getCartById(cartId);

    await this.remove(find);
    return `Pannier d'Id: ${cartId} est supprimée`;
  }
}
