import { Module } from '@nestjs/common';
import { ProductTagsService } from './product-tags.service';
import { ProductTagsController } from './product-tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductTag } from 'src/entities';
import { ProductTagsRepository } from 'src/repositories';

@Module({
  imports: [TypeOrmModule.forFeature([ProductTag])],
  providers: [ProductTagsService, ProductTagsRepository],
  controllers: [ProductTagsController],
})
export class ProductTagsModule {}
