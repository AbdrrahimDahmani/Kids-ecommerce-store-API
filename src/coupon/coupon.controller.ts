import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { Coupon } from 'src/entities';

@Controller('coupon')
export class CouponController {
  /**
   *
   */
  constructor(private couponService: CouponService) {}
  @Get('/:code')
  getCouponByCode(@Param('code') code: string): Promise<Coupon> {
    return this.couponService.getCouponByCode(code);
  }
  @Post()
  createCoupon(@Body() coupon: Coupon): Promise<Coupon> {
    return this.couponService.createCoupon(coupon);
  }
  @Delete('/:code')
  async destroyCoupon(@Param('code') coupon: string) {
    await this.couponService.deleteCoupon(coupon);
    return { message: 'Coupon supprimé avec succès.' };
  }
}
