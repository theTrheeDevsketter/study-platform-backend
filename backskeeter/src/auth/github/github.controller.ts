import { User } from './../../shared/';
import { GithubOauthGuard } from './github.guard';
import { JwtAuthService } from './../jwt/jwt.service';
import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";

import { Request, Response } from 'express';


@Controller('auth/github')
export class GithubOauthController {
    constructor(private jwtAuthService: JwtAuthService) {}


    @Get()
    @UseGuards(GithubOauthGuard)
    async githubAuth() {
        // Automatic AuthGuard provided by @nestjs/passport
    }

    @Get('callback')
    @UseGuards(GithubOauthGuard)
    async githubAuthCallback(@Req() req: Request, @Res({ passthrough: true }) res: Response) {

        const user = req.user as User;

        const { accessToken } = this.jwtAuthService.login(user);
        return { accessToken: accessToken}
    }
}