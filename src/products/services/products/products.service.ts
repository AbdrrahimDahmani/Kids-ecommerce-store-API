import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/dtos/createProduct.dto';
import { Product } from 'src/entities';
import { ProductRepository } from 'src/repositories';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRepository)
    private productsRepository: ProductRepository,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return await this.productsRepository.find();
  }

  async getProductById(id: string): Promise<Product> {
    const found = await this.productsRepository.findOne({ where: { id } });
    if (!found) throw new NotFoundException(`Product with ID ${id} Not found`);
    return found;
  }

  async createProduct(productDto: ProductDto): Promise<Product> {
    return;
  }
}
