import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CouponDto } from 'src/dtos/couponDto/create-coupon.dto';
import { Coupon } from 'src/entities';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CouponRepository extends Repository<Coupon> {
  constructor(private datasource: DataSource) {
    super(Coupon, datasource.createEntityManager());
  }

  async getCouponByCode(code: string): Promise<Coupon> {
    const coupon = await this.findOne({ where: { code } });
    if (!coupon) throw new NotFoundException('Coupon introuvable');
    return coupon;
  }

  async createCoupon(couponDto: CouponDto): Promise<Coupon> {
    const { code, type, value, active, expiration_date } = couponDto;
    this.create({
      code,
      type,
      value,
      active,
      expiration_date,
      created_at: new Date(),
    });
    try {
      return await this.save(couponDto);
    } catch (error) {
      if (error.code === '23505')
        throw new ConflictException('coupon exist deja');
      else throw new InternalServerErrorException();
    }
  }
  async destroyCoupon(couponCode: string) {
    const coupon = await this.getCouponByCode(couponCode);
    return await this.remove(coupon);
  }
}
