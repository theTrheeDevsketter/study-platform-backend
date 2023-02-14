import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Tags } from '@prisma/client';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}
  @Get()
  async getOneTag(): Promise<Tags[]> {
    return this.tagsService.tag();
  }

  @Post('/create')
  async create(@Body() tag: Tags): Promise<Tags> {
    return this.tagsService.createTag(tag);
  }
  @Put()
  async updateTag(
    @Param('id') id: string,
    @Body() name: string,
  ): Promise<Tags> {
    return this.tagsService.updateTag(id, name);
  }
  @Delete()
  async deleteTag(@Param('id') id: string): Promise<Tags> {
    return this.tagsService.deleteTag(id);
  }
}
