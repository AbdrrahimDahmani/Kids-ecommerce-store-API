import { Categorie } from './categorie.entity';
import { Commande } from './commande.entity';
import { Fournisseur } from './fournisseur.entity';
import { LigneCommande } from './ligne-commande.entity';
import { Marque } from './marque.entity';
import { Product } from './product.entity';
import { Tag } from './tag.entity';
import { User } from './user.entity';

const entities = [
  User,
  Product,
  Categorie,
  Tag,
  Marque,
  Commande,
  LigneCommande,
  Fournisseur,
];
export {
  User,
  Product,
  Categorie,
  Tag,
  Marque,
  Commande,
  LigneCommande,
  Fournisseur,
};
export default entities;
