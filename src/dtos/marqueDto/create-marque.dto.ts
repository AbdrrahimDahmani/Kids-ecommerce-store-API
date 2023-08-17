import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Product } from 'src/entities';

export class MarqueDto {
  id: number;
  @IsNotEmpty()
  @IsString()
  nom: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsString()
  @IsOptional()
  image: string;
  products: Product;
}
