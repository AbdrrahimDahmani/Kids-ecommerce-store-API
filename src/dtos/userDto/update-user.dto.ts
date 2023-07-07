import { IsEmail, IsOptional, IsPhoneNumber } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  nom: string;
  @IsOptional()
  prenom: string;
  @IsOptional()
  @IsPhoneNumber('MO')
  tel: string;
  @IsOptional()
  adresse: string;
  @IsOptional()
  ville: string;
  @IsOptional()
  @IsEmail()
  email: string;
}
