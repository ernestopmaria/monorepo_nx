import { Injectable } from '@nestjs/common';
import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ProductsService {
  async getProducts(): Promise<Product[]> {
    return await prisma.product.findMany();
  }
}
