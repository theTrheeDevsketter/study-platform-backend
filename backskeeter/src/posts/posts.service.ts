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
  save(updatedPost: Posti, id?: string): Promise<Posti> {
    return this.prisma.posti.upsert({
      create: {
        author: updatedPost.author,
        isPosted: false,
        title: updatedPost.title,
        tags: updatedPost.tags,
      },
      update: {
        ...updatedPost,
      },
      where: {
        id,
      },
    });
  }
  getPostByUser(
    userId: string,
    pages: number,
    limit: number,
  ): Promise<Posti[]> {
    return this.prisma.posti.findMany({
      where: {
        id: userId,
      },
      take: pages,
    });
  }
  getPost(pages: number, limit: number): Promise<Posti[]> {
    return this.prisma.posti.findMany({
      take: pages,
    });
  }
}
