import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ProductsService extends BaseService<product, CreateProductDto ,  UpdateProductDto>{
  constructor(prisma: PrismaService) {
    super(prisma, 'product');
  }
  async create(CreateProductDto:CreateProductDto): Promise<product> {
    return this.prisma.product.create({ data: CreateProductDto});
  }

  async findAll(): Promise<product[]> {
    return this.prisma.product.findMany();
  }

  async findOne(id: string): Promise<product> {
    return this.prisma.product.findUnique({where: { id }});
  }

  async update(id: string, updateHeroDto: UpdateProductDto ): Promise<product> {
    return this.prisma.product.update({where: { id }, data: updateHeroDto });
  }

  async remove(id: string): Promise<product> {
    return this.prisma.product.delete({ where: { id }});
  }
}