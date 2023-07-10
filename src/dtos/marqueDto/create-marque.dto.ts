import { IsNotEmpty, IsString } from 'class-validator';
import { Product } from 'src/entities';

export class MarqueDto {
  id: number;
  @IsNotEmpty()
  @IsString()
  nom: string;

  @IsNotEmpty()
  @IsString()
  description: string;
  products: Product;
}
