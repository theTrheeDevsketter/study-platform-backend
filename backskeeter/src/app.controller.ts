import { JwtAuthGuard } from './auth/jwt/jwt-auth.guard';
import { Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: Request) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('test')
  getTest() {
    return process.env.JWT_EXPIRATION_TIME_SECONDS;
  }
}
