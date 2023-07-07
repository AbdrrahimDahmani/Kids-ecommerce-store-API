import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  nom: string;
  @IsNotEmpty()
  prenom: string;
  @IsNotEmpty()
  @IsPhoneNumber('MO')
  tel: string;
  @IsNotEmpty()
  adresse: string;
  @IsNotEmpty()
  ville: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
