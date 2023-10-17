import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { FournisseursModule } from './fournisseurs/fournisseurs.module';
import { MarqueModule } from './marque/marque.module';
import { CategoriesModule } from './categories/categories.module';
import { TagsModule } from './tags/tags.module';
import { ProductCategorieModule } from './product-categorie/product-categorie.module';
import { ProductTagsModule } from './product-tags/product-tags.module';
import { CommandeModule } from './commande/commande.module';
import { LigneCommandeModule } from './ligne-commande/ligne-commande.module';
import { GalerieModule } from './galerie/galerie.module';
import { CouponModule } from './coupon/coupon.module';
import entities from './entities';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'casakidsDB',
      autoLoadEntities: true,
      synchronize: true,
      entities: entities,
    }),
    UsersModule,
    ProductsModule,
    FournisseursModule,
    MarqueModule,
    CategoriesModule,
    TagsModule,
    ProductCategorieModule,
    ProductTagsModule,
    CommandeModule,
    LigneCommandeModule,
    GalerieModule,
    CouponModule,
  ],
})
export class AppModule {}
