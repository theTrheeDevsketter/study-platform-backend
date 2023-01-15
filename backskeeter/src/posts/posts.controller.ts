import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Posti } from '@prisma/client';
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

  @Get('user')
  async getPostByUser(
    @Param('userId') userId: string,
    @Param('pages') pages: number,
    @Param('limit') limit: number,
  ): Promise<Posti[]> {
    return this.postService.getPostByUser(userId, pages, limit);
  }

  @Post()
  async createPost(@Body() newPost: Posti): Promise<Posti> {
    return this.postService.save(newPost);
  }

  @Put('id')
  async updatePost(
    @Param('id') id: string,
    @Body() updatedPost: Posti,
  ): Promise<Posti> {
    return this.postService.save(updatedPost, id);
  }

  @Delete('id')
  async deletePost(@Param('id') id: string): Promise<Posti> {
    return this.postService.delete(id);
  }
}
