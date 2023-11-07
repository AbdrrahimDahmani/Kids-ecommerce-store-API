import { CouponType } from 'src/enum/coupon-type.enum';

export class CouponDto {
  code: string;
  type: CouponType;
  value: number;
  active: boolean;
  expiration_date: Date;
  created_at: Date;
}
