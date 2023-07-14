import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Product } from 'src/entities';

export class CategorieDto {
  id: number;
  @IsString()
  @IsNotEmpty()
  nom: string;
  @IsOptional()
  image: string;
  products: Product[];
}
