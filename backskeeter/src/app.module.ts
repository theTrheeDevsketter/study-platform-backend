import { GithubModule } from './auth/github/github.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagsController } from './tags/tags.controller';
import { PrismaService } from './prisma/prisma.service';
import { TagsService } from './tags/tags.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),
    GithubModule,
    UsersModule,
  ],
  controllers: [AppController, TagsController, UsersController],
  providers: [AppService, PrismaService, TagsService, UsersService],
})
export class AppModule {}
