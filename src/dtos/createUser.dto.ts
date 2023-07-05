import { IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  nom: string;
  @IsNotEmpty()
  prenom: string;
  @IsNotEmpty()
  tel: string;
  @IsNotEmpty()
  adresse: string;
  @IsNotEmpty()
  ville: string;
  @IsNotEmpty()
  email: string;
}
