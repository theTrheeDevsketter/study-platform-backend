import { Injectable } from '@nestjs/common';
import { Prisma, Tags } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}

  async tag(): Promise<Tags[]> {
    return this.prisma.tags.findMany();
  }

  async createTag(data: Prisma.TagsCreateInput): Promise<Tags> {
    return this.prisma.tags.create({
      data,
    });
  }

  async deleteTag(id: string): Promise<Tags> {
    return this.prisma.tags.delete({
      where: {
        id,
      },
    });
  }
  async updateTag(id: string, name: string): Promise<Tags> {
    return this.prisma.tags.update({
      data: {
        name,
      },
      where: {
        id,
      },
    });
  }
}
