import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/dtos/productDto/createProduct.dto';
import { FilterProductDto } from 'src/dtos/productDto/filter-product.dto';
import { UpdateProductDto } from 'src/dtos/productDto/update-product.dto';
import { Product, ProductCategorie } from 'src/entities';
import { ProductRepository } from 'src/repositories';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRepository)
    private productsRepository: ProductRepository,
  ) {}

  async getAllProducts(filterProduct: FilterProductDto): Promise<Product[]> {
    return await this.productsRepository.getAllProducts(filterProduct);
  }

  async getProductById(id: string): Promise<Product> {
    return await this.productsRepository.getProductById(id);
  }

  async createProduct(productDto: ProductDto): Promise<Product> {
    return await this.productsRepository.createProduct(productDto);
  }

  async deleteProduct(id: string): Promise<string> {
    return await this.productsRepository.deleteProduct(id);
  }

  async updateProduct(
    id: string,
    productDto: UpdateProductDto,
  ): Promise<Product> {
    return await this.productsRepository.updateProduct(id, productDto);
  }

  async filterProductByCategorie(
    categorie: string,
    limit: number,
  ): Promise<ProductCategorie[]> {
    return await this.productsRepository.filterProductByCategorie(
      categorie,
      limit,
    );
  }
}
