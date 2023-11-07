import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CouponDto } from 'src/dtos/couponDto/create-coupon.dto';
import { Coupon } from 'src/entities';
import { CouponRepository } from 'src/repositories';

@Injectable()
export class CouponService {
  constructor(
    @InjectRepository(CouponRepository)
    private couponRepo: CouponRepository,
  ) {}
  async getCouponByCode(code: string): Promise<Coupon> {
    return await this.couponRepo.getCouponByCode(code);
  }
  async createCoupon(coupon: CouponDto): Promise<Coupon> {
    return await this.couponRepo.createCoupon(coupon);
  }
  async deleteCoupon(coupon: string): Promise<void> {
    await this.couponRepo.destroyCoupon(coupon);
  }
}
