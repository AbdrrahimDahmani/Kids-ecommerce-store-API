import { IsOptional, IsString } from 'class-validator';

export class UpdateCategorieDto {
  @IsString()
  @IsOptional()
  nom: string;

  @IsOptional()
  image: string;
}
