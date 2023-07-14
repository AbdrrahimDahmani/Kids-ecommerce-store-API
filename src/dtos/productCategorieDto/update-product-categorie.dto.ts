import { IsUUID } from 'class-validator';

export class UpdateProductCategoriesDto {
  @IsUUID('all')
  productId: string;
  // @IsNumber()
  categorieId: number;
}
