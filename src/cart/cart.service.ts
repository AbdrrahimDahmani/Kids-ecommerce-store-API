import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartDto } from 'src/dtos/cartDto/cart.dto';
import { UpdateCartDto } from 'src/dtos/cartDto/updateCart.dto';
import { Cart } from 'src/entities';
import { CartRepository } from 'src/repositories';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartRepository) private cartRepo: CartRepository,
  ) {}

  async getCartById(id: string): Promise<Cart> {
    return await this.cartRepo.getCartById(id);
  }
  async createCart(cartDto: CartDto): Promise<Cart> {
    return await this.cartRepo.createCart(cartDto);
  }
  async updateCart(
    cartId: string,
    updateCartDto: UpdateCartDto,
  ): Promise<Cart> {
    return await this.cartRepo.updateCart(cartId, updateCartDto);
  }

  async deleteCart(cartId: string): Promise<string> {
    return await this.cartRepo.deleteCart(cartId);
  }
}
