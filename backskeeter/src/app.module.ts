import { GithubModule } from './auth/github/github.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagsController } from './tags/tags.controller';
import { PrismaService } from './prisma/prisma.service';
import { TagsService } from './tags/tags.service';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),
    GithubModule,
  ],
  controllers: [AppController, TagsController, PostsController],
  providers: [AppService, PrismaService, TagsService, PostsService],
})
export class AppModule {}
