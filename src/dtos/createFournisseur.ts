import { IsNotEmpty, Matches } from 'class-validator';

export class FournisseurDto {
  @IsNotEmpty()
  nom: string;
  @IsNotEmpty()
  @Matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, {
    message: 'Veuillez entrer un email valide',
  })
  email: string;
  @IsNotEmpty()
  adresse: string;
  @IsNotEmpty()
  tel: string;
}
