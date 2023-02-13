// import { AuthProvider } from './../shared/types/auth';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { Profile } from 'passport-github';
import { PrismaService } from 'src/prisma/prisma.service';

// import { profile } from 'console';

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

  // async saveUser(user: User): Promise<User> {
  //   return this.prisma.user.upsert({
  //     create: {
  //       isBanned: '',
  //       isDeleted: '',
  //       strikes: 'none',
  //     },
  //     update: {
  //       isBanned: user.isBanned,
  //       isDeleted: user.isDeleted,
  //       strikes: user.strikes,
  //     },
  //     where: { id: user?.id },
  //   });
  // }

  async findOrCreate({ userName, avatar_url }: User) {
    const user = await this.prisma.user.findFirst({
      where: {
        userName,
      },
    });
    if (user) {
      return user;
    } else {
      return this.prisma.user.create({
        data: {
          role: 'user',
          userName,
          avatar_url,
        },
      });
    }
  }
}
