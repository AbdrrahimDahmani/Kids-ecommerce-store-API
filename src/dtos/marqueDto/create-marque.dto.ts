import { IsNotEmpty, IsString } from 'class-validator';

export class MarqueDto {
  @IsNotEmpty()
  @IsString()
  nom: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
