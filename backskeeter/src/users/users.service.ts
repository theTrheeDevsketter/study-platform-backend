import { AuthProvider } from './../shared/types/auth';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Profile } from 'passport-github';
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

  async findOrCreate(githubId: string, provider: AuthProvider, profile: Profile ) {

    const user = await this.prisma.user.findFirst({
      where: {
        githubId
      }
    });

    if(user){
      return user;
    }else{
      return this.prisma.user.create({
        data:{
          githubId,
          userName: profile.username,
          profileUrl: profile.profileUrl,         
          avatar_url: profile._json.avatar_url,         
          blog: profile._json.blog,
          location: profile._json.location,
          twitter_username: profile._json.twitter_username,
          public_repos: profile._json.public_repos.toString(),
          public_gist: profile._json.public_gist,
          strikes: null,
          isBanned: new Date(),
          isDeleted: new Date(),
        }
      })
    }
    return null;
  }
}
