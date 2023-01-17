import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getUser(pages: number, limit: number): Promise<User[]> {
    return this.prisma.user.findMany({
      take: pages,
    });
  }

  async getUserById(id: string): Promise<User> {
    return this.prisma.user.findFirst({ where: { id } });
  }

  async deleteUser(id: string): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }

  async saveUser(user: User): Promise<User> {
    return this.prisma.user.upsert({
      create: {
        isBanned: '',
        isDeleted: '',
        userEmail: user.userEmail,
        strikes: 'none',
      },
      update: {
        isBanned: user.isBanned,
        isDeleted: user.isDeleted,
        strikes: user.strikes,
        userEmail: user.userEmail,
      },
      where: { id: user?.id },
    });
  }
}
