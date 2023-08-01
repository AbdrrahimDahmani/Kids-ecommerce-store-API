import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart } from 'src/entities';
import { CartDto } from 'src/dtos/cartDto/cart.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateCartDto } from 'src/dtos/cartDto/updateCart.dto';

@Controller('cart')
@ApiTags('Cart')
export class CartController {
  /**
   *
   */
  constructor(private cartService: CartService) {}

  @Get('/:id')
  getCartById(@Param('id') id: string): Promise<Cart> {
    return this.cartService.getCartById(id);
  }

  @Post()
  createCart(@Body() cartDto: CartDto): Promise<Cart> {
    return this.cartService.createCart(cartDto);
  }

  @Patch('/:id')
  updateCart(
    @Param('id') cartId: string,
    @Body() updateCartDto: UpdateCartDto,
  ): Promise<Cart> {
    return this.cartService.updateCart(cartId, updateCartDto);
  }

  @Delete('/:id')
  deleteCart(@Param('id') cartId: string): Promise<string> {
    return this.cartService.deleteCart(cartId);
  }
}
