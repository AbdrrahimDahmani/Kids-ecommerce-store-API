import { Module } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { CouponController } from './coupon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coupon } from 'src/entities';
import { CouponRepository } from 'src/repositories';

@Module({
  imports: [TypeOrmModule.forFeature([Coupon])],
  providers: [CouponService, CouponRepository],
  controllers: [CouponController],
})
export class CouponModule {}
