import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Posti, Prisma } from '@prisma/client';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}
  @Get()
  async getPost(
    @Param('pages') pages: number,
    @Param('limit') limit: number,
  ): Promise<Posti[]> {
    return this.postService.getPost(pages, limit);
  }

  @Get('user=:user&pages=:pages&limit=:limit')
  async getPostByUser(
    @Param('user') user: string,
    @Param('pages') pages: string,
    @Param('limit') limit: string,
  ): Promise<Posti[]> {
    return this.postService.getPostByUser(user, pages, limit);
  }

  @Post()
  async createPost(@Body() newPost: Posti): Promise<Posti> {
    return this.postService.save(newPost);
  }

  @Put(':id')
  async updatePost(
    @Param('id') id: string,
    @Body() updatedPost: Posti,
  ): Promise<Posti> {
    return this.postService.update(updatedPost, id);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<Posti> {
    return this.postService.delete(id);
  }
}
