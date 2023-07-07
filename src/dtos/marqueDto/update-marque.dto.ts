import { IsOptional, IsString } from 'class-validator';

export class UpdateMarqueDto {
  @IsOptional()
  @IsString()
  nom: string;

  @IsOptional()
  @IsString()
  description: string;
}
