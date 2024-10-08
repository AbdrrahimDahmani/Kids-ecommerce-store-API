import { Admin } from 'typeorm';
import { Categorie } from './categorie.entity';
import { Commande } from './commande.entity';
import { Commercial } from './commercial.entity';
import { Fournisseur } from './fournisseur.entity';
import { LigneCommande } from './ligne-commande.entity';
import { Marque } from './marque.entity';
import { Product } from './product.entity';
import { Tag } from './tag.entity';
import { User } from './user.entity';
import { ProductCategorie } from './product-categorie.entity';
import { ProductTag } from './product-tag.entity';
import { Coupon } from './coupon.entity';
import { SubCategorie } from './sub-categorie.entity';
import { ProductSubCategorie } from './product-sub-categories.entity';
import { Galerie } from './galerie.entity';

const entities = [
  User,
  Product,
  Categorie,
  Tag,
  Marque,
  Commande,
  LigneCommande,
  Fournisseur,
  Commercial,
  Admin,
  ProductCategorie,
  ProductTag,
  Coupon,
  SubCategorie,
  ProductSubCategorie,
  Galerie,
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
  Commercial,
  Admin,
  ProductCategorie,
  ProductTag,
  Coupon,
  SubCategorie,
  ProductSubCategorie,
  Galerie,
};
export default entities;
