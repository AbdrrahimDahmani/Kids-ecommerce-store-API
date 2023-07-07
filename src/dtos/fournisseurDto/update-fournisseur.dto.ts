import { IsEmail, IsOptional, IsPhoneNumber } from 'class-validator';

export class UpdateFournisseurDto {
  @IsOptional()
  nom: string;
  @IsOptional()
  @IsEmail()
  email: string;
  @IsOptional()
  adresse: string;
  @IsOptional()
  @IsPhoneNumber('MO')
  tel: string;
}
