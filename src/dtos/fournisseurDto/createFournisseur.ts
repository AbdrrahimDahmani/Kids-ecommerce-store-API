import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class FournisseurDto {
  @IsNotEmpty()
  nom: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  adresse: string;
  @IsNotEmpty()
  @IsPhoneNumber('MO')
  tel: string;
}
