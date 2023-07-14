import { IsUUID } from 'class-validator';

export class CreateProductCategoriesDto {
  @IsUUID('all')
  productId: string;
  // @IsNumber()
  categorieId: number;
}
