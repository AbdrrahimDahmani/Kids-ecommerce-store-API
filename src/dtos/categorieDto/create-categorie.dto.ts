import { IsNotEmpty, IsString } from 'class-validator';

export class CategorieDto {
  @IsString()
  @IsNotEmpty()
  nom: string;
}
