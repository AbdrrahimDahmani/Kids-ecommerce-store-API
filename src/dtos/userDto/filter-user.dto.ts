import { IsOptional, IsString } from 'class-validator';

export class FilterUser {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  email?: string;
}
