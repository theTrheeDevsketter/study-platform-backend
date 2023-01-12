import { Injectable } from '@nestjs/common';
import { Prisma, Tags } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}

  async tag(): Promise<Tags> {
    return {
      id: '121',
      name: 'kaka',
    };
  }

  async createTag(data: Prisma.TagsCreateInput): Promise<Tags> {
   return this.prisma.tags.create({
      data,
    });
  }
}
