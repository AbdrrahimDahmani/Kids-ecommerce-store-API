import { CouponType } from 'src/enum/coupon-type.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Coupon {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  code: string;
  @Column({
    type: 'enum',
    enum: ['percentage', 'price_discount'],
  })
  type: CouponType;
  @Column()
  value: number;
  @Column()
  active: boolean;
  @Column()
  expiration_date: Date;
  @Column()
  created_at: Date;
}
