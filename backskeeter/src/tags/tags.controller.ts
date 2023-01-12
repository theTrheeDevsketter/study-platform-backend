import { Body, Controller, Get, Post } from '@nestjs/common';
import { Tags } from '@prisma/client';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}
  @Get()
  async getOneTag(): Promise<Tags> {
    return this.tagsService.tag();
  }

  @Post('/create')
  async create(@Body() tag: Tags): Promise<Tags> {
    return this.tagsService.createTag(tag);
  }
}
