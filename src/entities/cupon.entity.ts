import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cupon {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  discount_percent: number;
  @Column()
  active: boolean;
  @Column()
  expiration_date: Date;
  @Column()
  created_at: Date;
}
