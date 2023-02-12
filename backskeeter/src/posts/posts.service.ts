import { Injectable } from '@nestjs/common';
import { Posti, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  delete(id: string): Promise<Posti> {
    return this.prisma.posti.delete({
      where: {
        id,
      },
    });
  }
  save(data: Prisma.PostiCreateInput): Promise<Posti> {
    
    return this.prisma.posti.create({
      data
    });
  }

  update(data: Prisma.PostiUpdateInput, id: string): Promise<Posti> {
    
    return this.prisma.posti.update({
      where: {
        id
      },
      data
    });
  }

  getPostByUser(
    user: string,
    pages: string,
    limit: string,
  ): Promise<Posti[]> {
    const pagesNum = parseInt(pages)
    return this.prisma.posti.findMany({
      where: {
        author: user,
      },
      take: pagesNum,
    });
  }
  getPost(pages: number, limit: number): Promise<Posti[]> {
    return this.prisma.posti.findMany({
      take: pages,
    });
  }
  getPostById(id: string): Promise<Posti> {
    return this.prisma.posti.findFirst({ where: { id } });
  }
}
