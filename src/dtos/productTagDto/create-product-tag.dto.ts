import { IsString, IsUUID } from 'class-validator';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

export class CreateProductTagDto {
  @IsUUID('all')
  productId: string;
  @IsString()
  tagName: string;
}
