import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  async getUser(
    @Param('pages') pages: number,
    @Param('limit') limit: number,
  ): Promise<User[]> {
    return this.userService.getUser(pages, limit);
  }

  @Post('/create')
  async saveUser(@Body() user: User): Promise<User> {
    return this.userService.saveUser(user);
  }

  @Delete('/delete')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser(id);
  }

  @Put('/update')
  async updateUser(@Body() user: User): Promise<User> {
    return this.userService.saveUser(user);
  }
}
