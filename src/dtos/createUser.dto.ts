import { IsNotEmpty, Matches } from 'class-validator';

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
  @Matches(/^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/, {
    message: 'Veuillez entrer un email valide',
  })
  email: string;
}
